import styled from 'styled-components';
import { BaseCard as CommonCard } from '@app/components/common/BaseCard/BaseCard';
import { BaseCollapse } from '@app/components/common/BaseCollapse/BaseCollapse';

export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const CollapseWrapper = styled(BaseCollapse)`
  width: 40rem;
`;
