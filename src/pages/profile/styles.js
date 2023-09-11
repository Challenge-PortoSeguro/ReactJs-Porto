import styled from "styled-components";
import bg_board from "../../assets/img/circuit-board.svg";

export const ProfileSection = styled.section`
    background-color: ${({ theme }) => theme.colors.background.white};
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 8px;
    gap: 12px;
`;

export const ContainerUp = styled.div`
    display: flex;
    gap: 12px;
    height: calc(70vh - 60px);

    @media (max-width: 768px) {
        flex-direction: column;
        height: 100%;
    }
`;



export const ProfileInfo = styled.aside`
    background: rgba( 179, 228, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 8px );
    -webkit-backdrop-filter: blur( 8px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    display: flex;
    flex-direction: column;
    flex: 4;
    height: 100%;
`;
export const ImageDiv = styled.div`
    background-color: ${({ theme }) => theme.colors.background.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    padding: 0.1rem 1rem;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`;
export const Img = styled.img`
    width: 20%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 5%;
    border: 2px solid ${({ theme }) => theme.colors.border.transparent};
    box-shadow: 0 8px 32px 0 rgba( 20, 20, 20, 0.5 );
`;
export const ProfileData = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow-y: scroll;
    width: 100%;
    padding: 1rem 1.5rem;

    & button {
        margin: 0.5rem 0;
    }
`;
export const ProfileDataUser = styled.div``;
export const ProfileDataVehicle = styled.div``;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.transparent};
`;
export const Title = styled.p`
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.black};
    margin-bottom: 0.5rem;
`;
export const Value = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text.black};
    margin-bottom: 0.5rem;
`;







export const ProfileChat = styled.div`
    background: rgba( 179, 228, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 8px );
    -webkit-backdrop-filter: blur( 8px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 8;
    width: 100%;
    height: 100%;
`;

export const Chat = styled.div`
    z-index: -1;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 1rem;
    border-radius: 10px;
    overflow-y: auto;
`;


export const ChatHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`;

export const ChatHeaderTitle = styled.p`
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.black};
`;

export const ChatBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    height: 100%;
`;

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;





export const BotBox = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 1rem;
`;
export const ImgBot = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.border.transparent};
    box-shadow: 0 8px 32px 0 rgba( 20, 20, 20, 0.5 );
`;
export const Text = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text.black};
    margin-left: 0.5rem;
`;





export const UserBox = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    align-items: center;
    gap: 1rem;
`;
export const ImgUser = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.border.transparent};
    box-shadow: 0 8px 32px 0 rgba( 20, 20, 20, 0.5 );
`;

export const SendBox = styled.div`
    width: 100%;
    position: relative;

    & button{
        position: absolute;
        right: 0;
        bottom: 0;
    }

    & input{
        height: 40px;
    }
`;





export const Summons = styled.div`
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 8px );
    -webkit-backdrop-filter: blur( 8px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    display: flex;
    flex-direction: column;
    height: calc(30vh - 64px);
    overflow-y: auto;

    @media (max-width: 768px) {
        height: 100%;
    }
`;
export const SummonsList = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid ${({ theme }) => theme.colors.border.field};
`;
export const SummonsListHeader = styled.thead`
    background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const SummonsListHeaderRow = styled.tr``;

export const SummonsListHeaderColumn = styled.th`
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.black};
    padding: 0.5rem;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.border.field};
`;
export const SummonsListHeaderColumnValue = styled.th`
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text.placeholder};
    padding: 0.5rem;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.border.transparent};
`;
