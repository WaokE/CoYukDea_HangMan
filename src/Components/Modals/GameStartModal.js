import styled from "styled-components";

import useStore from "../../Store/Store";
import useAlphabetUsageStore from "../../Store/AlphabetUsageStore";

import gameStartBunny from "../../Images/1.png";

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

const StyledButton = styled.button`
    width: 100px;
    padding: 0;
    font-weight: 200;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
    transition: all 0.2s;
    background: #f0d264;

    &:hover {
        background: #ecc535;
    }
`;

const GameStartModal = () => {
    const { hideGameStartMessage, gameSetup } = useStore();
    const { toggleAlphabetUsage, toggleAlphabetRight } = useAlphabetUsageStore();

    const handleStartGame = () => {
        hideGameStartMessage();
        const char = gameSetup();
        toggleAlphabetUsage(char);
        toggleAlphabetRight(char);
    };

    return (
        <ModalWrapper>
            <div>
                <img
                    src={gameStartBunny}
                    alt={`Game start bunny`}
                    style={{ maxWidth: "10%", height: "auto" }}
                />
                <p>송편토끼 행맨 게임</p>
                <StyledButton onClick={handleStartGame} style={{ fontFamily: "MainFont" }}>
                    게임 시작
                </StyledButton>
            </div>
        </ModalWrapper>
    );
};

export default GameStartModal;
