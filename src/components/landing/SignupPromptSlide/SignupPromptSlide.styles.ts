import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const BackgroundImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  inset: 0;
  width: 100%;
  height: 80%;

  @media (min-width: 768px) {
    height: 50%;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: var(--primary-color);
  opacity: 0.8;
`;

export const Content = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
`;

export const TextWrapper = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: white;
  margin: 0;
`;
