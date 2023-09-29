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

const GameOverModal = () => {
    const { answerWord, hideGameOverMessage, gameSetup } = useStore();

    const handleResetGame = () => {
        hideGameOverMessage();
        gameSetup();
    };

    return (
        <ModalWrapper>
            <div>
                <p>게임 실패! 단어는 {answerWord} 였습니다.</p>
                <button onClick={handleResetGame} style={{ fontFamily: "MainFont" }}>
                    게임 재시작
                </button>
            </div>
        </ModalWrapper>
    );
};

export default GameOverModal;
