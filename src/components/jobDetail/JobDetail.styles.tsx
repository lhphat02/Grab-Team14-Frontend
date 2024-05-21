import styled from 'styled-components';
import { FONT_SIZE, media, FONT_FAMILY } from '@app/styles/themes/constants';
import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';

export const JobDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const JobDetailHeader = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const JobDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
