import React from 'react';
import clsx from 'clsx';
import FormGenerator from './FormGenerator';
import { validationSchema } from './validation-scheme/validation';
import { useCreatePost } from '../../services/api';

const CreatePostForm = () => {
  return (
    <FormGenerator
      validationSchema={validationSchema}
      apiHook={useCreatePost}
      renderForm={({ register, errors, handleSubmit, isLoading }) => (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">Title</label>
            <input
              id="title"
              {...register('title')}
              type="text"
              className={clsx(
                'w-full',
                'py-2',
                'px-3',
                'border',
                'rounded-md',
                'focus:outline-none',
                'focus:ring-2',
                'focus:ring-primary',
                'focus:border-transparent',
                {'border-red-500': errors.title}
              )}
            />
            {errors.title && <p className="text-red-500 mt-1">{errors.title.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block text-gray-700">Body</label>
            <textarea
              id="body"
              {...register('body')}
              className={clsx(
                'w-full',
                'py-2',
                'px-3',
                'border',
                'rounded-md',
                'focus:outline-none',
                'focus:ring-2',
                'focus:ring-primary',
                'focus:border-transparent',
                {'border-red-500': errors.body}
              )}
            />
            {errors.body && <p className="text-red-500 mt-1">{errors.body.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={clsx(
              'w-full',
              'py-2',
              'px-4',
              'bg-primary',
              'text-white',
              'rounded-md',
              'hover:bg-primary-dark',
              'focus:outline-none',
              'focus:ring-2',
              'focus:ring-primary'
            )}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    />
  );
};

export default CreatePostForm;