import styled from "styled-components";

export const CardContainer = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    width: 22rem;
    height: 25rem;
    background-color: transparent;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    transition: all 0.3s ease-in-out;
    @media (max-width: 1440px){
        width: 18rem;
        height: 23rem;
    }
    @media (max-width: 1024px){
        width: 15rem;
        height: 19rem;
    }
    @media (max-width: 840px){
        width: 13rem;
        height: 17rem;
        margin: 0.4rem;
    }
    @media (max-width: 669px){
        margin: 10px;
    }
    @media (max-width: 460px){
        width: 15rem;
        height: 14rem;
    }
`;

export const CardHeader = styled.div`
    width: 100%;
    height: 60%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1024px){
        height: 50%;
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    padding: 0.6rem;
    object-fit: contain;
    border-radius: 10px 10px 0 0;
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 40%;
    background-color: transparent;
    align-items: center;
    @media (max-width: 1024px){
        height: 50%;
    }
`;

export const CardTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text.body};
    text-align: center;
    padding: 1rem 0.5rem;
    @media (max-width: 1024px){
        font-size: 1.3rem;
    }
`;
export const CardSubtitle = styled.h2`
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    padding: 0 1rem 1rem 1rem;
    @media (max-width: 1024px){
        font-size: 0.9rem;
    }
`;
