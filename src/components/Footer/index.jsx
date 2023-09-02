import * as S from "./styles";

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <S.Footer>
            <S.Text>Porto Assistant © {year} - Todos os direitos reservados</S.Text>
        </S.Footer>
    );
};

export default Footer;
