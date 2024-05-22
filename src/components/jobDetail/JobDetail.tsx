/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { JobDetailResponse } from '@app/api/jobs.api';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { getJobDetail } from '@app/store/slices/jobSlice';
import { useEffect, useState } from 'react';
import { BookOutlined, HeartFilled, LoadingOutlined } from '@ant-design/icons';
import * as S from './JobDetail.styles';
import { formatDate } from '../../utils/utils';
import DOMPurify from 'dompurify';
import logo from 'assets/logo_svg.svg';
import { BaseButton } from '../common/BaseButton/BaseButton';


export interface JobDetailProps {
  id: string;
}

export const JobDetail: React.FC<JobDetailProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const [job, setJob] = useState<JobDetailResponse | null>(null);

  useEffect(() => {
    dispatch(getJobDetail(id))
      .unwrap()
      .then((data) => {
        setJob(data!);
      });
  }, [dispatch, id]);

  if (!job) {
    return (
      <S.LoadingWrapper>
        <S.Loading />
      </S.LoadingWrapper>
    );
  }

  const handleOnCompanyClick = () => {
    if (job?.companyLink) {
      window.open(job.companyLink, '_blank');
    }
  };

  const santizedDescription = DOMPurify.sanitize(job.description);
  const sanitizedRequirements = job.requirements?.map((req: string | Node) => DOMPurify.sanitize(req)).join('') || '';

  return (
    <S.JobDetailContainer>
      <S.JobDetailHeader>
        <S.CompanyLogoWrapper onClick={handleOnCompanyClick}>
          <img
            src={job.companyImageUrl}
            alt={job.company}
            width={84}
            height={84}
            onError={(e) => (e.currentTarget.src = logo)}
          />
        </S.CompanyLogoWrapper>
        <S.TitleWrapper>
          <S.CompanyName onClick={handleOnCompanyClick}>{job.company}</S.CompanyName>
          <S.JobTitle>{job.title}</S.JobTitle>

          <S.ButtonGroupContainer>
            <S.ApplyButton onClick={() => window.open(job.companyLink, '_blank')}>Apply Now</S.ApplyButton>
            <S.SaveButton type="primary" icon={<HeartFilled />}>
              Save
            </S.SaveButton>
          </S.ButtonGroupContainer>
        </S.TitleWrapper>
      </S.JobDetailHeader>

      <S.JobTabs defaultActiveKey="1">
        <S.JobTabs.TabPane tab="Information" key="1">
          <S.JobDetailContent>
            <S.SectionWrapper>
              <S.JobInfoWrapper>
                <S.InfoIcon />
                <S.LabelWrapper>
                  {job.type && job.type !== 'ANY' ? <S.InfoLabel>{job.type}</S.InfoLabel> : null}
                  {job.workingMode && <S.InfoLabel>{job.workingMode} MODE</S.InfoLabel>}
                  {job.experience && <S.InfoLabel>{job.experience} LEVEL</S.InfoLabel>}
                </S.LabelWrapper>
              </S.JobInfoWrapper>

              <S.JobInfoWrapper>
                <S.LocationIcon />
                <S.JobInfoText>At {job.location}</S.JobInfoText>
              </S.JobInfoWrapper>

              <S.JobInfoWrapper>
                <S.TimeIcon />
                <S.JobInfoText>Posted in {formatDate(job.date)}</S.JobInfoText>
              </S.JobInfoWrapper>

              <S.JobInfoWrapper>
                <S.LinkIcon />
                <S.JobInfoText>{job.platform}</S.JobInfoText>
              </S.JobInfoWrapper>
            </S.SectionWrapper>

            <S.SectionWrapper>
              <S.SectionTitle>About the job: </S.SectionTitle>
              <S.JobSantizedDescription dangerouslySetInnerHTML={{ __html: santizedDescription }} />
            </S.SectionWrapper>
          </S.JobDetailContent>
        </S.JobTabs.TabPane>

        <S.JobTabs.TabPane tab="Requirements" key="2">
          <S.JobDetailContent>
            <S.JobSantizedDescription dangerouslySetInnerHTML={{ __html: sanitizedRequirements }} />
            <S.JobInfoText>Matching CV Score</S.JobInfoText>
          </S.JobDetailContent>
        </S.JobTabs.TabPane>
        <S.JobTabs.TabPane tab="Cover Letter" key="3">
          <S.JobDetailContent>
            <S.JobInfoText>Generate Cover Letter</S.JobInfoText>
          </S.JobDetailContent>
        </S.JobTabs.TabPane>
      </S.JobTabs>
    </S.JobDetailContainer>
  );
};
