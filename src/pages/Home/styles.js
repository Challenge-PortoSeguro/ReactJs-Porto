import styled from 'styled-components';
import team from '../../assets/img/team.png';
import gifAI from "../../assets/img/gif_AI.gif";

export const HomeSection = styled.section`
    background-color: ${({ theme }) => theme.colors.background.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    /* gap: 5rem; */
`;

export const WelcomeDiv = styled.div`
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
export const IllustrationWelcome = styled.div`
    background-image: url(${gifAI});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 50%;
    height: 100%;

    @media (max-width: 830px) {
        width: 60%;
    }
`;





export const AboutDiv = styled.section`
    background: rgba( 59, 135, 247, 0.4 );
    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 97%;
`;

export const AboutTitle = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.text.body};
    font-size: 3rem;
    font-weight: 700;
    margin: 4rem 0 0 0;
    font-family: "Inter", sans-serif;
`;

export const InfoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    height: 100%;
    padding: 3rem;
`;
export const IllustrationAbout = styled.div`
    background-image: url(${team});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 50%;
    height: 90%;
`;
export const InfoContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 90%;
`;
export const InfoText = styled.div`
    text-align: justify;
    color: ${({ theme }) => theme.colors.text.body};
    font-size: 1.5rem;
    font-weight: 500;
`;






export const PrinciplesDiv = styled.div`
    background: rgba( 59, 135, 247, 0.4 );
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 90vh;
    width: 97%;
`;
export const PrinciplesTitle = styled.h1`
    color: ${({ theme }) => theme.colors.text.body};
    font-size: 2.5rem;
    font-weight: 700;
    margin: 5rem 0 -8rem 0;
`;
export const PrinciplesContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
export const Principle = styled.h3`
    color: ${({ theme }) => theme.colors.text.black};
    font-size: 1.5rem;
    font-weight: 500;
`;



export const ContactDiv = styled.div`
   background: rgba( 59, 135, 247, 0.4 );
    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    /* border-radius: 10px; */
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 35vh;
    width: 97%;
    margin: 0 0 1rem 0;
`;
export const ContactTitle = styled.h1`
    color: ${({ theme }) => theme.colors.text.body};
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    width: 100%;
`;
export const FormContact = styled.form`
    display: flex;
    flex-direction: column;
    width: 500px;
    gap: 0.8rem;
`;