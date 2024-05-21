import styled from 'styled-components';
import { FONT_SIZE, media, FONT_FAMILY } from '@app/styles/themes/constants';
import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { Tabs } from '../common/BaseTabs/BaseTabs.styles';
import {
  ClockCircleFilled,
  CompassFilled,
  CompassOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';

export const JobDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  gap: 1rem;
`;

export const JobTabs = styled(Tabs)`
  width: 100%;
  max-width: 100%;
`;

export const JobDetailHeader = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  flex-grow: 1;
  padding-left: 1rem;
  border-left: 1px solid var(--primary-color);
`;

export const JobTitle = styled(BaseTypography)`
  font-size: ${FONT_SIZE.lg};
  font-weight: 800;
  word-break: break-word;
`;

export const CompanyName = styled(BaseTypography)`
  font-size: ${FONT_SIZE.md};
  color: gray;

  :hover {
    color: var(--primary-color);
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const CompanyLogoWrapper = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;

    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  @media ${media.sm} {
    width: 5rem;
    height: 5rem;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SectionTitle = styled(BaseTypography)`
  font-size: ${FONT_SIZE.lg};
  font-weight: 700;
  
  &.ant-typography {
    color: var(--primary-color);
`;

export const JobDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const JobSantizedDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JobSantizedRequirements = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JobInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const JobInfoText = styled(BaseTypography)`
  font-size: ${FONT_SIZE.md};
`;

export const InfoLabel = styled(BaseTypography)`
  font-size: ${FONT_SIZE.xxs};
  font-weight: 500;
  color: var(--text-nft-light-color);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  color: white;
  background-color: var(--primary-color);
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const InfoIcon = styled(InfoCircleOutlined)`
  font-size: ${FONT_SIZE.lg};
  color: var(--primary-color);
`;

export const LocationIcon = styled(CompassOutlined)`
  font-size: ${FONT_SIZE.lg};
  color: var(--primary-color);
`;

export const TimeIcon = styled(ClockCircleFilled)`
  font-size: ${FONT_SIZE.lg};
  color: var(--primary-color);
`;

export const LinkIcon = styled(GlobalOutlined)`
  font-size: ${FONT_SIZE.lg};
  color: var(--primary-color);
`;
