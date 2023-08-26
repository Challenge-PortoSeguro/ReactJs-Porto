import { useMemo } from "react";
import * as S from "./styles";
import Button from "../../components/Button";
import Card from "../../components/Card";
import handshake from "../../assets/img/handshake.svg";
import eficience from "../../assets/img/eficience.svg";
import inovation from "../../assets/img/inovation.svg";
import renderIcon from "../../utils/iconGallery";
import { Input } from "../../components/Input";

const Home = () => {

    const icons = useMemo(() => ({
        play: renderIcon({ name: "play", size: 18, color: "#000" }),
        aboutus: renderIcon({ name: "aboutus", size: 62, color: "#fff" }),
    }), [])


    return (
        <S.HomeSection>
            <S.WelcomeDiv>
                <S.TextDiv>
                    <S.HomeTitle>Bem vindo à revolucionaria asseguradora de veículos pesados</S.HomeTitle>
                    <S.HomeSubtitle>Descubra a revolução utilizando IA avançada para a coleta de dados precisos, garantindo proteção incomparável e processos eficientes.</S.HomeSubtitle>
                    <S.ButtonsDiv>
                        <Button variant="primary" redirect="/register/cliente">Cadastre-se</Button>
                        <Button variant="secondary" link="https://youtu.be/dQw4w9WgXcQ">{icons.play} Assistir Apresentação</Button>
                    </S.ButtonsDiv>
                </S.TextDiv>
                <S.IllustrationWelcome />
            </S.WelcomeDiv>

            <S.AboutDiv>
                <S.AboutTitle>{icons.aboutus} QUEM SOMOS</S.AboutTitle>
                <S.InfoDiv>
                    <S.IllustrationAbout />
                    <S.InfoContent>
                        <S.InfoText>
                            A Porto Assistent foi criada em 2023 por um grupo 
                            do curso de Análise e Desenvolvimento de Sistemas 
                            da FIAP. Nós somos apaixonados por tecnologia e 
                            estamos comprometidos em atender nosso público de 
                            forma eficiente e inovadora.
                            Nosso objetivo é praticar nossos conhecimentos e 
                            aplicá-los em soluções práticas e eficazes para as 
                            necessidades de nossos clientes.
                            Na PortoAssistent, trabalhamos de perto para 
                            entender as demandas e fornecer soluções sob medida 
                            que atendam as suas expectativas.
                        </S.InfoText>
                    </S.InfoContent>
                </S.InfoDiv>
            </S.AboutDiv>

            <S.PrinciplesDiv>
                <S.PrinciplesTitle>Nossos Princípios</S.PrinciplesTitle>
                <S.PrinciplesContent>
                    <Card 
                        title="Inovação"
                        desc="Para aprimorar a efetividade na seleção dos modais."
                        img={inovation}
                    />
                    <Card
                        title="Eficiência"
                        desc="Para garantir a melhor experiência ao usuário."
                        img={eficience}
                    />
                    <Card
                        title="Comprometimento"
                        desc="Para atender as necessidades de nossos clientes."
                        img={handshake}
                    />
                </S.PrinciplesContent>
            </S.PrinciplesDiv>

            <S.ContactDiv>
                <S.ContactTitle>Contato</S.ContactTitle>
                <S.FormContact>
                    <Input 
                        name="Nome:" 
                        id="nomeInput"
                        type="text"
                        placeholder="Digite seu nome"
                    />
                    <Input 
                        name="Email:" 
                        id="emailInput"
                        type="email"
                        placeholder="Digite seu email"
                    />
                    <Button variant="primary">Enviar</Button>
                </S.FormContact>
            </S.ContactDiv>
        </S.HomeSection>
    );
}
export default Home;