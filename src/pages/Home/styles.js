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
        padding: 5rem 0;
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
        margin-top: -4rem;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;





export const AboutDiv = styled.section`
    background: rgba( 59, 135, 247, 0.4 );
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
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

    @media (max-width: 1440px) {
        font-size: 2rem;
    }
`;

export const InfoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    height: 100%;
    padding: 3rem;

    @media (max-width: 968px) {
        flex-direction: column;
    }
`;
export const IllustrationAbout = styled.div`
    background-image: url(${team});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 50%;
    height: 90%;
    @media (max-width: 968px) {
        width: 50%;
        height: 100%;
    }
    @media (max-width: 650px) {
        width: 80%;
        height: 100%;
    }
`;
export const InfoContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 90%;
    @media (max-width: 968px) {
        width: 70%;
        height: 100%;
    }
    @media (max-width: 650px) {
        width: 90%;
        height: 100%;
    }
`;
export const InfoText = styled.div`
    text-align: justify;
    color: ${({ theme }) => theme.colors.text.body};
    font-size: 1.5rem;
    font-weight: 500;
    @media (max-width: 1440px) {
        font-size: 1.2rem;
    }
    @media (max-width: 1024px) {
        font-size: 1rem;
    }
    @media (max-width: 560px) {
        
        font-size: 0.8rem;
    }
`;






export const PrinciplesDiv = styled.div`
    background: rgba( 59, 135, 247, 0.4 );
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 80vh;
    height: fit-content;
    width: 97%;
    @media (max-width: 1024px) {
        height: fit-content;
    }
`;
export const PrinciplesTitle = styled.h1`
    color: ${({ theme }) => theme.colors.text.body};
    font-size: 2.5rem;
    font-weight: 700;
    margin: 5rem 0 -8rem 0;
    text-align: center;
`;
export const PrinciplesContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 1.5rem;
    @media (max-width: 1024px) {
        margin-top: 8rem;
    }
`;







export const GroupDiv = styled.div`
    background: rgba( 59, 135, 247, 0.4 );
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    width: 97%;
    @media (max-width: 1440px) {
        height: fit-content;
        padding-bottom: 5rem;
    }
`;
export const GroupTitle = styled.h1`
    color: ${({ theme }) => theme.colors.text.body};
    font-size: 2.5rem;
    font-weight: 700;
    margin: 5rem 0 -8rem 0;
`;
export const GroupContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    @media (max-width: 1024px) {
        margin-top: 8rem;
    }
`;






export const ContactDiv = styled.div`
    background: rgba( 59, 135, 247, 0.4 );
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 35vh;
    width: 97%;
    margin: 0 0 1rem 0;
    @media (max-width: 1024px) {
        height: fit-content;
    }
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

    @media (max-width: 650px) {
        width: 100%;
        padding: 2rem;
    }
`;