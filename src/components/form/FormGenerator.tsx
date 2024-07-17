import React from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { z, ZodSchema } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';

interface FormGeneratorProps<T extends FieldValues> {
  validationSchema: ZodSchema<T>;
  apiHook: (data: T) => Promise<any>;
  renderForm: (props: {
    register: any;
    errors: any;
    handleSubmit: any;
    isLoading: boolean;
  }) => React.ReactNode;
  onSuccess?: () => void;
}

const FormGenerator = <T extends FieldValues>({
  validationSchema,
  apiHook,
  renderForm,
  onSuccess,
}: FormGeneratorProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({ resolver: zodResolver(validationSchema) });

  const mutation = useMutation(apiHook, {
    onSuccess: () => {
      if (onSuccess) onSuccess();
    },
  });

  const onSubmit: SubmitHandler<T> = (data) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderForm({ register, errors, handleSubmit, isLoading: mutation.isLoading })}
      {mutation.isError && <p>An error occurred. Please try again.</p>}
    </form>
  );
};

export default FormGenerator;