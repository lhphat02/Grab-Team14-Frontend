/* eslint-disable react-refresh/only-export-components */
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Root from './routes/root.jsx';
import ErrorPage from './routes/error.jsx';
import CONSTANTS from './constants/constant.js';
import store from './redux/store.js';
import './index.css';
import Loading from './components/common/Loading.jsx';

const LandingPage = lazy(() => import('./routes/landing.jsx'));
const JobListPage = lazy(() => import('./routes/job-list.jsx'));
const FilterConfigurePage = lazy(() => import('./routes/filter-configure.jsx'));
const HistoryPage = lazy(() => import('./routes/history.jsx'));
const ProfilePage = lazy(() => import('./routes/profile.jsx'));
const SignInPage = lazy(() => import('./routes/sign-in.jsx'));
const SignUpPage = lazy(() => import('./routes/sign-up.jsx'));

const router = createBrowserRouter([
  {
    path: CONSTANTS.ROUTES.HOME,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: CONSTANTS.ROUTES.HOME,
        element: (
          <Suspense
            fallback={<Loading statusMessage="Loading" fullScreen={true} />}
          >
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: CONSTANTS.ROUTES.JOB_LIST,
        element: (
          <Suspense
            fallback={
              <Loading
                statusMessage="Loading Job List Page"
                fullScreen={true}
              />
            }
          >
            <JobListPage />
          </Suspense>
        ),
      },
      {
        path: CONSTANTS.ROUTES.FILTER_CONFIG,
        element: (
          <Suspense
            fallback={
              <Loading statusMessage="Loading Filter Page" fullScreen={true} />
            }
          >
            <FilterConfigurePage />
          </Suspense>
        ),
      },
      {
        path: CONSTANTS.ROUTES.HISTORY,
        element: (
          <Suspense
            fallback={
              <Loading statusMessage="Loading History Page" fullScreen={true} />
            }
          >
            <HistoryPage />
          </Suspense>
        ),
      },
      {
        path: CONSTANTS.ROUTES.PROFILE,
        element: (
          <Suspense
            fallback={
              <Loading statusMessage="Loading Profile Page" fullScreen={true} />
            }
          >
            <ProfilePage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: CONSTANTS.ROUTES.SIGN_IN,
    element: (
      <Suspense
        fallback={
          <Loading statusMessage="Loading Sign In Page" fullScreen={true} />
        }
      >
        <SignInPage />
      </Suspense>
    ),
  },
  {
    path: CONSTANTS.ROUTES.SIGN_UP,
    element: (
      <Suspense
        fallback={
          <Loading statusMessage="Loading Sign Up Page" fullScreen={true} />
        }
      >
        <SignUpPage />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
