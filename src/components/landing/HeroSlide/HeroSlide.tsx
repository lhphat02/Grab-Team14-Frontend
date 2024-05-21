import { useState } from 'react';
import * as S from './HeroSlide.styles';

interface HeroSlideProps {
  onSlideChange: () => void;
}

const HeroSlide: React.FC<HeroSlideProps> = ({ onSlideChange }) => {
  const [query, setQuery] = useState({
    keyword: '',
    location: '',
  });

  const handleSearchbarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const handleOnSearch = () => {
    const searchParams = new URLSearchParams({
      keyword: query.keyword,
      location: query.location,
    }).toString();
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
                  value={query.keyword}
                  onChange={handleSearchbarChange}
                  placeholder="Keywords"
                  name="keyword"
                />
                <S.HeroSlideInput
                  value={query.location}
                  onChange={handleSearchbarChange}
                  placeholder="Location"
                  name="location"
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
