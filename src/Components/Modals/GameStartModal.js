import styled from "styled-components";

import useStore from "../../Store/Store";

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    display: flex;
    background-color: #fce09b;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`;

const GameStartModal = () => {
    const { hideGameStartMessage, gameSetup } = useStore();

    const handleStartGame = () => {
        hideGameStartMessage();
        gameSetup();
    };

    return (
        <ModalWrapper>
            <div>
                <p>행맨 게임</p>
                <button onClick={handleStartGame} style={{ fontFamily: "MainFont" }}>
                    게임 시작
                </button>
            </div>
        </ModalWrapper>
    );
};

export default GameStartModal;
