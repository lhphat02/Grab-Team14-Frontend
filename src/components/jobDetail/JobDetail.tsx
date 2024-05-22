/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { JobDetailResponse, generateCoverLetterAPI } from '@app/api/jobs.api';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { getJobDetail, getJobStatus } from '@app/store/slices/jobSlice';
import { useEffect, useState } from 'react';
import { BookOutlined, HeartFilled, LoadingOutlined, SwapOutlined } from '@ant-design/icons';
import * as S from './JobDetail.styles';
import { formatDate, formatOptionString } from '../../utils/utils';
import DOMPurify from 'dompurify';
import logo from 'assets/logo_svg.svg';
import { BaseButton } from '../common/BaseButton/BaseButton';
import { readToken } from '@app/services/localStorage.service';
import { notificationController } from '@app/controllers/notificationController';
import { useLocation } from 'react-router-dom';
import { updateJobStatus } from '@app/api/history.api';
import { Button, Dropdown, Space } from 'antd';
import { BaseMenuProps } from '../common/BaseMenu/BaseMenu';

export interface JobDetailProps {
  id: string;
}

export const JobDetail: React.FC<JobDetailProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);
  const [coverLetter, setCoverLetter] = useState<string>('');
  const [job, setJob] = useState<JobDetailResponse | null>(null);
  const token = readToken();

  let [status , setStatus] = useState(job?.status);
  let [isLoaded , setIsLoaded] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const isOnJobHistoryPage = path.includes('history');

  useEffect(() => {
    dispatch(getJobDetail(id))
      .unwrap()
      .then((data) => {
        setJob(data!);
      });

      if (token != null && !isLoaded) {
        setIsLoaded(true);
        console.log('Getting job status');
        dispatch(getJobStatus(id))
        .unwrap()
        .then((data : any) => {
          setStatus(data.status);
        });
      }
  }, [ id, status]);

  if (!job) {
    return (
      <S.LoadingWrapper>
        <S.Loading />
      </S.LoadingWrapper>
    );
  }

  const generateCoverLetter = async () => {
    setLoading(true);
    await generateCoverLetterAPI(job.id)
      .then((data) => {
        setCoverLetter(data);
        console.log('Cover letter generated', data);
        notificationController.success({
          message: 'Cover letter generated',
          description: 'Your cover letter has been generated successfully',
        });
      })
      .catch((error) => {
        notificationController.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  const handleOnCompanyClick = () => {
    if (job?.companyLink) {
      window.open(job.companyLink, '_blank');
    }
  };

  const handleOnApplyClick = () => {
    window.open(job.jobLink, '_blank');
  };

  const handleOnSaveClick = async (newStatus = 'SAVED') => {
    console.log('Changing job status to ' + newStatus, status);
    if ( status === newStatus ) {
      return;
    }
    if (!token) {
      notificationController.error({ message: 'Please login to save job' });
    }

    await updateJobStatus(job.id, { status: newStatus })
    .then(() => {
      setStatus(newStatus);
      notificationController.success({ message: 'Job changed status to ' + newStatus });
    }
    )
    .catch((error) => {
      notificationController.error({ message: error.message });
    });

  };

  const items: BaseMenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" onClick={() => handleOnSaveClick('APPLIED')}>
          APPLIED
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" onClick={ () => handleOnSaveClick('INTERVIEWED') }>
          INTERVIEWED
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" onClick={() => handleOnSaveClick('REJECTED')}>
          REJECTED
        </a>
      ),
    },
  ];

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
            <S.ApplyButton onClick={handleOnApplyClick}>Apply Now</S.ApplyButton>

            {isOnJobHistoryPage ? (
                <Dropdown menu={{items }} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
                <Button>
                  <SwapOutlined />
                  {status}

                </Button>
                 </Dropdown>
            ) : (
              <S.SaveButton type="primary" icon={ (status === 'SAVED' ?  <HeartFilled/> : null) } onClick={() => handleOnSaveClick('SAVED')} disabled = {status === 'SAVED'}>
                {status === 'SAVED' ? 'Saved' : 'Save'}
              </S.SaveButton>
            )}
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
                  {job.type && job.type !== 'ANY' ? <S.InfoLabel>{formatOptionString(job.type)}</S.InfoLabel> : null}
                  {job.workingMode && <S.InfoLabel>{formatOptionString(job.workingMode)} MODE</S.InfoLabel>}
                  {job.experience && <S.InfoLabel>{formatOptionString(job.experience)}</S.InfoLabel>}
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
            <S.JobSantizedDescription>
              {' '}
              {coverLetter == '' ? (
                <BaseButton type="primary" icon={<BookOutlined />} onClick={generateCoverLetter} loading={isLoading}>
                  Generate Cover Letter
                </BaseButton>
              ) : null}
              {<p>{coverLetter}</p>}
            </S.JobSantizedDescription>
          </S.JobDetailContent>
        </S.JobTabs.TabPane>
      </S.JobTabs>
    </S.JobDetailContainer>
  );
};
