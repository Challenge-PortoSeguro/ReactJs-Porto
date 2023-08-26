import PropTypes from 'prop-types'
import Header from "../Header"
import * as S from './styles'
import Footer from "../Footer"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <S.Main>
        <S.Layout>
          <S.Content>{children}</S.Content>
          <Footer />
        </S.Layout>
      </S.Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout