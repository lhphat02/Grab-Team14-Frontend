import React, { useEffect, useRef } from 'react';
import { UpOutlined } from '@ant-design/icons';
import * as S from './LandingMain.styles';
import HeroSlide from '../HeroSlide/HeroSlide';
import CategorySlide from '../CategorySlide/CategorySlide';
import SignupPromptSlide from '../SignupPromptSlide/SignupPromptSlide';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const LandingMain: React.FC = (): React.ReactElement => {
  const slideTwo = useRef<HTMLDivElement | null>(null);
  const slideThree = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('access_token');
    if (token != null) {
      navigate('/jobs');
    }
  }, [navigate]);

  const scrollToSlide = (slide: React.RefObject<HTMLDivElement>) => {
    slide.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <S.Container>
      <S.ScrollButton onClick={scrollToTop}>
        <UpOutlined className="icon" />
      </S.ScrollButton>

      <S.SlideContainer>
        <HeroSlide onSlideChange={() => scrollToSlide(slideTwo)} />
      </S.SlideContainer>

      <S.SlideContainer ref={slideTwo}>
        <CategorySlide onSlideChange={() => scrollToSlide(slideThree)} />
      </S.SlideContainer>

      <S.SlideContainer ref={slideThree}>
        <SignupPromptSlide />
      </S.SlideContainer>
    </S.Container>
  );
};

export default LandingMain;
