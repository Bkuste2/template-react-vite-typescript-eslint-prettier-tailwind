import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Index from '../pages/Index';
import ErrorPage from './error';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Index />} />
      <Route path='*' element={<ErrorPage />} />;
    </>,
  ),
);

export default Router;
