import React, { useEffect, useState } from "react";
import * as S from "../styles";
import { Input } from "../../../../components/Input";
import logo from "../../../../assets/img/logo.png";
import Button from "../../../../components/Button";
import { useNavigate } from "react-router-dom";



const LoginColaborador = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({});
    const [error, setError] = useState(false);

    const handleLogin = () => {
        !login.email && !login.password && setError(true);

        login.email == "admin@email.com" && login.password == "admin" ? (
            setError(false),
            navigate("/profile/colaborator")
        ) : (
            setError(true)
        )
    }

    useEffect(() => {
        setError(false)
    }, [login])


    return (
        <S.Container>
            <S.LoginBackgroundContainerColaborador />

            <S.Form>
                <S.Logo src={logo} />
                <S.Title>Login Colaborador</S.Title>
                <Input 
                    name="E-mail" 
                    placeholder="Digite seu email" 
                    type="email"
                    onChange={(e) => setLogin({ ...login, email: e.target.value })}
                />
                <Input 
                    name="Senha" 
                    placeholder="Digite sua senha"
                    type="password"
                    onChange={(e) => setLogin({ ...login, password: e.target.value })}
                />
                {error && <S.Error>Usuário ou senha incorretos</S.Error>}
                <Button full variant="primary" onClick={handleLogin}>Login</Button>
                <S.ButtonsContainer>
                    <Button full variant="link" color="#000" redirect="/login/client">Acessar como Cliente</Button>
                    <Button full variant="link" color="#000" redirect="/register/colaborator">Ainda não possui uma conta? Cadastre uma!</Button>
                </S.ButtonsContainer>
            </S.Form>
        </S.Container>
    );
}
export default LoginColaborador;