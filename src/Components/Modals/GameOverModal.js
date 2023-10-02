import styled from "styled-components";

import useStore from "../../Store/Store";
import useAlphabetUsageStore from "../../Store/AlphabetUsageStore";

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
    const { clearAlphabetUsage, toggleAlphabetUsage, clearAlphabetRight, toggleAlphabetRight } =
        useAlphabetUsageStore();

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
    };

    return (
        <ModalWrapper>
            <div>
                <p>게임 실패! 단어는 {answerWord} (이)였습니다.</p>
                <p>점수 : {gameScore}</p>
                <button onClick={handleResetGame} style={{ fontFamily: "MainFont" }}>
                    게임 재시작
                </button>
            </div>
        </ModalWrapper>
    );
};

export default GameOverModal;
