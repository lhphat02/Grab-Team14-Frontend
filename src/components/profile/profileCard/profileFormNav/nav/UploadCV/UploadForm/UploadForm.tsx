
import { useTranslation } from 'react-i18next';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';
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
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import axios from 'axios';
import { getSignUrl } from '@app/api/media';
import { RcFile } from 'antd/lib/upload';
import { Progress } from 'antd';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { updateCVAPI, updateUserAPI } from '@app/api/user.api';
import { setUser, updateUser } from '@app/store/slices/userSlice';
import { UserModel } from '@app/domain/UserModel';
import { readUser } from '@app/services/localStorage.service';
import { BaseCollapse } from '@app/components/common/BaseCollapse/BaseCollapse';
import { Divider, List, Typography } from 'antd';
import { setQuery } from '@app/store/slices/querySlice';
import { useNavigate } from 'react-router-dom';

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const normFile = (e = { fileList: [] }) => {
  if (Array.isArray(e)) {
    return e;
  }
  console.log(e.fileList)
  return e && e.fileList;
};

export const UploadForm: React.FC = () => {
  const [isFieldsChangedCover, setFieldsChangedCover] = useState(false);
  const [isFieldsChangedCV, setFieldsChangedCV] = useState(false);
  const [isLoadingCV, setLoadingCV] = useState(false);
  const [isLoadingCover, setLoadingCover] = useState(false);
  const [isLoadingProfile, setLoadingProfile] = useState(false);
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef<number>();
  const [keyCV, setKeyCV] = useState('');
  const [skills , setSkills] = useState([]);
  const [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [fullName, setFullName] = useState("");
  let [cvLoaded, setCvLoaded] = useState(false);

  let oldcoverLetter = readUser()?.coverLetter;
  let [coverLetter, setCoverLetter] = useState(oldcoverLetter);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    return () => {
      console.log("User effect")
      coverLetter = readUser()?.coverLetter;
      console.log(coverLetter)
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [coverLetter]);

  const onUploadCV = async (values: any) => {
    setLoadingCV(true);
    setCvLoaded(false);
    console.log("KeyCV", keyCV)
    notificationController.success({ message: 'Upload CV succesfully \n Please wait for a moment for the model to process your CV.'});
    await updateCVAPI("https://grabbootcamp.s3.ap-southeast-1.amazonaws.com/" + keyCV)
      .then((data : any) => {
          console.log(data) 
          setSkills(data?.skills);
          setPhone(data?.phone);
          setEmail(data?.email);
          setFullName(data?.fullName);
        }
      )
      .catch((error) => {
        notificationController.error({ message: t('common.error') }); 
      })
      .finally(() => setLoadingCV(false));
      setCvLoaded(true);
  }


  const onUploadCoverLetter = async () => {
    setLoadingCover(true);

    await updateUserAPI({
      coverLetter: coverLetter  
      })
        .then((data: any) => { console.log(data) ,  notificationController.success({ message: 'Update cover letter template succesfully' }) })
        .catch((error: Error) => { console.log(error); notificationController.error({ message: error.message })})
        .finally(() => setLoadingCover(false));
        setFieldsChangedCover(false);

    console.log("Cover letter", readUser())
    dispatch(setUser({...readUser()!, coverLetter: coverLetter}));
  }

  const onUpdateYourProfile = async () => {
    setLoadingProfile(true);
    await updateUserAPI({
      skills: skills,
      phone: phone,
      fullName: fullName
    })
      .then((data: any) => { console.log(data) ,  notificationController.success({ message: 'Update your profile succesfully' }) })
      .catch((error: Error) => { console.log(error); notificationController.error({ message: error.message })})
      .finally(() => setLoadingProfile(false));

    dispatch(setUser({...readUser()!, skills: skills, phone: phone, email: email, fullName: fullName}));
  }

  const findMatchingCV = async () => {
    setLoadingProfile(true);
    await updateUserAPI({
      skills: skills,
      phone: phone,
      fullName: fullName
    })
      .then((data: any) => { console.log(data) ,  notificationController.success({ message: 'Update your profile succesfully' }) })
      .catch((error: Error) => { console.log(error); notificationController.error({ message: error.message })})
      .finally(() => setLoadingProfile(false));

    dispatch(setUser({...readUser()!, skills: skills, phone: phone, email: email, fullName: fullName}));
    dispatch(setQuery({ limit: 10, page: 1, isMatchingCV: true }));
    navigate('/jobs');
  }

  const onUploadFile = ({ file }: { file: string | Blob | RcFile }) => {
    if (file instanceof File) {
      getSignUrl({ fileName: file.name, contentType: file.type, isPublic: true })
      .then( async data => {
        const urlObj = new URL(data.url);
        setKeyCV(data.key);
        const url = `${urlObj.origin}${urlObj.pathname}`;
        await axios.put(data.url, file, {
          headers: {
            'Content-Type': file.type,
          },
          onUploadProgress: (progressEvent) => {

            console.log(progressEvent.loaded, progressEvent.total)
            if (progressEvent.total) {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total,
              );
              setProgress(percentCompleted);
              if (percentCompleted === 100) {
                timeoutRef.current = window.setTimeout(() => setProgress(0), 1000);
              }
            }
          },
        }).then((data) => {
          notificationController.success({ message: t('common.success') });
        });
      })
    } 
  };

  return (
    <BaseForm>
    <BaseButtonsForm
      {...formItemLayout}
      isFieldsChanged={isFieldsChangedCV}
      onFieldsChange={() => setFieldsChangedCV(true)}
      name="validateForm"

      footer={
        <BaseButtonsForm.Item>
          <BaseButton type="primary" onClick={onUploadCV} loading={isLoadingCV}>
            {t('common.submit')}
          </BaseButton>
        </BaseButtonsForm.Item>
      }
    >

    <BaseButtonsForm.Item label={t('forms.uploadFormLabels.cv')}>
        <BaseButtonsForm.Item name="cv" valuePropName="fileList" getValueFromEvent={normFile} noStyle >
        <BaseUpload.Dragger name="files" customRequest={onUploadFile} multiple={false} maxCount={1} onChange={(file) =>   file.fileList.filter((x)=>x.status = "done")
}>
            <p>
              <InboxOutlined />
            </p>
            <p>{t('forms.uploadFormLabels.clickToDrag')}</p>
            <p>{t('forms.uploadFormLabels.supportSingle')}</p>

            {!!progress && <Progress percent={progress} />}

          </BaseUpload.Dragger>
        </BaseButtonsForm.Item>
      </BaseButtonsForm.Item> 
      </BaseButtonsForm>

      { cvLoaded && ( 
        <BaseCollapse>
          <BaseCollapse.Panel header="CV Information" key={1}>

          <BaseCol span={20}>
          <S.InputsWrapper>
            <BaseInput placeholder={t('inputs.basic')} value={fullName}/>
          </S.InputsWrapper>

          <S.InputsWrapper>
            <BaseInput placeholder={t('inputs.basic')} value={phone}/>
          </S.InputsWrapper>

          <S.InputsWrapper>
            <BaseInput placeholder={t('inputs.basic')} value={email}/>
          </S.InputsWrapper>

          <BaseCollapse  style={{'marginBottom' : 30 }}>
            <BaseCollapse.Panel header="Skills" key={2}>
              <List
                size="small"
                bordered
                dataSource={skills}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </BaseCollapse.Panel>
          </BaseCollapse>

          <BaseRow gutter={[12,112]}>
          <BaseButton type="primary" onClick= {onUpdateYourProfile} loading={isLoadingProfile}>
              Update your profile
            </BaseButton>

            <BaseButton type="primary" onClick= {findMatchingCV} loading={isLoadingProfile} style={{marginLeft:'20px'}}>
              Find Job Matching your CV
            </BaseButton>
          </BaseRow>
          
          </BaseCol>
          

          </BaseCollapse.Panel>
        </BaseCollapse>

      )}



      <BaseButtonsForm
      {...formItemLayout}
      isFieldsChanged={isFieldsChangedCover}
      onFieldsChange={() => setFieldsChangedCover(true)}
      name="validateFormCover"

      footer={
        <BaseButtonsForm.Item>
          <BaseButton type="primary" onClick={onUploadCoverLetter} loading={isLoadingCover}>
            {t('common.submit')}
          </BaseButton>
        </BaseButtonsForm.Item>
      }
      onFinish={onUploadCoverLetter}
    >
      <BaseButtonsForm.Item label={t('forms.uploadFormLabels.coverLetter')} name = "coverLetter">
          <S.InputsWrapper  >
            <BaseInput.TextArea rows={10} cols = {20} maxLength={24} onChange={ (e) => setCoverLetter(e.target.value)} defaultValue={coverLetter} />
          </S.InputsWrapper>
      </BaseButtonsForm.Item> 
    </BaseButtonsForm>
    </BaseForm>
  );
};
