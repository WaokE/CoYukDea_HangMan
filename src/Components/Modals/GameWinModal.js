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

const GameWinModal = () => {
    const { answerWord, hideGameWinMessage, gameSetup, gameScoreUp, hideHint } = useStore();
    const { clearAlphabetUsage, toggleAlphabetUsage } = useAlphabetUsageStore();

    const handleClearGame = () => {
        hideGameWinMessage();
        clearAlphabetUsage();
        toggleAlphabetUsage(gameSetup());
        gameScoreUp();
        hideHint();
    };

    return (
        <ModalWrapper>
            <div>
                <p>게임 성공! 단어는 {answerWord} 였습니다.</p>
                <button onClick={handleClearGame} style={{ fontFamily: "MainFont" }}>
                    다음
                </button>
            </div>
        </ModalWrapper>
    );
};

export default GameWinModal;
