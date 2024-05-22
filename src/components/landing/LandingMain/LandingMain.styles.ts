import styled from 'styled-components';

export const LandingLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  // position: relative;
`;

export const LandingNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 10;
  position: fixed;
  top: 0;
  z-index: 50;
  width: 100%;
  background-color: white;
  backdrop-blur: blur(10px);
  opacity: 0.95;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary-color);
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: var(--primary-color);
  cursor: pointer;

  :hover {
    text-decoration: underline;
    text-underline-offset: 0.2rem;
  }
`;

export const ScrollButton = styled.div`
  position: fixed;
  z-index: 20;
  padding: 0.5rem;
  overflow: hidden;
  transition: transform 0.1s ease-in-out;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  bottom: 1.75rem;
  right: 1.75rem;

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    color: #00607a;

    @media (min-width: 768px) {
    }
  }

  &:hover {
    transform: translateY(-0.5rem);
  }

  @media (min-width: 768px) {
    padding: 1rem;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
    bottom: 2.5rem;
    right: 2.5rem;
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 3rem;
  }
`;
