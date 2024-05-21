import { useTranslation } from 'react-i18next';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { InputNumber } from '@app/components/common/inputs/InputNumber/InputNumber';
import { BaseSelect, Option } from '@app/components/common/selects/BaseSelect/BaseSelect';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BaseSwitch } from '@app/components/common/BaseSwitch/BaseSwitch';
import { BaseRadio } from '@app/components/common/BaseRadio/BaseRadio';
import { BaseSlider } from '@app/components/common/BaseSlider/BaseSlider';
import { BaseUpload } from '@app/components/common/BaseUpload/BaseUpload';
import { BaseRate } from '@app/components/common/BaseRate/BaseRate';
import { notificationController } from '@app/controllers/notificationController';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseCheckbox } from '@app/components/common/BaseCheckbox/BaseCheckbox';
import * as S from './UploadForm.style';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const normFile = (e = { fileList: [] }) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export const UploadForm: React.FC = () => {
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();

  const onFinish = async (values = {}) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFieldsChanged(false);
      notificationController.success({ message: t('common.success') });
      console.log(values);
    }, 1000);
  };

  return (
    <BaseButtonsForm
      {...formItemLayout}
      isFieldsChanged={isFieldsChanged}
      onFieldsChange={() => setFieldsChanged(true)}
      name="validateForm"
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
      footer={
        <BaseButtonsForm.Item>
          <BaseButton type="primary" htmlType="submit" loading={isLoading}>
            {t('common.submit')}
          </BaseButton>
        </BaseButtonsForm.Item>
      }
      onFinish={onFinish}
    >

    <BaseButtonsForm.Item label={t('forms.uploadFormLabels.cv')}>
        <BaseButtonsForm.Item name="cv" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <BaseUpload.Dragger name="files" action="/upload.do">
            <p>
              <InboxOutlined />
            </p>
            <p>{t('forms.uploadFormLabels.clickToDrag')}</p>
            <p>{t('forms.uploadFormLabels.supportSingle')}</p>
          </BaseUpload.Dragger>
        </BaseButtonsForm.Item>
      </BaseButtonsForm.Item> 

      <BaseButtonsForm.Item label={t('forms.uploadFormLabels.coverLetter')} name = "coverLetter````````````````````````````````````````````````````````````````````````````````````````````````">
          <S.InputsWrapper>
            <BaseInput.TextArea rows={10} cols = {20} maxLength={24} />
          </S.InputsWrapper>
      </BaseButtonsForm.Item> 
     

    
    </BaseButtonsForm>
  );
};
