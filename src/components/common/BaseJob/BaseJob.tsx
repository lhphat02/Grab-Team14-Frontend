import React from 'react';
import { Dates } from '@app/constants/Dates';
import { BaseHashTag, IHashTag } from '../BaseHashTag/BaseHashTag';
import { BaseImage } from '../BaseImage/BaseImage';
import { BaseAvatar } from '../BaseAvatar/BaseAvatar';
import * as S from './BaseJob.styles';

export interface BaseJobProps {
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
  return (
    <S.JobCard>
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
            <S.DateText>date</S.DateText>
          </S.InfoBottomWrapper>
        </S.InfoWrapper>
      </S.Wrapper>
    </S.JobCard>
  );
};
