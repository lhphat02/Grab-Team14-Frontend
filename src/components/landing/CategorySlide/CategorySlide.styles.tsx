import styled from 'styled-components';
import { Button } from 'antd';

export const CategorySlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: 600;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 32px;
`;

export const CategoryButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  font-weight: 400;

  :hover {
    color: var(--white);
    background-color: var(--primary-color);
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
    padding: 2rem 4rem;
  }
`;

export const SeeMore = styled.div`
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  color: var(--primary-color);

  &:hover {
    color: var(--secondary-color);
  }
`;
