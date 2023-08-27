import React, { useMemo, useState } from "react";
import * as S from "../styles";
import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";
import logo from "../../../../assets/img/logo.png";
import Button from "../../../../components/Button";
import renderIcon from "../../../../utils/iconGallery";

const RegistroColaborador = () => {
    const [changeInfo, setChangeInfo] = useState(false);
    const [nomeColaborador, setNomeColaborador] = useState("");
    const [cpfColaborador, setCpfColaborador] = useState("");
    const [rgColaborador, setRgColaborador] = useState("");
    const [cnhColaborador, setCnhColaborador] = useState("");
    const [nascimentoColaborador, setNascimentoColaborador] = useState("");
    const [emailColaborador, setEmailColaborador] = useState("");
    const [senhaColaborador, setSenhaColaborador] = useState("");
    const [generoColaborador, setGeneroColaborador] = useState("");
    const [telefoneColaborador, setTelefoneColaborador] = useState("");

    const [modeloModal, setModeloModal] = useState("");
    const [placaModal, setPlacaModal] = useState("");
    const [larguraModal, setLarguraModal] = useState("");
    const [alturaModal, setAlturaModal] = useState("");
    const [comprimentoModal, setComprimentoModal] = useState("");
    const [pesoModal, setPesoModal] = useState("");
    const [pesoSuportadoModal, setPesoSuportadoModal] = useState("");
    const [tipoModal, setTipoModal] = useState("");

    const icons = useMemo(() => ({
        play: renderIcon({ name: "play", size: 18, color: "#000" }),
        aboutus: renderIcon({ name: "aboutus", size: 62, color: "#fff" }),
        next: renderIcon({ name: "next", size: 18, color: "#fff" }),
        check: renderIcon({ name: "check", size: 18, color: "#fff" }),
        back: renderIcon({ name: "back", size: 18, color: "#fff" }),
    }), []);

    const handleSubmit = () => {
        const dadosColaborador = {
            nomeColaborador: nomeColaborador,
            cpfColaborador: cpfColaborador,
            rgColaborador: rgColaborador,
            cnhColaborador: cnhColaborador,
            nascimentoColaborador: nascimentoColaborador,
            generoColaborador: generoColaborador,
            telefoneColaborador: telefoneColaborador,
            emailColaborador: emailColaborador,
            senhaColaborador: senhaColaborador,
        }

        const dadosModal = {
            modeloModal: modeloModal,
            placaModal: placaModal,
            larguraModal: larguraModal,
            alturaModal: alturaModal,
            comprimentoModal: comprimentoModal,
            pesoModal: pesoModal,
            pesoSuportadoModal: pesoSuportadoModal,
            tipoModal: tipoModal,
        }

        console.log(dadosColaborador);
        console.log(dadosModal);
    }

    return (
        <S.Container>
            <S.RegisterBackgroundContainerColaborador />

            <S.Form>
                <S.Logo src={logo} />
                <S.Title>Registrar {changeInfo ? "Modal" : "Colaborador"}</S.Title>
                <S.UserContainer changeInfo={changeInfo}>
                    <Input name="Nome Completo:" placeholder="Digite seu nome" onChange={(e) => setNomeColaborador(e.target.value)} />
                    <S.InputGroup>
                        <Input name="CPF:" placeholder="Digite seu cpf" onChange={(e) => setCpfColaborador(e.target.value)} />
                        <Input name="RG:" placeholder="Digite seu rg" onChange={(e) => setRgColaborador(e.target.value)} />
                    </S.InputGroup>
                    <Input name="CNH:" placeholder="Digite sua cnh" onChange={(e) => setCnhColaborador(e.target.value)} />
                    <Input name="Nascimento:" type="date" onChange={(e) => setNascimentoColaborador(e.target.value)} />
                    <S.InputGroup>
                        <Input name="Telefone:" type="tel" placeholder="Digite seu telefone" onChange={(e) => setTelefoneColaborador(e.target.value)} />
                        <Select name="Gênero:" noneOption="Escolha seu gênero" values={["Masculino", "Feminino", "Prefiro não dizer"]} selected={generoColaborador} onChange={(e) => setGeneroColaborador(e.target.value)}/>
                    </S.InputGroup>
                    <Input name="Email:" type="email" placeholder="Digite seu email" onChange={(e) => setEmailColaborador(e.target.value)} />
                    <Input name="Senha:" type="password" placeholder="Digite sua senha" onChange={(e) => setSenhaColaborador(e.target.value)} />
                    <Button full variant="primary" onClick={() => setChangeInfo(true)}>Próxima Página {icons.next}</Button>
                </S.UserContainer>

                <S.VehicleContainer changeInfo={changeInfo}>
                    <Input name="Modelo:" placeholder="Digite o modelo" onChange={(e) => setModeloModal(e.target.value)}/>
                    <Input name="Placa:" placeholder="Digite a placa" onChange={(e) => setPlacaModal(e.target.value)}/>
                    <Input name="Tipo Modal" placeholder="Digite o tipo do modal" onChange={(e) => setTipoModal(e.target.value)}/>
                    <S.InputGroup>
                        <Input name="Altura:" type="number" min="0" placeholder="(cm)" onChange={(e) => setAlturaModal(e.target.value)}/>
                        <Input name="Largura" type="number" min="0" placeholder="(cm)" onChange={(e) => setLarguraModal(e.target.value)}/>
                        <Input name="Comprimento:" type="number" min="0" placeholder="(cm)" onChange={(e) => setComprimentoModal(e.target.value)}/>
                    </S.InputGroup>
                    <S.InputGroup>
                        <Input name="Peso:" type="number" min="0" placeholder="(tol)" onChange={(e) => setPesoModal(e.target.value)}/>
                        <Input name="Peso suportado:" type="number" min="0" placeholder="(tol)" onChange={(e) => setPesoSuportadoModal(e.target.value)}/>
                    </S.InputGroup>
                    <S.InputGroup>
                        <Button full variant="primary" onClick={() => setChangeInfo(false)}>{icons.back} Voltar</Button>
                        <Button full variant="success" onClick={handleSubmit}>Finalizar {icons.check}</Button>
                    </S.InputGroup>
                </S.VehicleContainer>
                <S.ButtonsContainer>
                    {!changeInfo && <Button full variant="link" color="#000" redirect="/login/colaborador">Já possui uma conta?</Button>}
                </S.ButtonsContainer>
            </S.Form>
        </S.Container>
    )
}
export default RegistroColaborador;