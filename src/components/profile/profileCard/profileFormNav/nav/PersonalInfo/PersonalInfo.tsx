
import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { FullNameItem } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/FullNameItem/FullNameItem';
// import { LastNameItem } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/LastNameItem/LastNameItem';
import { UsernameItem } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/UsernameItem/UsernameItem';
import { SexItem } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/SexItem/SexItem';
import { BirthdayItem } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/BirthdayItem/BirthdayItem';
import { LanguageItem } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/LanguageItem/LanguageItem';
import { PhoneItem } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/PhoneItem/PhoneItem';
import { EmailItem } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/EmailItem/EmailItem';
import { CountriesItem } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/CountriesItem/CountriesItem';
import { CitiesItem } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/CitiesItem/CitiesItem';
import { ZipcodeItem } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/ZipcodeItem/ZipcodeItem';
import { AddressItem } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/AddressItem/AddressItem';
import { WebsiteItem } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/WebsiteItem/WebsiteItem';
import { SocialLinksItem } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/SocialLinksItem/SocialLinksItem';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { Dates } from '@app/constants/Dates';
import { notificationController } from '@app/controllers/notificationController';
import { PaymentCard } from '@app/interfaces/interfaces';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { readUser } from '@app/services/localStorage.service';
import { setUser, updateUser } from '@app/store/slices/userSlice';
import { updateUserAPI } from '@app/api/user.api';

interface PersonalInfoFormValues {
  birthday?: string;
  country?: string;
  city?: string;
  username: string;
  address: string;
  sex?: string;
  facebook: string;
  linkedin: string;
  fullName: string;
  github: string;
  phone: string;
  email: string;
  website: string;
}

const initialPersonalInfoValues: PersonalInfoFormValues = {
  fullName: '',
  username: '',
  sex: undefined,
  birthday: undefined,
  phone: '',
  email: '',
  country: undefined,
  city: undefined,
  address: '',
  github: '',
  linkedin: '',
  facebook: '',
  website: '',
};

export const PersonalInfo: React.FC = () => {
  let user = readUser();

  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const userFormValues = useMemo(
    () =>
      user
        ? {
            fullName: user.fullName,
            email: user.email,
            phone: user.phone,
            username: user.username,
            sex: user.sex,
            birthday: user.birthday,
            country: user.country,
            city: user.city,
            address: user.address,
            github: user.github,
            linkedin: user.linkedin,
            facebook: user.facebook,
            website: user.website,
          }
        : initialPersonalInfoValues,
    [user],
  );

  const [form] = BaseButtonsForm.useForm();

  const { t } = useTranslation();

  const onFinish = 
    async (values: PersonalInfoFormValues) => {
      setLoading(true);

      setFieldsChanged(false);

      await updateUserAPI(values)
        .then((data) => { console.log(data); notificationController.success({ message: t('common.success') }) })
        .catch((error) => { console.log(error); notificationController.error({ message: error.message })})
        .finally(() => setLoading(false));

      setUser(values);
    };

  return (
    <BaseCard>
      <BaseButtonsForm
        form={form}
        name="info"
        loading={isLoading}
        initialValues={userFormValues}
        isFieldsChanged={isFieldsChanged}
        setFieldsChanged={setFieldsChanged}
        onFieldsChange={() => setFieldsChanged(true)}
        onFinish={onFinish}
      >
        <BaseRow gutter={{ xs: 10, md: 15, xl: 30 }}>
          <BaseCol span={24}>
            <BaseButtonsForm.Item>
              <BaseButtonsForm.Title>{t('profile.nav.personalInfo.title')}</BaseButtonsForm.Title>
            </BaseButtonsForm.Item>
          </BaseCol>

          <BaseCol xs={24} md={12}>
            <FullNameItem />
          </BaseCol>

          <BaseCol xs={24} md={12}>
            <UsernameItem />
          </BaseCol>

          <BaseCol xs={24} md={12}>
            <SexItem />
          </BaseCol>

          {/* <BaseCol xs={24} md={12}>
            <BirthdayItem />
          </BaseCol> */}

          <BaseCol span={24}>
            <BaseButtonsForm.Item>
              <BaseButtonsForm.Title>{t('profile.nav.personalInfo.contactInfo')}</BaseButtonsForm.Title>
            </BaseButtonsForm.Item>
          </BaseCol>

          <BaseCol xs={24} md={12}>
            <PhoneItem verified={false} />
          </BaseCol>

          <BaseCol xs={24} md={12}>
            <EmailItem verified={false} />
          </BaseCol>

          <BaseCol span={24}>
            <BaseButtonsForm.Item>
              <BaseButtonsForm.Title>{t('common.address')}</BaseButtonsForm.Title>
            </BaseButtonsForm.Item>
          </BaseCol>

          <BaseCol xs={24} md={12}>
            <CountriesItem />
          </BaseCol>

          <BaseCol xs={24} md={12}>
            <CitiesItem />
          </BaseCol>

          <BaseCol xs={24} md={12}>
            <AddressItem number={1} />
          </BaseCol>

          <BaseCol span={24}>
            <BaseButtonsForm.Item>
              <BaseButtonsForm.Title>{t('profile.nav.personalInfo.otherInfo')}</BaseButtonsForm.Title>
            </BaseButtonsForm.Item>
          </BaseCol>

          <BaseCol xs={24} md={12}>
            <WebsiteItem />
          </BaseCol>

          <BaseCol span={24}>
            <SocialLinksItem />
          </BaseCol>
        </BaseRow>
      </BaseButtonsForm>
    </BaseCard>
  );
};
