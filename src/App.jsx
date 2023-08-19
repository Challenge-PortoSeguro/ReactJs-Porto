import { Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import GlobalStyles from './theme/GlobalStyles';
import DefaultColors from './theme/DefaultColors';
import { ThemeProvider } from 'styled-components';

function App() {


  return (
    <>
      <ThemeProvider theme={DefaultColors}>
        <GlobalStyles />
        <Layout>
          <Outlet />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
