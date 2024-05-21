// @ts-nocheck 
// @ts-ignore 
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

export const FullNameItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item name="fullName" label={t('common.fullName')}>
      <BaseInput />
    </BaseButtonsForm.Item>
  );
};
