import React, { useMemo, useState, useEffect } from "react";
import * as S from "../styles";
import { Input } from "../../../components/Input";
import Button from "../../../components/Button";
import renderIcon from "../../../utils/iconGallery";

const ColaboratorProfile = () => {
    const [startChat, setStartChat] = useState(false);
    const [userMessage, setUserMessage] = useState([]);

    const icons = useMemo(() => ({
        close: renderIcon({ name: 'close', size: 18, color: "#000" }),
        send: renderIcon({ name: 'send', size: 18, color: "#000" }),
    }), []);

    const valores = [
        { id: 1, nome: "Cliente 1", modal: "Modal 1", tipoChamado: "Eletrico", enderecoFinal: "Endereço Final 1", data: "Data 1", veiculo: "Veículo 1" },
        { id: 2, nome: "Cliente 2", modal: "Modal 2", tipoChamado: "Reboque", enderecoFinal: "Endereço Final 2", data: "Data 2", veiculo: "Veículo 2" },
        { id: 3, nome: "Cliente 3", modal: "Modal 3", tipoChamado: "Algum outro tipo", enderecoFinal: "Endereço Final 3", data: "Data 3", veiculo: "Veículo 3" },
        { id: 4, nome: "Cliente 4", modal: "Modal 4", tipoChamado: "Reboque", enderecoFinal: "Endereço Final 4", data: "Data 4", veiculo: "Veículo 4" },
        { id: 5, nome: "Cliente 5", modal: "Modal 5", tipoChamado: "Eletrico", enderecoFinal: "Endereço Final 5", data: "Data 5", veiculo: "Veículo 5" },
        { id: 6, nome: "Cliente 6", modal: "Modal 6", tipoChamado: "Algum outro tipo", enderecoFinal: "Endereço Final 6", data: "Data 6", veiculo: "Veículo 6" },
        { id: 7, nome: "Cliente 7", modal: "Modal 7", tipoChamado: "Reboque", enderecoFinal: "Endereço Final 7", data: "Data 7", veiculo: "Veículo 7" },
        { id: 8, nome: "Cliente 8", modal: "Modal 8", tipoChamado: "Eletrico", enderecoFinal: "Endereço Final 8", data: "Data 8", veiculo: "Veículo 8" },
        { id: 9, nome: "Cliente 9", modal: "Modal 9", tipoChamado: "Reboque", enderecoFinal: "Endereço Final 9", data: "Data 9", veiculo: "Veículo 9" },
        { id: 10, nome: "Cliente 10", modal: "Modal 10", tipoChamado: "Tipo Chamado 10", enderecoFinal: "Endereço Final 10", data: "Data 10", veiculo: "Veículo 10" },
    ]

    const handleStartChat = () => {
        setStartChat(true);
    }

    return (
        <S.ProfileSection>
            <S.ContainerUp>
                <S.ProfileInfo>
                    <S.ImageDiv>
                        <S.Img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" />
                    </S.ImageDiv>
                    <S.ProfileData>
                        <S.ProfileDataUser>
                            <S.Title style={({ textAlign: "center" })}>Dados do Colaborador:</S.Title>
                            <S.Content>
                                <S.Title>Nome:</S.Title>
                                <S.Value>Rodolfo</S.Value>
                            </S.Content>
                            <S.Content>
                                <S.Title>Email:</S.Title>
                                <S.Value>rodolfo@email.com</S.Value>
                            </S.Content>
                            <S.Content>
                                <S.Title>CPF:</S.Title>
                                <S.Value>671.176.690-39</S.Value>
                            </S.Content>
                            <S.Content>
                                <S.Title>RG:</S.Title>
                                <S.Value>40.453.753-4</S.Value>
                            </S.Content>
                            <S.Content>
                                <S.Title>CNH:</S.Title>
                                <S.Value>63166137796</S.Value>
                            </S.Content>
                            <S.Content>
                                <S.Title>Nascimento:</S.Title>
                                <S.Value>27/01/2005</S.Value>
                            </S.Content>
                            <S.Content>
                                <S.Title>Gênero:</S.Title>
                                <S.Value>Masculino</S.Value>
                            </S.Content>
                            <S.Content>
                                <S.Title>Telefone:</S.Title>
                                <S.Value>(82) 92775-3597</S.Value>
                            </S.Content>
                            <S.Content>
                                <S.Title>Endereço:</S.Title>
                                <S.Value>Rua do rodolfo, 157</S.Value>
                            </S.Content>
                        </S.ProfileDataUser>

                        <S.ProfileDataVehicle>
                            <S.Title style={({ marginTop: "3rem", textAlign: "center" })}>Dados do Modal:</S.Title>
                            <S.Content>
                                <S.Title>Modelo:</S.Title>
                                <S.Value>SP-9375</S.Value>
                            </S.Content>
                            <S.Content>
                                <S.Title>Placa:</S.Title>
                                <S.Value>AKS-3418</S.Value>
                            </S.Content>
                            <S.Content>
                                <S.Title>Tipo Modal:</S.Title>
                                <S.Value>Lança</S.Value>
                            </S.Content>
                            <S.Content>
                                <S.Title>Altura:</S.Title>
                                <S.Value>400 cm</S.Value>
                            </S.Content>
                            <S.Content>
                                <S.Title>Largura:</S.Title>
                                <S.Value>500 cm</S.Value>
                            </S.Content>
                            <S.Content>
                                <S.Title>Comprimento:</S.Title>
                                <S.Value>1900 cm</S.Value>
                            </S.Content>
                            <S.Content>
                                <S.Title>Peso:</S.Title>
                                <S.Value>5 tol</S.Value>
                            </S.Content>
                            <S.Content>
                                <S.Title>Peso Suportado:</S.Title>
                                <S.Value>15 tol</S.Value>
                            </S.Content>
                        </S.ProfileDataVehicle>

                        <Button>Editar</Button>
                    </S.ProfileData>
                </S.ProfileInfo>

                <S.ProfileChat>
                    {!startChat ? (
                        <Button variant="primary" onClick={handleStartChat}>Iniciar Chat</Button>
                    ) : (
                        <S.Chat>
                            <S.ChatHeader>
                                <S.ChatHeaderTitle>ChatBot</S.ChatHeaderTitle>
                                <Button variant="link" onClick={() => setStartChat(false)}>{icons.close}</Button>
                            </S.ChatHeader>

                            <S.ChatBody>
                                <S.Message>
                                    <S.BotBox>
                                        <S.ImgBot src="https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/9/9/2/512992_shutterstock_715962319converted_749269.png" />
                                        <S.Text>Olá, em que posso te ajudar?</S.Text>
                                    </S.BotBox>


                                    <S.UserBox>
                                        <S.ImgUser src="https://cdn-icons-png.flaticon.com/512/21/21104.png" />
                                        <S.Text>{userMessage || "..."}</S.Text>
                                    </S.UserBox>
                                </S.Message>

                                <S.SendBox>
                                    <Input
                                        placeholder="Digite sua mensagem"
                                        onChange={(e) => setUserMessage(e.target.value)}
                                        value={userMessage}
                                    />
                                    <Button variant="secondary">{icons.send}</Button>
                                </S.SendBox>
                            </S.ChatBody>
                        </S.Chat>
                    )}
                </S.ProfileChat>
            </S.ContainerUp>

            <S.Summons>
                <S.SummonsList>
                    <S.SummonsListHeader>
                        <S.SummonsListHeaderRow>
                            <S.SummonsListHeaderColumn>ID</S.SummonsListHeaderColumn>
                            <S.SummonsListHeaderColumn>Colaborador</S.SummonsListHeaderColumn>
                            <S.SummonsListHeaderColumn>Modal</S.SummonsListHeaderColumn>
                            <S.SummonsListHeaderColumn>Tipo Chamado</S.SummonsListHeaderColumn>
                            <S.SummonsListHeaderColumn>Endereço Final</S.SummonsListHeaderColumn>
                            <S.SummonsListHeaderColumn>Data</S.SummonsListHeaderColumn>
                            <S.SummonsListHeaderColumn>Veículo</S.SummonsListHeaderColumn>
                            <S.SummonsListHeaderColumn style={({ width: "0px" })}>Ação</S.SummonsListHeaderColumn>
                        </S.SummonsListHeaderRow>
                        {valores.map((valor) => (
                            <S.SummonsListHeaderRow key={valor.id}>
                                <S.SummonsListHeaderColumnValue>{valor.id}</S.SummonsListHeaderColumnValue>
                                <S.SummonsListHeaderColumnValue>{valor.nome}</S.SummonsListHeaderColumnValue>
                                <S.SummonsListHeaderColumnValue>{valor.modal}</S.SummonsListHeaderColumnValue>
                                <S.SummonsListHeaderColumnValue>{valor.tipoChamado}</S.SummonsListHeaderColumnValue>
                                <S.SummonsListHeaderColumnValue>{valor.enderecoFinal}</S.SummonsListHeaderColumnValue>
                                <S.SummonsListHeaderColumnValue>{valor.data}</S.SummonsListHeaderColumnValue>
                                <S.SummonsListHeaderColumnValue>{valor.veiculo}</S.SummonsListHeaderColumnValue>
                                <S.SummonsListHeaderColumnValue style={({ width: "0px" })}><Button>Acessar</Button></S.SummonsListHeaderColumnValue>
                            </S.SummonsListHeaderRow>
                        ))}
                    </S.SummonsListHeader>
                </S.SummonsList>
            </S.Summons>

        </S.ProfileSection>
    )
}
export default ColaboratorProfile;