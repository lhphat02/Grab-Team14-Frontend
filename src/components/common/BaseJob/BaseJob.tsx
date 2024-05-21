
import React, { useState } from 'react';
import { Dates } from '@app/constants/Dates';
import { BaseHashTag, IHashTag } from '../BaseHashTag/BaseHashTag';
import { BaseImage } from '../BaseImage/BaseImage';
import { BaseAvatar } from '../BaseAvatar/BaseAvatar';
import * as S from './BaseJob.styles';
import { BaseModal } from '../BaseModal/BaseModal';
import { useTranslation } from 'react-i18next';
import { BaseButton } from '../BaseButton/BaseButton';
import { JobDetail } from '@app/components/jobDetail/JobDetail';

export interface BaseJobProps {
  id: string;
  title: string;
  companyImageUrl: string;
  companyName: string;
  companyLocation: string;
  date: Date;
  type: string;
  industry?: string;
  experience?: string;
  className?: string;
  location?: string;
}

export const BaseJob: React.FC<BaseJobProps> = ({
  id,
  title,
  companyImageUrl,
  companyName,
  companyLocation,
  date,
  type,
  industry,
  experience,
  location,
  className,
}) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const {t} = useTranslation();
  return (
      <S.JobCard onClick={() => setModalOpen(true)}>
      <S.Wrapper>
        <S.ImgWrapper>
          <img src={companyImageUrl} alt={title} width={84} height={84} />
        </S.ImgWrapper>

        <S.InfoWrapper>
          <S.InfoHeaderWrapper>
            <S.TitleWrapper>
              <S.Title level={5}>{title}</S.Title>
            </S.TitleWrapper>

            <S.Text>
              {companyName} - {companyLocation}
            </S.Text>
          </S.InfoHeaderWrapper>

          <S.InfoBottomWrapper>
            <S.DateText>{date.toLocaleString()}</S.DateText>
          </S.InfoBottomWrapper>
        </S.InfoWrapper>
        <BaseModal
            centered
            open={isModalOpen}
            onOk={ e => {e.stopPropagation(); setModalOpen(false)}}
            onCancel={e => {e.stopPropagation(); setModalOpen(false)}}
            okButtonProps={{ hidden: true }}
            cancelButtonProps={{ hidden: true }}
            width={'100%'}
          >
            <JobDetail id={id} />
          </BaseModal>
      </S.Wrapper>
    </S.JobCard>
  );
};
