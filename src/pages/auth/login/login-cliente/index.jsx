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
                <S.Title>Login Cliente</S.Title>
                <Input name="E-mail" placeholder="Digite seu email" />
                <Input name="Senha" placeholder="Digite sua senha" />
                <Button full variant="primary">Login</Button>
                <S.ButtonsContainer>
                    <Button full variant="link" color="#000" redirect="/login/colaborador">Acessar como colaborador</Button>
                    <Button full variant="link" color="#000" redirect="/register/cliente">Ainda não possui uma conta? Cadastre uma!</Button>
                </S.ButtonsContainer>
            </S.Form>
        </S.Container>
    );
}
export default LoginCliente;