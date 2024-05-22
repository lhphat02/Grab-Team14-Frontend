// @ts-nocheck
// @ts-ignore
import styled from 'styled-components';
import { BaseCard as CommonCard } from '@app/components/common/BaseCard/BaseCard';
import { BaseCollapse } from '@app/components/common/BaseCollapse/BaseCollapse';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { FONT_SIZE, FONT_WEIGHT } from '@app/styles/themes/constants';

export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
`;

export const CollapseWrapper = styled(BaseCollapse)`
  width: 40rem;
`;

export const Input = styled(BaseInput)`
  height: 3.125rem;
  border: none;
  background: var(--secondary-background-color);
  padding-left: 3rem;
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.regular};
  line-height: 1.375rem;
`;
