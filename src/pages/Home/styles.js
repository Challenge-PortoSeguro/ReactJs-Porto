import styled from 'styled-components';

export const WelcomeSection = styled.section`
    background-color: ${({ theme }) => theme.colors.background.body};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const HomeTitle = styled.h1`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: "Inter", sans-serif;
`;