import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import * as S from './SignupPromptSlide.styles';

const SignupPromptSlide: React.FC = () => {
  const navigate = useNavigate();

  const handleOnCreateAccountClick = () => {
    navigate('/auth/sign-up');
  };

  return (
    <S.Container>
      <S.BackgroundImageContainer>
        <S.BackgroundImage
          src="https://images.unsplash.com/photo-1478039543847-9cf7608e8f6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="employ"
          loading="lazy"
        />
        <S.Overlay />
        <S.Content>
          <S.TextWrapper>
            <S.Title>Join now to get the most out of our platform</S.Title>
            <S.Subtitle>Manage your jobs and see how you match with companies</S.Subtitle>
          </S.TextWrapper>
          <Button onClick={handleOnCreateAccountClick}>Create an account</Button>
        </S.Content>
      </S.BackgroundImageContainer>
    </S.Container>
  );
};

export default SignupPromptSlide;
