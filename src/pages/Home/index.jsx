import { useMemo } from "react";
import * as S from "./styles";
import illustration from "../../assets/img/illustration14.png";
import gifAI from "../../assets/img/gif_AI.gif";
import Button from "../../components/Button";
import renderIcon from "../../utils/iconGallery";

const Home = () => {

    const icons = useMemo(() => ({
        play: renderIcon({ name: "play", size: 18, color: "#000" }),
    }), [])


    return (
        <S.HomeSection>
            <S.WelcomeDiv>
                <S.TextDiv>
                    <S.HomeTitle>Bem vindo à revolucionaria asseguradora de veículos pesados</S.HomeTitle>
                    <S.HomeSubtitle>Descubra a revolução utilizando IA avançada para a coleta de dados precisos, garantindo proteção incomparável e processos eficientes.</S.HomeSubtitle>
                    <S.ButtonsDiv>
                        <Button variant="primary" redirect="/register/cliente">Cadastre-se</Button>
                        <Button variant="secondary" link="https://youtu.be/dQw4w9WgXcQ">{icons.play} Assistir Vídeo</Button>
                    </S.ButtonsDiv>
                </S.TextDiv>
                <S.Illustration src={gifAI} alt=""/>
            </S.WelcomeDiv>
            <S.WhoAreWeDiv>
                <S.WhoAreWeTitle>Quem somos</S.WhoAreWeTitle>
            </S.WhoAreWeDiv>
        </S.HomeSection>
    );
}
export default Home;