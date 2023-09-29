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
    background-color: yellow;
    align-items: center;
    justify-content: center;
`;

const GameOverModal = () => {
    const { answerWord, hideGameOverMessage, gameSetup } = useStore();

    const handleResetGame = () => {
        hideGameOverMessage();
        gameSetup();
    };

    return <ModalWrapper></ModalWrapper>;
};

export default GameOverModal;
