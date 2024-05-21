// @ts-nocheck 
// @ts-ignore 
import React from 'react';
import { useTranslation } from 'react-i18next';
import { PersonalInfo } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/PersonalInfo';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { UploadCV } from '@app/components/profile/profileCard/profileFormNav/nav/UploadCV/UploadCV';

const PersonalInfoPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('profile.nav.personalInfo.title')}</PageTitle>
      <UploadCV />
    </>
  );
};

export default PersonalInfoPage;
