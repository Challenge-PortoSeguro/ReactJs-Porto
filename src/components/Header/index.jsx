import React, { useMemo, useState } from 'react';
import * as H from './styles';
import Logo from '../../assets/img/logo.png';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import renderIcon from '../../utils/iconGallery';

const Header = () => {
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const icons = useMemo(() => ({
        user: renderIcon({ name: "user", size: 18, color: "#000" }),
        login: renderIcon({ name: "login", size: 18, color: "#000" }),
        hamburguer: renderIcon({ name: 'hamburguer', size: 18, color: "#000" }),
        next: renderIcon({ name: "next", size: 18, color: "#000" }),
        aboutus: renderIcon({ name: "aboutus", size: 18, color: "#000" }),
        contact: renderIcon({ name: "contact", size: 18, color: "#000" }),
        sos: renderIcon({ name: "sos", size: 40, color: "#000" }),
    }), []);

    return (
        <H.HeaderBackground>
            <H.Navigation>
                <H.Logo src={Logo} alt='Logo Porto Assistent' onClick={() => navigate('/')} />
                <H.GroupButtons>
                    <Button variant="secondary" redirect="/profile/client">{icons.sos}</Button>
                </H.GroupButtons>

                <H.ButtonSOS>

                    <Button variant="link" redirect='/login/client' color="#000">{icons.login} Login</Button>
                </H.ButtonSOS>
            </H.Navigation>

            <H.MenuHamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? null : icons.hamburguer}
            </H.MenuHamburguer>

            {isMenuOpen && (
                <H.MobileMenu>
                    <H.MobileMenuContent>
                        <H.MobileMenuHeader>
                            <H.IconBack onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen && icons.next}
                            </H.IconBack>
                        </H.MobileMenuHeader>
                        <Button variant="secondary" full redirect="/profile/client">{icons.sos}</Button>
                        <Button variant="link" full redirect='/login/client' color="#000">{icons.login} Login</Button>
                    </H.MobileMenuContent>
                </H.MobileMenu>
            )}
        </H.HeaderBackground>
    );
};

export default Header;
