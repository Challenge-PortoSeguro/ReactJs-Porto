import styled from 'styled-components';
import robotHand from "../../../assets/img/robot-hand.jpg";
import truck from "../../../assets/img/truck.jpg";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.background.white};
`;

export const LoginBackgroundContainerCliente = styled.div`
  flex: 9;
  background-image: url(${robotHand});
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const LoginBackgroundContainerColaborador = styled.div`
  flex: 9;
  background-image: url(${truck});
  height: 100%;
  background-position: center;
  background-size: cover;
`;


export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 3;
    min-width: fit-content;
    gap: 16px;
    padding: 32px;
    box-sizing: border-box;
    background: ${({ theme }) => theme.colors.background.body};
`;

export const Logo = styled.img`
    width: 100%;
    max-width: 200px;
    margin-bottom: 32px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.black};
    margin-bottom: 16px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
`;
