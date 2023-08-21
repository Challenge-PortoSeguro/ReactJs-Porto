import React, { useMemo, useEffect } from 'react';
import * as H from './styles';
import Logo from '../../assets/img/logo.png';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import renderIcon from '../../utils/iconGallery';

const Header = () => {
    const navigate = useNavigate();

    const icons = useMemo(() => ({
        user: renderIcon({ name: "user", size: 18, color: "#fff" }),
        login: renderIcon({ name: "login", size: 18, color: "#fff" }),
        hamburguer: renderIcon({ name: 'hamburguer', size: 18, color: "#fff" }),
        aboutus: renderIcon({ name: "aboutus", size: 18, color: "#fff" }),
        contact: renderIcon({ name: "contact", size: 18, color: "#fff" }),
      }), [])

    const handleLogoClick = () => {
        navigate('/');
    }

    

    return (
        <H.HeaderBackground>
            <H.Logo src={Logo} alt='Logo Porto Assistent' onClick={handleLogoClick} />

            <H.Navigation>
                <Button variant="link" redirect='/'>{icons.aboutus} Sobre Nós</Button>
                <Button variant="link" redirect='/contato'>{icons.contact} Contato</Button>
                <Button variant="link" redirect='/login/cliente'>{icons.login} Login</Button>
            </H.Navigation>
        </H.HeaderBackground>
    );
}
export default Header;