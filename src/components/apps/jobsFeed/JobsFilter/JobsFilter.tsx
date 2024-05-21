// @ts-nocheck 
// @ts-ignore 
import React, { ReactNode, useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseHashTag, IHashTag } from '@app/components/common/BaseHashTag/BaseHashTag';
import { AuthorValidator, TitleValidator, DatesValidator, TagsValidator } from '../Validator';
import { useResponsive } from '@app/hooks/useResponsive';
import { newsTags as defaultTags } from '@app/constants/newsTags';
import { AppDate, Dates } from '@app/constants/Dates';
import { JobListResponse,} from '@app/api/jobs.api';
import * as S from './JobsFilter.styles';
import { BaseDropdown } from '@app/components/common/BaseDropdown/Dropdown';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { getIndustryFilterAPI } from '@app/api/filter.api';
import {  filter, workingModeFilter } from '@app/constants/enums/filters';
import { BaseRadio } from '@app/components/common/BaseRadio/BaseRadio';
import { setQuery } from '@app/store/slices/querySlice';
import { QueryModel } from '@app/domain/QueryModel';
import { Select, Space} from 'antd';
import { BaseCollapse } from '@app/components/common/BaseCollapse/BaseCollapse';

interface JobsFilterProps {
  jobs: JobListResponse[];
  jobsTags?: IHashTag[];
  children: ({ filteredJobs }: { filteredJobs: JobListResponse[] }) => ReactNode;
}

interface Filter {
  search: string;
  selectedIndustry: string;
  selectedLocation: string;
  selectedExperience: string;
  selectedWorkingMode: string;
  selectedType: string;
  selectedTime: string;
  jobsTagData: IHashTag[];
  onClick: (key: string, value: string | [string]) => void;
  selectedTagsIds: Array<string>;
  selectedTags: IHashTag[];
  updateFilteredField: (field: string, value: [string] | string) => void;
  onApply: () => void;
  onReset: () => void;
}

const Filter: React.FC<Filter> = ({
  search,
  selectedIndustry,
  selectedLocation,
  selectedExperience,
  selectedWorkingMode,
  selectedType,
  selectedTime,
  onClick,
  onApply,
  onReset,
  updateFilteredField,
}) => {
  const { t } = useTranslation();
  const { mobileOnly } = useResponsive();
  const dispatch = useAppDispatch();

  const { industriesFilter , typesFilter, experienceLevelsFilter, workingModesFilter , locationFilter, timeFilter } = filter;

  const applyFilter = () => {
    onApply();
  };

  const resetFilter = () => {
    onReset();
  };


  const industryItems = useMemo(
    () =>
      industriesFilter.map((industry, i) => ({
        key: `${i + 1}`,
        label: (
          <S.TagPopoverLine
            key={i}
            onClick={(e) => {
              onClick('selectedIndustry', industry);
              e.stopPropagation();
            }}
          >
            <S.PopoverCheckbox checked={selectedIndustry == industry} />
            <BaseHashTag title={ industry.replace("_", " ")} />
          </S.TagPopoverLine>
        ),
      })),
    [selectedIndustry, updateFilteredField, onclick],
  );

  const workingModeItems = useMemo(
    () =>
    workingModeFilter.map((workingMode, i) => ({
        key: `${i + 1}`,
        label: (
          <S.TagPopoverLine
            key={i}
            onClick={(e) => {
              onClick('selectedWorkingMode', workingMode);
              e.stopPropagation();
            }}
          >
            <S.PopoverCheckbox checked={selectedWorkingMode == workingMode} />
            <BaseHashTag title={ workingMode.replace("_", " ")} />
          </S.TagPopoverLine>
        ),
      })),
    [selectedWorkingMode, updateFilteredField, onclick],
  );

  const typeItems = useMemo(
    () =>
    typesFilter.map((type, i) => ({
        key: `${i + 1}`,
        label: (
          <S.TagPopoverLine
            key={i}
            onClick={(e) => {
              onClick('selectedType', type);
              e.stopPropagation();
            }}
          >
            <S.PopoverCheckbox checked={selectedType == type} />
            <BaseHashTag title={ type.replace("_", " ")} />
          </S.TagPopoverLine>
        ),
      })),
    [selectedType, updateFilteredField, onclick],
  );

  const experienceItems = useMemo(
    () =>
    experienceLevelsFilter.map((experience, i) => ({
        key: `${i + 1}`,
        label: (
          <S.TagPopoverLine
            key={i}
            onClick={(e) => {
              onClick('selectedExperience', experience);
              e.stopPropagation();
            }}
          >
            <S.PopoverCheckbox checked={selectedExperience == experience} />
            <BaseHashTag title={ experience.replace("_", " ")} />
          </S.TagPopoverLine>
        ),
      })),
    [selectedExperience, updateFilteredField, onclick],
  );

  const timeItems = useMemo(
    () =>
    timeFilter.map((time, i) => ({
        key: `${i + 1}`,
        label: (
          <S.TagPopoverLine
            key={i}
            onClick={(e) => {
              onClick('selectedTime', time);
              e.stopPropagation();
            }}
          >
            <S.PopoverCheckbox checked={selectedTime == time} />
            <BaseHashTag title={ time.replace("_", " ")} />
          </S.TagPopoverLine>
        ),
      })),
    [selectedTime, updateFilteredField, onclick],
  );




  return (
    <S.FilterWrapper>
      {!mobileOnly && <S.FilterTitle>{t('jobsFeed.filter')}</S.FilterTitle>}

      <S.InputWrapper>
        <S.SearchIcon />
        <S.Input
          placeholder={t('jobsFeed.Search')}
          value={search}
          onChange={(event) => updateFilteredField('search', event.target.value)}
        />
      </S.InputWrapper>

      <BaseDropdown placement="bottom" trigger={['click']} menu={{ items: industryItems }}>
        <S.AddTagWrapper>
          <S.PlusIcon />
          <S.AddTagText>{t('jobsFeed.industry')}</S.AddTagText>
        </S.AddTagWrapper>
      </BaseDropdown>

        <S.AddTagWrapper>
          <S.PlusIcon />
          <Select
    showSearch
    style={{ width: 200 }}
    onChange={(value) => {
      onClick('selectedLocation', value.replaceAll("_", " "));
    }} 
    placeholder="Location"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={locationFilter.map((location, i) => ({value: location, label: location.replaceAll("_", " ")}))}
  />
        </S.AddTagWrapper>
      
        

      <BaseDropdown placement="bottom" trigger={['click']} menu={{ items: industryItems }}>
        <S.AddTagWrapper>
          <S.PlusIcon />
          <S.AddTagText>{t('jobsFeed.type')}</S.AddTagText>
        </S.AddTagWrapper>
      </BaseDropdown>
      <BaseDropdown placement="bottom" trigger={['click']} menu={{ items: workingModeItems }}>
        <S.AddTagWrapper>
          <S.PlusIcon />
          <S.AddTagText>{t('jobsFeed.workingMode')}</S.AddTagText>
        </S.AddTagWrapper>
      </BaseDropdown>

      <BaseDropdown placement="bottom" trigger={['click']} menu={{ items: typeItems }}>
        <S.AddTagWrapper>
          <S.PlusIcon />
          <S.AddTagText>{t('jobsFeed.type')}</S.AddTagText>
        </S.AddTagWrapper>

      </BaseDropdown>

      <BaseDropdown placement="bottom" trigger={['click']} menu={{ items: experienceItems }}>
        <S.AddTagWrapper>
          <S.PlusIcon />
          <S.AddTagText>{t('jobsFeed.experienceLevel')}</S.AddTagText>
        </S.AddTagWrapper>
      </BaseDropdown>

      <BaseDropdown placement="bottom" trigger={['click']} menu={{ items: timeItems }}>
        <S.AddTagWrapper>
          <S.PlusIcon />
          <S.AddTagText>{t('jobsFeed.time')}</S.AddTagText>
        </S.AddTagWrapper>
      </BaseDropdown>



      <S.BtnWrapper>
        <S.Btn onClick={() => resetFilter()}>{t('jobsFeed.reset')}</S.Btn>
        <S.Btn onClick={() => applyFilter()} type="primary">
          {t('jobsFeed.apply')}
        </S.Btn>
      </S.BtnWrapper>
    </S.FilterWrapper>
  );
};

