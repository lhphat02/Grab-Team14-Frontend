import { useState } from 'react';
import * as S from './HeroSlide.styles';
import { Select } from 'antd';
import { locationFilter } from '@app/constants/enums/filters';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { setQuery } from '@app/store/slices/querySlice';
import { QueryModel } from '@app/domain/QueryModel';
import { useNavigate } from 'react-router-dom';

interface HeroSlideProps {
  onSlideChange: () => void;
}

const HeroSlide: React.FC<HeroSlideProps> = ({ onSlideChange }) => {
  const [location, setLocation] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleOnSearch = () => {
    console.log('location', location)
    console.log('keyword', keyword)
    const initQuery: QueryModel = {
      page: 1,
      limit: 10,
      search: keyword,
      location: location.replaceAll('_', ' '),
      type: null,
      experience: null,
      time: null,
      workingMode: null,
      industry: null,
      isLoaded: false,
    }
    dispatch(setQuery(initQuery));
    navigate('/jobs');
  };

  return (
    <S.HeroSlideContainer>
      <S.HeroSlideContentWrapper>
        <S.HeroSlideContent>
          <S.HeroSlideImage
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="emploi-hero"
          />

          <S.ImageOverlay />

          <S.HeroSlideMainContent>
            <S.HeroSlideTitleWrapper>
              <S.HeroSlideTitle>emploi</S.HeroSlideTitle>
              <S.HeroSlideSubtitle>Simplicity for your career</S.HeroSlideSubtitle>
              <S.HeroSlideDescription>Stop Searching, Start Thriving. Find Your Ideal Job Here.</S.HeroSlideDescription>
            </S.HeroSlideTitleWrapper>
            <S.SearchForm>
              <S.HeroSlideSearchbarContent>
                <S.HeroSlideInput
                  value={keyword} 
                  onChange={ e => setKeyword(e.target.value)}
                  placeholder="Keywords"
                  className="keyword"
                />
                <Select
                  showSearch
                  style={{ width: 200 }}
                  onChange={ e => setLocation(e)}
                  className = "location"
                  placeholder="Location"
          optionFilterProp="children"
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={locationFilter.map((location, i) => ({ value: location, label: location.replaceAll('_', ' ') }))}
        />
                <S.HeroSlideButton type="primary" onClick={handleOnSearch}>
                  Search
                </S.HeroSlideButton>
              </S.HeroSlideSearchbarContent>
            </S.SearchForm>
          </S.HeroSlideMainContent>

          <S.ScrollDownContainer>
            <S.ScrollDownButtonWrapper>
              <S.ScrollDownButton onClick={onSlideChange}>
                <S.ScrollDownIcon />
              </S.ScrollDownButton>
            </S.ScrollDownButtonWrapper>
          </S.ScrollDownContainer>
        </S.HeroSlideContent>
      </S.HeroSlideContentWrapper>
    </S.HeroSlideContainer>
  );
};

export default HeroSlide;
