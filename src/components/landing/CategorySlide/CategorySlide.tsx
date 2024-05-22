import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import * as S from './CategorySlide.styles';
import {
  DesktopOutlined,
  ApartmentOutlined,
  DollarOutlined,
  ToolOutlined,
  HomeOutlined,
  SmileOutlined,
  BuildOutlined,
  HeartOutlined,
  ReadOutlined,
  FireOutlined,
} from '@ant-design/icons';
import { setQuery } from '@app/store/slices/querySlice';
import { QueryModel } from '@app/domain/QueryModel';
import { useAppDispatch } from '@app/hooks/reduxHooks';

const industries = [
  { name: 'IT & Media', icon: <DesktopOutlined />, value: 'TECHNOLOGY_INFORMATION_AND_MEDIA' },
  { name: 'Administration', icon: <ApartmentOutlined />, value: 'ADMINISTRATIVE_AND_SUPPOR_SERVICES' },
  //   { name: 'Agriculture', icon: <FireOutlined />, value: 'FARMING_RANCHING_FORESTRY' },
  { name: 'Financial', icon: <DollarOutlined />, value: 'FINANCIAL_SERVICES' },
  { name: 'Construction', icon: <ToolOutlined />, value: 'CONSTRUCTION' },
  { name: 'Accommodation', icon: <HomeOutlined />, value: 'ACCOMMODATION_SERVICES' },
  { name: 'Entertainment', icon: <SmileOutlined />, value: 'ENTERTAINMENT_PROVIDERS' },
  { name: 'Manufacturing', icon: <BuildOutlined />, value: 'MANUFACTURING' },
  { name: 'Healthcare', icon: <HeartOutlined />, value: 'HOSPITALS_AND_HEALTH_CARE' },
  { name: 'Education', icon: <ReadOutlined />, value: 'EDUCATION' },
];

interface CategorySlideProps {
  onSlideChange: () => void;
}

const CategorySlide: React.FC<CategorySlideProps> = ({ onSlideChange }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCategoryClick = (industry: { value: string }) => {
    const initQuery: QueryModel = {
      page: 1,
      limit: 10,
      search: null,
      location: null,
      type: null,
      experience: null,
      time: null,
      workingMode: null,
      industry: industry.value,
      isLoaded: false,
    };

    dispatch(setQuery(initQuery));
    navigate(`/jobs`);
  };

  return (
    <S.CategorySlideContainer>
      <S.Title>Explore popular categories</S.Title>
      <S.ButtonsContainer>
        {industries.map((industry) => (
          <S.CategoryButton key={industry.name} icon={industry.icon} onClick={() => handleCategoryClick(industry)}>
            {industry.name}
          </S.CategoryButton>
        ))}
      </S.ButtonsContainer>
      <Button onClick={() => handleCategoryClick({ value: '' })}>See all categories</Button>
      <S.SeeMore onClick={onSlideChange}>Next</S.SeeMore>
    </S.CategorySlideContainer>
  );
};

export default CategorySlide;
