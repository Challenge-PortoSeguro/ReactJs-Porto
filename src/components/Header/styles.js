import styled from "styled-components";

export const HeaderBackground = styled.header`
  height: 56px;
  padding: 8px 24px;
  background-color: ${({ theme }) => theme.colors.background.header};
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
  justify-content: flex-end;
  gap: 8px;
  width: 100%;
`;