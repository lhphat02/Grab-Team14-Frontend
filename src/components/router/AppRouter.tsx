// @ts-nocheck
// @ts-ignore
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// no lazy loading for auth pages to avoid flickering
const AuthLayout = React.lazy(() => import('@app/components/layouts/AuthLayout/AuthLayout'));
import LoginPage from '@app/pages/LoginPage';
import SignUpPage from '@app/pages/SignUpPage';
import ForgotPasswordPage from '@app/pages/ForgotPasswordPage';
import SecurityCodePage from '@app/pages/SecurityCodePage';
import NewPasswordPage from '@app/pages/NewPasswordPage';
import LockPage from '@app/pages/LockPage';

import MainLayout from '@app/components/layouts/main/MainLayout/MainLayout';
import ProfileLayout from '@app/components/profile/ProfileLayout';
import RequireAuth from '@app/components/router/RequireAuth';
import { withLoading } from '@app/hocs/withLoading.hoc';
import NftDashboardPage from '@app/pages/DashboardPages/NftDashboardPage';
import MedicalDashboardPage from '@app/pages/DashboardPages/MedicalDashboardPage';
import { JobsFeed } from '../apps/jobsFeed/JobsFeed';
import { HistoryJobsFeed } from '../historyJobsFeed/HistoryJobsFeed';

const NewsFeedPage = React.lazy(() => import('@app/pages/NewsFeedPage'));
const ServerErrorPage = React.lazy(() => import('@app/pages/ServerErrorPage'));
const Error404Page = React.lazy(() => import('@app/pages/Error404Page'));
const PersonalInfoPage = React.lazy(() => import('@app/pages/PersonalInfoPage'));
const SecuritySettingsPage = React.lazy(() => import('@app/pages/SecuritySettingsPage'));
const UploadCVPage = React.lazy(() => import('@app/pages/UploadCVPage'));
const Logout = React.lazy(() => import('./Logout'));
const LandingPage = React.lazy(() => import('@app/components/landing/LandingMain/LandingMain'));

export const NFT_DASHBOARD_PATH = '/';
export const MEDICAL_DASHBOARD_PATH = '/medical-dashboard';

// const NewsFeed = withLoading(NewsFeedPage);
const JobsFeedPage = withLoading(JobsFeed);
const HistoryJobsFeedPage = withLoading(HistoryJobsFeed);
const Landing = withLoading(LandingPage);

const ServerError = withLoading(ServerErrorPage);
const Error404 = withLoading(Error404Page);

// Profile
const PersonalInfo = withLoading(PersonalInfoPage);
const SecuritySettings = withLoading(SecuritySettingsPage);
const UploadCV = withLoading(UploadCVPage);

const AuthLayoutFallback = withLoading(AuthLayout);
const LogoutFallback = withLoading(Logout);
export const HOME_PATH = '/';

export const AppRouter: React.FC = () => {
  const protectedLayout = (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  );

  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page Route */}
        <Route path={HOME_PATH} element={<Landing />} />

        <Route path={HOME_PATH} element={protectedLayout}>
          <Route path="jobs" index element={<JobsFeedPage />} />
          <Route path="history" element={<HistoryJobsFeedPage />} />
          {/* HomePage Router */}
          {/* <Route path="apps">
            <Route path="feed" element={<NewsFeed />} />
          </Route> */}
          {/* Products Router */}
          <Route path="server-error" element={<ServerError />} />
          <Route path="404" element={<Error404 />} />
          <Route path="profile" element={<ProfileLayout />}>
            <Route path="personal-info" element={<PersonalInfo />} />
            <Route path="security-settings" element={<SecuritySettings />} />
            <Route path="cv" element={<UploadCV />} />
          </Route>
        </Route>
        <Route path="/auth" element={<AuthLayoutFallback />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />

          <Route
            path="lock"
            element={
              <RequireAuth>
                <LockPage />
              </RequireAuth>
            }
          />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="security-code" element={<SecurityCodePage />} />
          <Route path="new-password" element={<NewPasswordPage />} />
        </Route>
        <Route path="/logout" element={<LogoutFallback />} />
      </Routes>
    </BrowserRouter>
  );
};
