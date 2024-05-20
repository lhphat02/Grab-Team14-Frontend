/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode, useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { RangeValue } from 'rc-picker/lib/interface.d';
import { BaseHashTag, IHashTag } from '@app/components/common/BaseHashTag/BaseHashTag';
import { AuthorValidator, TitleValidator, DatesValidator, TagsValidator } from '../Validator';
import { useResponsive } from '@app/hooks/useResponsive';
import { newsTags as defaultTags } from '@app/constants/newsTags';
import { AppDate, Dates } from '@app/constants/Dates';
import { Post } from '@app/api/jobs.api';
import * as S from './JobsFilter.styles';
import { BaseDropdown } from '@app/components/common/BaseDropdown/Dropdown';

interface JobsFilterProps {
  jobs: Post[];
  jobsTags?: IHashTag[];
  children: ({ filteredJobs }: { filteredJobs: Post[] }) => ReactNode;
}

interface Filter {
  author: string;
  title: string;
  jobsTagData: IHashTag[];
  onTagClick: (tag: IHashTag) => void;
  selectedTagsIds: Array<string>;
  selectedTags: IHashTag[];
  dates: [AppDate | null, AppDate | null];
  updateFilteredField: (field: string, value: [AppDate | null, AppDate | null] | string) => void;
  onApply: () => void;
  onReset: () => void;
}

const Filter: React.FC<Filter> = ({
  author,
  title,
  jobsTagData,
  onTagClick,
  selectedTagsIds,
  selectedTags,
  dates,
  onApply,
  onReset,
  updateFilteredField,
}) => {
  const { t } = useTranslation();
  const { mobileOnly } = useResponsive();

  const applyFilter = () => {
    onApply();
  };

  const resetFilter = () => {
    onReset();
  };

  const items = useMemo(
    () =>
      jobsTagData.map((tag, i) => ({
        key: `${i + 1}`,
        label: (
          <S.TagPopoverLine
            key={tag.id}
            onClick={(e) => {
              onTagClick(tag);
              e.stopPropagation();
            }}
          >
            <S.PopoverCheckbox checked={selectedTagsIds.includes(tag.id)} />
            <BaseHashTag title={tag.title} bgColor={tag.bgColor} />
          </S.TagPopoverLine>
        ),
      })),
    [jobsTagData, onTagClick, selectedTagsIds],
  );

  return (
    <S.FilterWrapper>
      {!mobileOnly && <S.FilterTitle>{t('jobsFeed.filter')}</S.FilterTitle>}

      <S.InputWrapper>
        <S.SearchIcon />
        <S.Input
          placeholder={t('jobsFeed.Search')}
          value={author}
          onChange={(event) => updateFilteredField('author', event.target.value)}
        />
      </S.InputWrapper>

      <BaseDropdown placement="bottom" trigger={['click']} menu={{ items }}>
        <S.AddTagWrapper>
          <S.PlusIcon />
          <S.AddTagText>{t('jobsFeed.tag')}</S.AddTagText>
        </S.AddTagWrapper>
      </BaseDropdown>

      {!!selectedTags.length && (
        <S.TagsWrapper>
          {selectedTags.map((tag) => (
            <BaseHashTag key={tag.id} title={tag.title} bgColor={tag.bgColor} removeTag={() => onTagClick(tag)} />
          ))}
        </S.TagsWrapper>
      )}

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
    author: string;
    title: string;
    selectedTags: IHashTag[];
    dates: [AppDate | null, AppDate | null];
  }>({
    author: '',
    title: '',
    selectedTags: [],
    dates: [null, null],
  });
  const { author, title, selectedTags, dates } = filterFields;
  const [filteredJobs, setFilteredJobs] = useState<Post[]>(jobs);
  const [overlayOpen, setOverlayOpen] = useState<boolean>(false);
  const { mobileOnly } = useResponsive();
  const { t } = useTranslation();

  const jobsTagData = Object.values(jobsTags || defaultTags);
  const selectedTagsIds = useMemo(() => selectedTags.map((item) => item.id), [selectedTags]);

  const onTagClick = useCallback(
    (tag: IHashTag) => {
      const isExist = selectedTagsIds.includes(tag.id);

      if (isExist) {
        setFilterFields({
          ...filterFields,
          selectedTags: selectedTags.filter((item) => item.id !== tag.id),
        });
      } else {
        setFilterFields({
          ...filterFields,
          selectedTags: [...selectedTags, tag],
        });
      }
    },
    [selectedTags, selectedTagsIds, filterFields],
  );

  const filterJobs = useCallback(
    (state: any) => {
      const filteredJobs = jobs;

      setFilteredJobs(filteredJobs);
    },
    [jobs],
  );

  useEffect(() => {
    setFilteredJobs(jobs);
    filterJobs(false);
    // TODO AT-183
    // eslint-disable-next-line
  }, [jobs]);

  const handleClickApply = useCallback(() => {
    filterJobs(false);

    if (mobileOnly) {
      setOverlayOpen(false);
    }
  }, [mobileOnly, filterJobs]);

  const handleClickReset = useCallback(() => {
    setFilterFields({ author: '', title: '', dates: [null, null], selectedTags: [] });
    filterJobs(true);

    if (mobileOnly) {
      setOverlayOpen(false);
    }
  }, [filterJobs, setFilterFields, mobileOnly]);

  const updateFilteredField = (field: string, value: string | [AppDate | null, AppDate | null]) => {
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
                author={author}
                title={title}
                jobsTagData={jobsTagData}
                onTagClick={onTagClick}
                selectedTagsIds={selectedTagsIds}
                selectedTags={selectedTags}
                dates={dates}
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
            author={author}
            title={title}
            jobsTagData={jobsTagData}
            onTagClick={onTagClick}
            selectedTagsIds={selectedTagsIds}
            selectedTags={selectedTags}
            dates={dates}
            onApply={handleClickApply}
            onReset={handleClickReset}
            updateFilteredField={updateFilteredField}
          />
        )}
      </S.ContentWrapper>
    </>
  );
};
