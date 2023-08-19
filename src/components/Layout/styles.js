import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  overflow: auto;
  flex-direction: column;
  min-height: calc(100vh - 56px);
  flex: 1;

  @media screen and (max-width: 720px) {
    overflow: auto;
    min-height: unset;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Main = styled.main`
  display: flex;
  overflow: auto;
  flex: 1;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;