import styled from "styled-components";

import useStore from "../../Store/Store";
import useAlphabetUsageStore from "../../Store/AlphabetUsageStore";

import gameOverBunny from "../../Images/8.png";

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

const GameOverModal = () => {
    const {
        answerWord,
        hideGameOverMessage,
        gameSetup,
        gameScore,
        gameScoreClear,
        hideHint,
        resetHint,
    } = useStore();
    const {
        clearAlphabetUsage,
        toggleAlphabetUsage,
        clearAlphabetRight,
        toggleAlphabetRight,
        hintUsed,
        toggleHintUsed,
    } = useAlphabetUsageStore();

    const handleResetGame = () => {
        hideGameOverMessage();
        clearAlphabetUsage();
        clearAlphabetRight();
        const char = gameSetup();
        toggleAlphabetUsage(char);
        toggleAlphabetRight(char);
        gameScoreClear();
        hideHint();
        resetHint();
        if (hintUsed) toggleHintUsed();
    };

    return (
        <ModalWrapper>
            <div>
                <img
                    src={gameOverBunny}
                    alt={`Game over bunny`}
                    style={{ maxWidth: "10%", height: "auto" }}
                />
                <p>게임 실패! 단어는 {answerWord} (이)였습니다.</p>
                <p>점수 : {gameScore}</p>
                <StyledButton onClick={handleResetGame} style={{ fontFamily: "MainFont" }}>
                    게임 재시작
                </StyledButton>
            </div>
        </ModalWrapper>
    );
};

export default GameOverModal;
