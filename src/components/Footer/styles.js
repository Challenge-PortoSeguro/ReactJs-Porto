import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.border.transparent};
  background: ${({ theme }) => theme.colors.background.footer};

  @media screen and (max-width: 720px) {
    font-size: 14px;
  }
`;

export const Text = styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text.white};
    font-family: 'Inter';
    font-weight: 400;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
`;