import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseHashTag, IHashTag } from '@app/components/common/BaseHashTag/BaseHashTag';
import { useResponsive } from '@app/hooks/useResponsive';
import { BaseDropdown } from '@app/components/common/BaseDropdown/Dropdown';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { filter, workingModeFilter } from '@app/constants/enums/filters';
import { Select } from 'antd';
import { formatOptionString } from '@app/utils/utils';
import * as S from './Filter.styles';
import Cookies from 'js-cookie';

interface Filter {
  search: string;
  selectedIndustry: string;
  location: string;
  selectedExperience: string;
  selectedWorkingMode: string;
  selectedType: string;
  selectedTime: string;
  selectedMatchingCV: boolean;
  jobsTagData: IHashTag[];
  onClick: (key: string, value: string | [string] | boolean) => void;
  selectedTagsIds: Array<string>;
  selectedTags: IHashTag[];
  updateFilteredField: (field: string, value: [string] | string | boolean) => void;
  onApply: () => void;
  onReset: () => void;
}

interface FilterDropdownWithTagProps {
  items: Array<{ key: string; label: JSX.Element }> | undefined;
  selectedValue: string | boolean;
  onClick: (field: string, value: string | boolean) => void;
  titleKey: string;
  tagKey: string;
  bgColor?: string;
}

const FilterDropdownWithTag: React.FC<FilterDropdownWithTagProps> = ({
  items,
  selectedValue,
  onClick,
  titleKey,
  tagKey,
}) => (
  <>
    <BaseDropdown placement="bottom" trigger={['click']} menu={{ items }}>
      <S.AddTagWrapper>
        <S.PlusIcon />
        <S.AddTagText>{useTranslation().t(titleKey)}</S.AddTagText>
      </S.AddTagWrapper>
    </BaseDropdown>
    {selectedValue && ( // Simplified check for non-empty string
      <S.TagsWrapper>
        <BaseHashTag key={tagKey} title={selectedValue.toString()} bgColor={'primary'} removeTag={() => onClick(tagKey, '')} />
      </S.TagsWrapper>
    )}
  </>
);

const Filter: React.FC<Filter> = ({
  search,
  selectedIndustry,
  location,
  selectedExperience,
  selectedWorkingMode,
  selectedType,
  selectedTime,
  selectedMatchingCV,
  onClick,
  onApply,
  onReset,
  updateFilteredField,
}) => {
  const { t } = useTranslation();
  const { industriesFilter, typesFilter, experienceLevelsFilter, workingModesFilter, locationFilter, timeFilter } =
    filter;

  let query = useAppSelector((state) => state.query.query);
  let token = Cookies.get('access_token');

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
            <BaseHashTag title={formatOptionString(industry)} />
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
            <BaseHashTag title={formatOptionString(workingMode)} />
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
            <BaseHashTag title={formatOptionString(type)} />
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
            <BaseHashTag title={formatOptionString(experience)} />
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
            <BaseHashTag title={formatOptionString(time)} />
          </S.TagPopoverLine>
        ),
      })),
    [selectedTime, updateFilteredField, onclick],
  );

  const matchingCVItems = useMemo(
    () =>
      [true , false].map((isMatch, i) => ({
        key: `${i + 1}`,
        label: (
          <S.TagPopoverLine
            key={i}
            onClick={(e) => {
              onClick('selectedMatchingCV', isMatch);
              e.stopPropagation();
            }}
          >
            <S.PopoverCheckbox checked={selectedMatchingCV == isMatch} />
            <BaseHashTag title={isMatch ? "True" : "False"} />
          </S.TagPopoverLine>
        ),
      })),
    [selectedTime, updateFilteredField, onclick],
  );




  return (
    <S.FilterWrapper>
      <S.InputWrapper>
        <S.SearchIcon />
        <S.Input placeholder={t('jobsFeed.Search')} onChange={(event) => onClick('search', event.target.value)} />
      </S.InputWrapper>

      <S.AddTagWrapper>
        <Select
          showSearch
          style={{ width: 280 }}
          onSelect={(value) => {
            onClick('location', value.replaceAll('_', ' '));
          }}
          value={location}
          placeholder="Location"
          optionFilterProp="children"
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={locationFilter.map((location, i) => ({ value: location, label: location.replaceAll('_', ' ') }))}
        />
      </S.AddTagWrapper>

      <FilterDropdownWithTag
        items={timeItems}
        selectedValue={selectedTime}
        onClick={onClick}
        titleKey="jobsFeed.time"
        tagKey="selectedTime"
      />
      <FilterDropdownWithTag
        items={typeItems}
        selectedValue={selectedType}
        onClick={onClick}
        titleKey="jobsFeed.type"
        tagKey="selectedType"
      />
      <FilterDropdownWithTag
        items={workingModeItems}
        selectedValue={selectedWorkingMode}
        onClick={onClick}
        titleKey="jobsFeed.workingMode"
        tagKey="selectedWorkingMode"
      />
      <FilterDropdownWithTag
        items={experienceItems}
        selectedValue={selectedExperience}
        onClick={onClick}
        titleKey="jobsFeed.experienceLevel"
        tagKey="selectedExperience"
      />
      <FilterDropdownWithTag
        items={industryItems}
        selectedValue={selectedIndustry}
        onClick={onClick}
        titleKey="jobsFeed.industry"
        tagKey="selectedIndustry"
      />

      {(token != null && (
      <FilterDropdownWithTag
        items={matchingCVItems}
        selectedValue={selectedMatchingCV}
        onClick={onClick}
        titleKey="Matching CV"
        tagKey="selectedMatchingCV"
      />))}

      <S.BtnWrapper>
        <S.Btn onClick={() => resetFilter()}>{t('jobsFeed.reset')}</S.Btn>
        <S.Btn onClick={() => applyFilter()} type="primary">
          {t('jobsFeed.apply')}
        </S.Btn>
      </S.BtnWrapper>
    </S.FilterWrapper>
  );
};

export default Filter;
