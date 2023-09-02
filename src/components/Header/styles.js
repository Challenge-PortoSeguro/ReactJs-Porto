import styled from "styled-components";

export const HeaderBackground = styled.header`
  height: 56px;
  padding: 8px 24px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.transparent};
`;

export const Logo = styled.img`
    height: 40px;
    margin-right: 16px;
    cursor: pointer;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;

export const GroupButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 830px) {
    display: none;
  }
`;

export const ButtonSOS = styled.div`
  @media (max-width: 830px) {
    display: none;
  }
`;






export const MenuHamburguer = styled.div`
  display: none;
  cursor: pointer;
  
  @media (max-width: 830px) {
    display: flex;
  }
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const IconBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.border.divider};
  border-radius: 40px;
  width: 30px;
  height: 30px;
  margin-left: -20px;
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 201px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.white};
  border-left: 1px solid ${({ theme }) => theme.colors.border.transparent};
  display: flex;
  flex-direction: column;
  padding: 8px 6px;
  z-index: 1000;
  transition: width 0.3s ease-in-out;
`;

export const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;
