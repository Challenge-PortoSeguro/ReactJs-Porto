import styled from "styled-components"

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.background.white};
    display: flex;
    flex-direction: column;
    height: 100%;
`;