import React, { useMemo, useEffect } from 'react';
import * as H from './styles';
import Logo from '../../assets/img/logo.png';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import renderIcon from '../../utils/iconGallery';

const Header = () => {
    const navigate = useNavigate();

    const icons = useMemo(() => ({
        user: renderIcon({ name: "user", size: 18, color: "#000" }),
        login: renderIcon({ name: "login", size: 18, color: "#000" }),
        hamburguer: renderIcon({ name: 'hamburguer', size: 18, color: "#000" }),
        aboutus: renderIcon({ name: "aboutus", size: 18, color: "#000" }),
        contact: renderIcon({ name: "contact", size: 18, color: "#000" }),
    }), [])

    const handleLogoClick = () => {
        navigate('/');
    }




    return (
        <H.HeaderBackground>
            <H.Navigation>
                <H.Logo src={Logo} alt='Logo Porto Assistent' onClick={handleLogoClick} />
                <H.GroupButtons>
                    <Button variant="link" redirect='/' color="#000">{icons.aboutus} Sobre Nós</Button>
                    <Button variant="link" redirect='/' color="#000">{icons.contact} Contato</Button>
                    <Button variant="link" redirect='/login/cliente' color="#000">{icons.login} Login</Button>
                </H.GroupButtons>

                <Button variant="primary">SOS</Button>
            </H.Navigation>

            <H.MenuHamburguer>
                {icons.hamburguer}
            </H.MenuHamburguer>
        </H.HeaderBackground>
    );
}
export default Header;