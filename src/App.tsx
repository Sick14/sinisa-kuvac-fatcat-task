import './styles.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Landing } from './components/landing/Landing';
import UserList from './components/users/UserList';
import PageGenerator from './components/page/PageGenerator';

const queryClient = new QueryClient();

const pageData = [
    {
      type: 'layoutSection',
      props: { backgroundColor: 'bg-gray-100' },
      components: [
        {
          type: 'componentHero',
          props: { title: 'Welcome to Our Page', subtitle: 'Discover amazing things!' },
        },
      ],
    },
    {
      type: 'layoutSection',
      props: { backgroundColor: 'bg-white' },
      components: [
        {
          type: 'componentItemsShowcase',
          props: { items: [
            { title: 'Item 1', description: 'Description 1' },
            { title: 'Item 2', description: 'Description 2' },
            { title: 'Item 3', description: 'Description 3' },
          ] },
        },
        {
          type: 'componentTrustBar',
          props: { trustText: 'Trusted by millions' },
        },
      ],
    },
  ];

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Landing />
    <UserList />
    <PageGenerator data={pageData} />
  </QueryClientProvider>
);

export default App;