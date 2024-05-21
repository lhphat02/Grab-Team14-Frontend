import styled from 'styled-components';
import { ArrowDownOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';

export const HeroSlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const HeroSlideContentWrapper = styled.div`
  position: relative;
  height: 100vh;
`;

export const HeroSlideContent = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
`;

export const HeroSlideImage = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.7;
  background-color: #00607a;
`;

export const HeroSlideMainContent = styled.div`
  display: flex;
  position: relative;
  z-index: 10;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    margin-top: 1rem;
  }
`;

export const HeroSlideTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;
`;

export const HeroSlideTitle = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  color: #fff;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const HeroSlideSubtitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeroSlideDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  text-align: center;
`;

export const SearchForm = styled.div`
  display: flex;
  z-index: 20;
  padding: 1rem;
  margin-top: 1rem;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  background-color: #ffffff;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

export const HeroSlideInput = styled(Input)`
  width: 100%;
  height: 2.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: 0.375rem;

  @media (min-width: 768px) {
    height: 3rem;
    line-height: 1.75rem;
  }
`;

export const HeroSlideButton = styled(Button)`
  width: 100%;
  height: 2.5rem;
  font-size: 1rem;
  line-height: 1rem;
  border-radius: 0.375rem;

  @media (min-width: 768px) {
    height: 3rem;
    line-height: 1.75rem;
  }
`;

export const HeroSlideSearchbarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const ScrollDownContainer = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  bottom: -2rem;
  z-index: 20;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    bottom: -4rem;
  }
`;

export const ScrollDownButtonWrapper = styled.div`
  padding: 0.5rem;
  border-radius: 9999px;
  border-width: 4px;
  border-color: #ffffff;
  border-style: solid;
  width: 5rem;
  height: 5rem;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  :hover {
    transform: scale(var(--transform-scale-x, 1), var(--transform-scale-y, 1));
    --transform-scale-x: 1.25;
    --transform-scale-y: 1.25;
  }

  @media (min-width: 768px) {
    padding: 1rem;
    width: 8rem;
    height: 8rem;
  }
`;

export const ScrollDownButton = styled.button`
  border-radius: 9999px;
  border-width: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  cursor: pointer;

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    color: #00607a;
  }

  :hover {
    background-color: #ffffff;
  }
`;

export const ScrollDownIcon = styled(ArrowDownOutlined)`
  width: 1.5rem;
  height: 1.5rem;
  color: #00607a;
`;
