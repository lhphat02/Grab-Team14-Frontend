import { useState } from 'react';
import BaseButton from '../components/common/BaseButton';
import Divider from '../components/common/Divider';
import ChangePasswordForm from '../components/features/auth/ChangePasswordForm';
import CoverLetterImport from '../components/features/profile/CoverLetterImport';
import CVImport from '../components/features/profile/CVImport';
import ProfilePageLayout from '../components/layouts/ProfilePageLayout';
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/solid';

const ProfilePage = () => {
  const [changePasswordSectionOpen, setChangePasswordSectionOpen] =
    useState(false);

  const handleLogout = () => {
    // Future: Implement logout functionality
    console.log('Logout');
  };

  const handleOpenChangePassword = () => {
    setChangePasswordSectionOpen(true);
  };

  return (
    <ProfilePageLayout>
      <div className="flex w-full h-full gap-12">
        <secion className="flex flex-col w-1/2 h-full gap-8 items-between">
          <div className="flex items-end justify-center w-full gap-2 p-4 bg-white rounded-lg shadow-md">
            <p className="text-lg font-semibold">Hello,</p>
            <p className="text-lg font-semibold text-prim-1">
              lhphat.dev@gmail.com
            </p>
          </div>

          {changePasswordSectionOpen ? (
            <ChangePasswordForm
              onClose={() => setChangePasswordSectionOpen(false)}
            />
          ) : (
            <BaseButton onClick={handleOpenChangePassword}>
              Change Password
            </BaseButton>
          )}
          <BaseButton
            onClick={handleLogout}
            className={'bg-red-500 border-white hover:bg-red-700'}
          >
            <ArrowLeftStartOnRectangleIcon className="w-6 h-6" />

            <p>Logout</p>
          </BaseButton>
        </secion>

        <section className="flex flex-col w-full h-full gap-12 p-8 bg-white rounded-lg shadow-md">
          <CVImport />
          <Divider />
          <CoverLetterImport />
        </section>
      </div>
    </ProfilePageLayout>
  );
};

export default ProfilePage;
