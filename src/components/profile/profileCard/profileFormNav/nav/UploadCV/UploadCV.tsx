import React from 'react';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { UploadForm } from './UploadForm/UploadForm';

export const UploadCV: React.FC = () => (
  <BaseCard>
  <UploadForm/>
  </BaseCard>
);
