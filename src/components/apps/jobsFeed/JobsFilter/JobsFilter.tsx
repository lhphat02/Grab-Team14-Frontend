/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode, useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useResponsive } from '@app/hooks/useResponsive';
import { JobListResponse } from '@app/api/jobs.api';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { setQuery } from '@app/store/slices/querySlice';
import { QueryModel } from '@app/domain/QueryModel';
import Filter from './Filter/Filter';
import * as S from './JobsFilter.styles';

interface JobsFilterProps {
  jobs: JobListResponse[];
  children: ({ jobs }: { jobs: JobListResponse[] }) => ReactNode;
}

const JobsFilter: React.FC<JobsFilterProps> = ({ jobs, children }) => {
  let query = useAppSelector((state) => state.query.query);

  let [filterFields, setFilterFields] = useState<{
    limit: number;
    page: number;
    search: string;
    selectedIndustry: string;
    selectedLocation: string;
    selectedExperience: string;
    selectedWorkingMode: string;
    selectedType: string;
    selectedTime: string;
  }>({
    limit: 10,
    page: 1,
    search: '',
    selectedIndustry: '',
    selectedLocation: '',
    selectedExperience: '',
    selectedWorkingMode: '',
    selectedType: '',
    selectedTime: '',
  });

  if (query) {
    console.log('query 2223 ', query);
    const { search, industry, location, experience, workingMode, type, time } = query;

    if (search != filterFields.search && search != null) setFilterFields({ ...filterFields, search });
    if (industry != filterFields.selectedIndustry && industry != null)
      setFilterFields({ ...filterFields, selectedIndustry: industry });
    if (location != filterFields.selectedLocation && location != null)
      setFilterFields({ ...filterFields, selectedLocation: location });
    if (experience != filterFields.selectedExperience && experience != null)
      setFilterFields({ ...filterFields, selectedExperience: experience });
    if (workingMode != filterFields.selectedWorkingMode && workingMode != null)
      setFilterFields({ ...filterFields, selectedWorkingMode: workingMode });
    if (type != filterFields.selectedType && type != null) setFilterFields({ ...filterFields, selectedType: type });
    if (time != filterFields.selectedTime && time != null) setFilterFields({ ...filterFields, selectedTime: time });
  }

  const [overlayOpen, setOverlayOpen] = useState<boolean>(false);
  const { mobileOnly } = useResponsive();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    updateFilteredField('search', query?.search ? query.search : '');
    updateFilteredField('selectedIndustry', query?.industry ? query.industry : '');
    updateFilteredField('selectedLocation', query?.location ? query.location : '');
    updateFilteredField('selectedExperience', query?.experience ? query.experience : '');
    updateFilteredField('selectedWorkingMode', query?.workingMode ? query.workingMode : '');
    updateFilteredField('selectedType', query?.type ? query.type : '');
    updateFilteredField('selectedTime', query?.time ? query.time : '');
  }, [query]);

  const onClick = (key: string, value: string | [string]) => {
    setFilterFields({ ...filterFields, [key]: value });
  };

  const handleClickApply = () => {
    const newQuery: unknown = {
      page: 1,
      limit: 10,
      location: filterFields.selectedLocation != '' ? filterFields.selectedLocation : null,
      industry: filterFields.selectedIndustry != '' ? filterFields.selectedIndustry : null,
      experience: filterFields.selectedExperience != '' ? filterFields.selectedExperience : null,
      workingMode: filterFields.selectedWorkingMode != '' ? filterFields.selectedWorkingMode : null,
      type: filterFields.selectedType != '' ? filterFields.selectedType : null,
      time: (filterFields.selectedTime != ''  && filterFields.selectedTime != 'ANY') ? filterFields.selectedTime : null,
      search: filterFields.search != '' ? filterFields.search : null,
    };
    dispatch(setQuery(newQuery));
  };

  const handleClickReset = useCallback(() => {
    setFilterFields({
      search: '',
      selectedIndustry: '',
      selectedLocation: '',
      selectedExperience: '',
      selectedWorkingMode: '',
      selectedType: '',
      selectedTime: '',
      page: 1,
      limit: 10,
    });
    const newQuery: QueryModel = {
      page: 1,
      limit: 10,
      search: null,
      industry: null,
      location: null,
      experience: null,
      workingMode: null,
      type: null,
      time: null,
    };
    dispatch(setQuery(newQuery));
    if (mobileOnly) {
      setOverlayOpen(false);
    }
  }, [setFilterFields, mobileOnly]);

  const updateFilteredField = (field: string, value: string | [string]) => {
    setFilterFields({ ...filterFields, [field]: value });
  };

  return (
    <>
      <S.TitleWrapper>
        {mobileOnly && (
          <S.FilterPopover
            trigger="click"
            open={overlayOpen}
            onOpenChange={(open) => setOverlayOpen(open)}
            content={
              <Filter
                search={filterFields.search}
                selectedIndustry={filterFields.selectedIndustry}
                selectedLocation={filterFields.selectedLocation}
                selectedExperience={filterFields.selectedExperience}
                selectedWorkingMode={filterFields.selectedWorkingMode}
                selectedType={filterFields.selectedType}
                selectedTime={filterFields.selectedTime}
                onClick={onClick}
                onApply={handleClickApply}
                onReset={handleClickReset}
                updateFilteredField={updateFilteredField}
                jobsTagData={[]}
                selectedTagsIds={[]}
                selectedTags={[]}
              />
            }
          >
            <S.FilterButton>{t('jobsFeed.filter')}</S.FilterButton>
          </S.FilterPopover>
        )}
      </S.TitleWrapper>

      <S.ContentWrapper>
        <S.JobsWrapper>{children({ jobs })}</S.JobsWrapper>

        {!mobileOnly && (
          <Filter
            search={filterFields.search}
            selectedIndustry={filterFields.selectedIndustry}
            selectedLocation={filterFields.selectedLocation}
            selectedExperience={filterFields.selectedExperience}
            selectedWorkingMode={filterFields.selectedWorkingMode}
            selectedType={filterFields.selectedType}
            selectedTime={filterFields.selectedTime}
            onClick={onClick}
            onApply={handleClickApply}
            onReset={handleClickReset}
            updateFilteredField={updateFilteredField}
            jobsTagData={[]}
            selectedTagsIds={[]}
            selectedTags={[]}
          />
        )}
      </S.ContentWrapper>
    </>
  );
};

export default JobsFilter;
