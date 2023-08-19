import React from 'react';
import * as H from './styles';
import Logo from '../../assets/img/logo.png';
import Button from '../Button';

const Header = () => {
    return (
        <H.HeaderBackground>
            <H.Logo src={Logo} alt='Logo Porto Assistent' />

            <H.Navigation>
                <Button variant='secondary' redirect='/'>Home</Button>
            </H.Navigation>
        </H.HeaderBackground>
    );
}
export default Header;