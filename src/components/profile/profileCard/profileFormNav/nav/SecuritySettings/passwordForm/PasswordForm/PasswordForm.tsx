import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { ConfirmItemPassword } from '@app/components/profile/profileCard/profileFormNav/nav/SecuritySettings/passwordForm/ConfirmPasswordItem/ConfirmPasswordItem';
import { CurrentPasswordItem } from '@app/components/profile/profileCard/profileFormNav/nav/SecuritySettings/passwordForm/CurrentPasswordItem/CurrentPasswordItem';
import { NewPasswordItem } from '@app/components/profile/profileCard/profileFormNav/nav/SecuritySettings/passwordForm/NewPasswordItem/NewPasswordItem';
import { notificationController } from '@app/controllers/notificationController';
import * as S from './PasswordForm.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doSetNewPassword } from '@app/store/slices/authSlice';

export interface ChangePasswordMessage {
  message: string;

}
export const PasswordForm: React.FC = () => {
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onFinish = (values:any) => {
    dispatch(doSetNewPassword(values))
    .unwrap()
    .then((data: ChangePasswordMessage) => {
      console.log(data);
      if(data.message == 'Password changed')
      notificationController.success({
        message: 'Password changed',
        description: 'Change password successfully',
      });
    }
    )
    .catch((err) => {
      notificationController.error(err.message);
    })
    
    
  };

  return (
    <BaseButtonsForm
      name="newPassword"
      requiredMark="optional"
      isFieldsChanged={isFieldsChanged}
      onFieldsChange={() => setFieldsChanged(true)}
      footer={
        <S.Btn loading={isLoading} type="primary" htmlType="submit">
          {t('common.confirm')}
        </S.Btn>
      }
      onFinish={onFinish}
    >
      <BaseRow gutter={{ md: 15, xl: 30 }}>
        <BaseCol span={24}>
          <BaseButtonsForm.Item>
            <BaseButtonsForm.Title>{t('profile.nav.securitySettings.changePassword')}</BaseButtonsForm.Title>
          </BaseButtonsForm.Item>
        </BaseCol>

        <BaseCol xs={24} md={12} xl={24}>
          <CurrentPasswordItem />
        </BaseCol>

        <BaseCol xs={24} md={12} xl={24}>
          <NewPasswordItem />
        </BaseCol>

        <BaseCol xs={24} md={12} xl={24}>
          <ConfirmItemPassword />
        </BaseCol>
      </BaseRow>
    </BaseButtonsForm>
  );
};