export const JobsFilter: React.FC<JobsFilterProps> = ({ jobs, jobsTags, children }) => {
  const [filterFields, setFilterFields] = useState<{
    search: string;
    selectedIndustry: string;
    selectedLocation: string;
    selectedExperience: string;
    selectedWorkingMode: string;
    selectedType: string;
    selectedTime: string;
  }>({
    search: '',
    selectedIndustry: '',
    selectedLocation: '',
    selectedExperience: '',
    selectedWorkingMode: '',
    selectedType: '',
    selectedTime: '',
  });

  const { search, selectedIndustry, selectedLocation, selectedExperience, selectedWorkingMode, selectedType , selectedTime} = filterFields;

  const [filteredJobs, setFilteredJobs] = useState<JobListResponse[]>(jobs);
  const [overlayOpen, setOverlayOpen] = useState<boolean>(false);
  const { mobileOnly } = useResponsive();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  const onClick = useCallback((key: string, value: string | [string]) => {
    setFilterFields({ ...filterFields, [key]: value });

  }, [selectedExperience, selectedIndustry, selectedLocation, selectedType, selectedWorkingMode])


  const handleClickApply = useCallback(() => {
    console.log(selectedIndustry)
    const newQuery: QueryModel = {
      page: 1,
      limit: 10,
      isLoaded: false,
      search: search != '' ? search : null,
      industry: selectedIndustry != '' ? selectedIndustry : null,
      location: selectedLocation != '' ? selectedLocation : null,
      experience: selectedExperience != '' ? selectedExperience : null,
      workingMode: selectedWorkingMode != '' ? selectedWorkingMode : null,
      type: selectedType != '' ? selectedType : null,
      time: selectedTime != '' ? selectedTime : null,
    };
    dispatch(setQuery(newQuery));
  }, [mobileOnly, search,selectedExperience, selectedIndustry, selectedLocation, selectedType, selectedWorkingMode, selectedTime]);

  const handleClickReset = useCallback(() => {
    setFilterFields({ search: '', selectedIndustry: '', selectedLocation: '', selectedExperience: '', selectedWorkingMode: '', selectedType: '', selectedTime: '' });
    const newQuery: QueryModel = {
      page: 1,
      limit: 10,
      isLoaded: false,
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
              search={search}
              selectedIndustry={selectedIndustry}
              selectedLocation={selectedLocation}
              selectedExperience={selectedExperience}
              selectedWorkingMode={selectedWorkingMode}
              selectedType={selectedType}
              selectedTime= {selectedTime}
              onClick={onClick}
              onApply={handleClickApply}
              onReset={handleClickReset}
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
          <Filter
            search={search}
            selectedIndustry={selectedIndustry}
            selectedLocation={selectedLocation}
            selectedExperience={selectedExperience}
            selectedWorkingMode={selectedWorkingMode}
            selectedType={selectedType}
            selectedTime= {selectedTime}
            onClick={onClick}
            onApply={handleClickApply}
            onReset={handleClickReset}
            updateFilteredField={updateFilteredField}
          />
        )}
      </S.ContentWrapper>
    </>
  );
};
