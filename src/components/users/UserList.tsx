import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const UserCard: React.FC<User> = ({ id, name, email, username, phone }) => {
    return (
        <div className={clsx('card', 'p-4', 'bg-white', 'shadow-lg', 'rounded-lg')}>
            <h2 className={clsx('text-xl', 'font-bold', 'mb-2')}>{id}</h2>
            <p className={clsx('text-gray-700')}>Name: {name}</p>
            <p className={clsx('text-gray-700')}>Username: {username}</p>
            <p className={clsx('text-gray-700')}>Email: {email}</p>
            <p className={clsx('text-gray-700')}>Phone: {phone}</p>
        </div>
    );
};

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                const users = response.data.map((user: any) => ({
                    ...user,
                }));
                setUsers(users);
                setLoading(false);
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    setError(err.message);
                } else {
                    setError('An unexpected error occurred');
                }
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section
            className={clsx(
                'bg-cream',
                'min-h-screen',
                'grid',
                'grid-cols-1',
                'lg:grid-cols-landing',
                'gap-16',
                'place-content-center',
                'p-8',
                'sm:p-16'
            )}
        >
            <div
                className={clsx(
                    'flex',
                    'flex-col',
                    'gap-6',
                    'items-start',
                    'self-center',
                    'w-full'
                )}
            >
                <h1
                    className={clsx(
                        'leading-normal',
                        'text-3xl',
                        'xl:text-5xl',
                        'xl:leading-normal',
                        'text-black'
                    )}
                >
                    User List
                </h1>
                <p className={clsx('text-gray80', 'text-2xl')}>
                    Here is a list of users fetched from an API.
                </p>
            </div>
            <div
                className={clsx(
                    'col-span-full',
                    'grid',
                    'gap-8',
                    'grid-cols-1',
                    'md:grid-cols-2',
                    'xl:grid-cols-4'
                )}
            >
                {users.map((user) => (
                    <UserCard key={user.id} {...user} />
                ))}
            </div>
        </section>
    );
};

export default UserList;