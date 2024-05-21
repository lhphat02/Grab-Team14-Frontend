
import React, { useState } from 'react';
import { Dates } from '@app/constants/Dates';
import { BaseHashTag, IHashTag } from '../BaseHashTag/BaseHashTag';
import { BaseImage } from '../BaseImage/BaseImage';
import { BaseAvatar } from '../BaseAvatar/BaseAvatar';
import * as S from './BaseHistoryJob.styles';
import { useTranslation } from 'react-i18next';
import { BaseButton } from '../BaseButton/BaseButton';
import { HistoryJobListResponse } from '@app/api/jobs.api';

export interface BaseHistoryJobProps {
  job: HistoryJobListResponse;
}

export const BaseHistoryJob: React.FC<BaseHistoryJobProps> = ({
  job
}) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const {t} = useTranslation();
  return (
      <S.HistoryJobCard onClick={() => setModalOpen(true)}>
      <S.Wrapper>
        <S.ImgWrapper>
          <img src={job.companyImageUrl} alt={job.title} width={84} height={84} />
        </S.ImgWrapper>

        <S.InfoWrapper>
          <S.InfoHeaderWrapper>
            <S.TitleWrapper>
              <S.Title level={5}>{job.title}</S.Title>
            </S.TitleWrapper>

            <S.Text>
              {job.companyName} - {job.companyLocation}
            </S.Text>
          </S.InfoHeaderWrapper>

          <S.InfoBottomWrapper>
            <S.DateText>{job.date.toLocaleString()}</S.DateText>
          </S.InfoBottomWrapper>
        </S.InfoWrapper>
        {/* <BaseModal
            centered
            open={isModalOpen}
            onOk={ e => {e.stopPropagation(); setModalOpen(false)}}
            onCancel={e => {e.stopPropagation(); setModalOpen(false)}}
            okButtonProps={{ hidden: true }}
            cancelButtonProps={{ hidden: true }}
            width={'100%'}
          >
            <HistoryJobDetail id={id} />
          </BaseModal> */}
      </S.Wrapper>
    </S.HistoryJobCard>
  );
};
