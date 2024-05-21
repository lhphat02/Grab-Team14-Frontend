import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

export const usernameItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item name="username" label={t('profile.nav.personalInfo.username')}>
      <BaseInput />
    </BaseButtonsForm.Item>
  );
};
