import React, { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles'
import Button from '../../components/Button';
import { Input } from '../../components/Input';

const Chat = () => {
    const navigate = useNavigate();


    return (
        <C.Container>
            <h1 style={({color: "#000"})}>Tela do ChatBot</h1>
        </C.Container>
    );
};
export default Chat;