// @ts-nocheck 
// @ts-ignore 
import React, { ReactNode, useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseHashTag, IHashTag } from '@app/components/common/BaseHashTag/BaseHashTag';
import { AuthorValidator, TitleValidator, DatesValidator, TagsValidator } from '../Validator';
import { useResponsive } from '@app/hooks/useResponsive';
import { newsTags as defaultTags } from '@app/constants/newsTags';
import { AppDate, Dates } from '@app/constants/Dates';
import { HistoryJobListResponse, JobListResponse,} from '@app/api/jobs.api';
import * as S from './HistoryJobsFilter.styles';
import { BaseDropdown } from '@app/components/common/BaseDropdown/Dropdown';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { getIndustryFilterAPI } from '@app/api/filter.api';
import {  filter, workingModeFilter } from '@app/constants/enums/filters';
import { BaseRadio } from '@app/components/common/BaseRadio/BaseRadio';
import { setQuery } from '@app/store/slices/querySlice';
import { QueryModel } from '@app/domain/QueryModel';
import { Select, Space} from 'antd';
import { BaseCollapse } from '@app/components/common/BaseCollapse/BaseCollapse';

interface HistoryFilterProps {
  status: string ;
  filterJobs: (status: string) => void;
  updateFilteredField: (field: string, value: [string] | string) => void;
}

const HistoryFilter: React.FC<HistoryFilterProps> = ({
  status,
  updateFilteredField,
  filterJobs,
}) => {
  const { t } = useTranslation();
  const { mobileOnly } = useResponsive();


  return (
    <S.FilterWrapper>
      {!mobileOnly && <S.FilterTitle>{t('historyJobsFeed.filter')}</S.FilterTitle>}
 
      <BaseRadio.Group defaultValue={status} buttonStyle="solid" onChange={(e) => {
        filterJobs(e.target.value);}
        
        } >
        <BaseRadio.Button value="">{t('historyJobsFeed.all')}</BaseRadio.Button>
        <BaseRadio.Button value="INTERVIEWED">{t('historyJobsFeed.interviewed')}</BaseRadio.Button>
        <BaseRadio.Button value="APPROVED">{t('historyJobsFeed.approved')}</BaseRadio.Button>
        <BaseRadio.Button value="REJECTED">{t('historyJobsFeed.rejected')}</BaseRadio.Button>
      </BaseRadio.Group>
      
    </S.FilterWrapper>
  );
};

export const HistoryJobsFilter: React.FC<JobsFilterProps> = ({ jobs, children }) => {
  const [filterFields, setFilterFields] = useState<{
    status: string;
  }>({
    status: ''
  });

  const { status } = filterFields;

  const [filteredJobs, setFilteredJobs] = useState<HistoryJobListResponse[]>(jobs);
  const [overlayOpen, setOverlayOpen] = useState<boolean>(false);
  const { mobileOnly } = useResponsive();
  const { t } = useTranslation();

  const filterJobs = useCallback((value) => {
    if (value === '') {
      console.log(jobs)
      setFilteredJobs(jobs);
      return;
    }
    console.log(value)
    console.log(jobs)
    const filtered = jobs.filter((job) => job.status === value);
    console.log(filtered)
    setFilteredJobs(filtered);
  }
  , [status, jobs]);

  const handleClickApply = useCallback((status: string) => {
    updateFilteredField('status', status);

    if (mobileOnly) {
      setOverlayOpen(false);
    }
  }, [mobileOnly, filterJobs]);

  const updateFilteredField = (field: string, value: string | [string]) => {
    setFilterFields({ ...filterFields, [field]: value });
    filterJobs(value)
  };

  useEffect(() => {
    filterJobs();
  }, [jobs]);



  return (
    <>
      <S.TitleWrapper>
        {mobileOnly && (
          <S.FilterPopover
            trigger="click"
            open={overlayOpen}
            onOpenChange={(open) => setOverlayOpen(open)}
            content={
              <HistoryFilter
              status = {status}
              filterJobs={handleClickApply}
              updateFilteredField={updateFilteredField}
              />
            }
          >
            <S.FilterButton>{t('jobsFeed.filter')}</S.FilterButton>
          </S.FilterPopover>
        )}
      </S.TitleWrapper>

      <S.ContentWrapper>
        <S.JobsWrapper>{children({ filteredJobs: filteredJobs || jobs })}</S.JobsWrapper>

        {!mobileOnly && (
          <HistoryFilter
            status = {status}
            updateFilteredField={updateFilteredField}
            filterJobs={handleClickApply}
          />
        )}
      </S.ContentWrapper>
    </>
  );
};
