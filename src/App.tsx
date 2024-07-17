import './styles.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Landing } from './components/landing/Landing';
import UserList from './components/users/UserList';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Landing />
    <UserList />
  </QueryClientProvider>
);

export default App;