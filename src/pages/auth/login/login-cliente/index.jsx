import React from "react";
import * as S from "../styles";
import { Input } from "../../../../components/Input";
import logo from "../../../../assets/img/logo.png";
import Button from "../../../../components/Button";


const LoginCliente = () => {
    return (
        <S.Container>
            <S.LoginBackgroundContainerCliente />

            <S.Form>
                <S.Logo src={logo} />
                <S.Title>Cliente</S.Title>
                <Input name="E-mail" placeholder="Digite seu email" />
                <Input name="Senha" placeholder="Digite sua senha" />
                <Button full variant="secondary">Login</Button>
                <S.ButtonsContainer>
                    <Button full variant="link" redirect="/login/colaborador">Acessar como colaborador</Button>
                    <Button full variant="link" redirect="/registro/cliente">Ainda não possui uma conta? Cadastre uma!</Button>
                </S.ButtonsContainer>
            </S.Form>
        </S.Container>
    );
}
export default LoginCliente;