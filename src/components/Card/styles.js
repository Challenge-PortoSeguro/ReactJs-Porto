import styled from "styled-components";

export const CardContainer = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    max-width: 15rem;
    min-width: 15rem;
    height: 25rem;
    background-color: transparent;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    transition: all 0.3s ease-in-out;

    @media (max-width: 460px){
        max-width: 15rem;
        height: fit-content;
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
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    
    @media (max-width: 1024px){
        object-fit: contain;
    }
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 40%;
    padding: 0 0 0.5rem 0;
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

export const CardFooter = styled.div`
    gap: 0.5rem;
    width: 100%;
    height: fit-content;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
`;
