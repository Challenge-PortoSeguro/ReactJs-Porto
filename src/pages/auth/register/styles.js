import styled from 'styled-components';
import robotTyping from "../../../assets/img/robot-typing.jpg";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.background.white};
    overflow-y: hidden;
`;

export const RegisterBackgroundContainerCliente = styled.div`
  flex: 9;
  background-image: url(${robotTyping});
  height: 100%;
  background-position: bottom;
  background-size: cover;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RegisterBackgroundContainerColaborador = styled.div`
  flex: 9;
  background-image: url(${robotTyping});
  height: 100%;
  background-position: bottom;
  background-size: cover;

  @media (max-width: 425px) {
    display: none;
  }
`;

export const UserContainer = styled.div`
    display: ${({ changeInfo }) => (changeInfo ? "none" : "flex")};
    flex-direction: column;
    gap: 8px;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 3;
    gap: 10px;
    padding: 32px;
    box-sizing: border-box;
    min-width: 350px;
    background: ${({ theme }) => theme.colors.background.body};

    @media (max-width: 425px) {
        min-width: 0;
    }
`;

export const InputGroup = styled.div`
    display: flex;
    gap: 8px;
`;

export const Logo = styled.img`
    width: 100%;
    max-width: 80px;
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
`;




export const VehicleContainer = styled.div`
    display: ${({ changeInfo }) => (changeInfo ? "flex" : "none")};
    flex-direction: column;
    gap: 8px;
`;

