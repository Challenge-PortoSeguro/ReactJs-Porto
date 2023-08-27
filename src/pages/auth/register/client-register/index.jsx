import React, { useMemo, useState } from "react";
import logo from "../../../../assets/img/logo.png";
import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";
import Button from "../../../../components/Button";
import * as S from "../styles";
import renderIcon from "../../../../utils/iconGallery";

const RegistroCliente = () => {
    const [changeInfo, setChangeInfo] = useState(false);
    const [nomeCliente, setNomeCliente] = useState("");
    const [cpfCliente, setCpfCliente] = useState("");
    const [rgCliente, setRgCliente] = useState("");
    const [cnhCliente, setCnhCliente] = useState("");
    const [nascimentoCliente, setNascimentoCliente] = useState("");
    const [enderecoCliente, setEnderecoCliente] = useState("");
    const [emailCliente, setEmailCliente] = useState("");
    const [generoCliente, setGeneroCliente] = useState("");
    const [telefoneCliente, setTelefoneCliente] = useState("");
    const [senhaCliente, setSenhaCliente] = useState("");

    const [modeloVeiculo, setModeloVeiculo] = useState("");
    const [placaVeiculo, setPlacaVeiculo] = useState("");
    const [renavamVeiculo, setRenavamVeiculo] = useState("");
    const [tipoChassiVeiculo, setTipoChassiVeiculo] = useState("");
    const [numeroChassiVeiculo, setNumeroChassiVeiculo] = useState("");
    const [tipoEixoVeiculo, setTipoEixoVeiculo] = useState("");
    const [numeroEixosVeiculo, setNumeroEixosVeiculo] = useState("");
    const [alturaVeiculo, setAlturaVeiculo] = useState("");
    const [larguraVeiculo, setLarguraVeiculo] = useState("");
    const [comprimentoVeiculo, setComprimentoVeiculo] = useState("");
    const [pesoVeiculo, setPesoVeiculo] = useState("");
    const [pesoSuportadoVeiculo, setPesoSuportadoVeiculo] = useState("");

    const icons = useMemo(() => ({
        play: renderIcon({ name: "play", size: 18, color: "#000" }),
        aboutus: renderIcon({ name: "aboutus", size: 62, color: "#fff" }),
        next: renderIcon({ name: "next", size: 18, color: "#fff" }),
        check: renderIcon({ name: "check", size: 18, color: "#fff" }),
        back: renderIcon({ name: "back", size: 18, color: "#fff" }),
    }), []);

    const handleSubmit = () => {
        const dadosUsuario = {
            nomeCliente: nomeCliente,
            cpfCliente: cpfCliente,
            rgCliente: rgCliente,
            cnhCliente: cnhCliente,
            nascimentoCliente: nascimentoCliente,
            enderecoCliente: enderecoCliente,
            generoCliente: generoCliente,
            telefoneCliente: telefoneCliente,
            emailCliente: emailCliente,
            senhaCliente: senhaCliente,
        }

        const dadosVeiculo = {
            modeloVeiculo: modeloVeiculo,
            placaVeiculo: placaVeiculo,
            renavamVeiculo: renavamVeiculo,
            tipoChassiVeiculo: tipoChassiVeiculo,
            numeroChassiVeiculo: numeroChassiVeiculo,
            tipoEixoVeiculo: tipoEixoVeiculo,
            numeroEixosVeiculo: numeroEixosVeiculo,
            alturaVeiculo: alturaVeiculo,
            larguraVeiculo: larguraVeiculo,
            comprimentoVeiculo: comprimentoVeiculo,
            pesoVeiculo: pesoVeiculo,
            pesoSuportadoVeiculo: pesoSuportadoVeiculo
        }
        console.log(dadosUsuario, dadosVeiculo);
    }

    return (
        <S.Container>
            <S.RegisterBackgroundContainerCliente />

            <S.Form>
                <S.Logo src={logo} />
                <S.Title>Registrar {changeInfo ? "Veículo" : "Cliente"}</S.Title>
                <S.UserContainer changeInfo={changeInfo}>
                    <Input name="Nome Completo:" placeholder="Digite seu nome" onChange={(e) => setNomeCliente(e.target.value)} />
                    <S.InputGroup>
                        <Input name="CPF:" placeholder="Digite seu cpf" onChange={(e) => setCpfCliente(e.target.value)} />
                        <Input name="RG:" placeholder="Digite seu rg" onChange={(e) => setRgCliente(e.target.value)} />
                    </S.InputGroup>
                    <Input name="CNH:" placeholder="Digite sua cnh" onChange={(e) => setCnhCliente(e.target.value)} />
                    <Input name="Nascimento:" type="date" onChange={(e) => setNascimentoCliente(e.target.value)} />
                    <Input name="Endereço" placeholder="Digite seu endereço" onChange={(e) => setEnderecoCliente(e.target.value)} />
                    <S.InputGroup>
                        <Input name="Telefone:" type="tel" placeholder="Digite seu telefone" onChange={(e) => setTelefoneCliente(e.target.value)} />
                        <Select name="Gênero:" noneOption="Escolha seu gênero" values={["Masculino", "Feminino", "Prefiro não dizer"]} selected={generoCliente} onChange={(e) => setGeneroCliente(e.target.value)}/>
                    </S.InputGroup>
                    <Input name="Email:" type="email" placeholder="Digite seu email" onChange={(e) => setEmailCliente(e.target.value)} />
                    <Input name="Senha:" type="password" placeholder="Digite sua senha" onChange={(e) => setSenhaCliente(e.target.value)} />
                    <Button full variant="primary" onClick={() => setChangeInfo(true)}>Próxima Página {icons.next}</Button>
                </S.UserContainer>

                <S.VehicleContainer changeInfo={changeInfo}>
                    <Input name="Modelo:" placeholder="Digite o modelo" onChange={(e) => setModeloVeiculo(e.target.value)}/>
                    <Input name="Placa:" placeholder="Digite a placa" onChange={(e) => setPlacaVeiculo(e.target.value)}/>
                    <Input name="RENAVAM:" placeholder="Digite o renavam" onChange={(e) => setRenavamVeiculo(e.target.value)}/>
                    <Input name="Tipo Chassi" placeholder="Digite o tipo do chassi" onChange={(e) => setTipoChassiVeiculo(e.target.value)}/>
                    <Input name="Nº do Chassi:" placeholder="Digite o nº do chassi" onChange={(e) => setNumeroChassiVeiculo(e.target.value)}/>
                    <Input name="Tipo Eixo:" placeholder="Digite o tipo do eixo" onChange={(e) => setTipoEixoVeiculo(e.target.value)}/>
                    <Input name="Nº de Eixos:" placeholder="Digite o nº de eixos" onChange={(e) => setNumeroEixosVeiculo(e.target.value)}/>
                    <S.InputGroup>
                        <Input name="Altura:" type="number" min="0" placeholder="(cm)" onChange={(e) => setAlturaVeiculo(e.target.value)}/>
                        <Input name="Largura" type="number" min="0" placeholder="(cm)" onChange={(e) => setLarguraVeiculo(e.target.value)}/>
                        <Input name="Comprimento:" type="number" min="0" placeholder="(cm)" onChange={(e) => setComprimentoVeiculo(e.target.value)}/>
                    </S.InputGroup>
                    <S.InputGroup>
                        <Input name="Peso:" type="number" min="0" placeholder="(tol)" onChange={(e) => setPesoVeiculo(e.target.value)}/>
                        <Input name="Peso suportado:" type="number" min="0" placeholder="(tol)" onChange={(e) => setPesoSuportadoVeiculo(e.target.value)}/>
                    </S.InputGroup>
                    <S.InputGroup>
                        <Button full variant="primary" onClick={() => setChangeInfo(false)}>{icons.back} Voltar</Button>
                        <Button full variant="success" onClick={handleSubmit}>Finalizar {icons.check}</Button>
                    </S.InputGroup>
                </S.VehicleContainer>
                <S.ButtonsContainer>
                    {!changeInfo && <Button full variant="link" color="#000" redirect="/login/client">Já possui uma conta?</Button>}
                </S.ButtonsContainer>
            </S.Form>
        </S.Container>
    )
}
export default RegistroCliente;