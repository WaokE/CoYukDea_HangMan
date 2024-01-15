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

const GameWinModal = () => {
    const { answerWord, hideGameWinMessage, gameSetup, gameScoreUp, hideHint } = useStore();
    const {
        clearAlphabetUsage,
        toggleAlphabetUsage,
        clearAlphabetRight,
        hintUsed,
        toggleHintUsed,
    } = useAlphabetUsageStore();

    const handleClearGame = () => {
        hideGameWinMessage();
        clearAlphabetUsage();
        clearAlphabetRight();
        toggleAlphabetUsage(gameSetup());
        gameScoreUp();
        hideHint();
        if (hintUsed) toggleHintUsed();
    };

    return (
        <ModalWrapper data-cy="gameWinModal">
            <div>
                <p>게임 성공! 단어는 {answerWord} 였습니다.</p>
                <StyledButton onClick={handleClearGame} style={{ fontFamily: "MainFont" }}>
                    다음
                </StyledButton>
            </div>
        </ModalWrapper>
    );
};

export default GameWinModal;
