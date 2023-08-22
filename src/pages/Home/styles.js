import styled from 'styled-components';
import fundo from '../../assets/img/background.jpg';

export const HomeSection = styled.section`
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
`;

export const WelcomeDiv = styled.div`
    background-color: ${({ theme }) => theme.colors.background.white};
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;

    @media (max-width: 830px) {
        flex-direction: column-reverse;
        justify-content: start;
    }
`;
export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 50%;
    height: 100%;
    padding: 0 4.5rem;

    @media (max-width: 1024px) {
        padding: 0 2rem;
    }
    @media (max-width: 830px) {
        width: 100%;
        height: fit-content;
        padding: 0 4rem;
    }
    @media (max-width: 425px) {
        padding: 0 2rem;
    }
`;
export const HomeTitle = styled.h1`
    color: ${({ theme }) => theme.colors.text.black};
    font-size: 3.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    font-family: "Inter", sans-serif;

    @media (max-width: 1024px) {
        font-size: 2.5rem;
    }
    @media (max-width: 830px) {
        text-align: center;
    }
    @media (max-width: 425px) {
        font-size: 1.5rem;
    }
`;
export const HomeSubtitle = styled.h2`
    color: ${({ theme }) => theme.colors.text.black};
    font-size: 1.3rem;
    font-weight: 400;
    font-family: "Inter", sans-serif;

    @media (max-width: 1024px) {
        font-size: 1rem;
    }
`;
export const ButtonsDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    gap: 1rem;

    @media (max-width: 830px) {
        justify-content: center;
    }
`;
export const Illustration = styled.img`
    object-fit: contain;
    object-position: center;
    width: 50%;

    @media (max-width: 830px) {
        width: 60%;
    }
`;



export const WhoAreWeDiv = styled.section`
    background-color: ${({ theme }) => theme.colors.background.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 80%;
    border-radius: 8px;
`;

export const WhoAreWeTitle = styled.h1`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: "Inter", sans-serif;
`;