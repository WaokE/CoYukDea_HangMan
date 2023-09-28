import useStore from "../Store/Store";

const EndGameToast = () => {
    const { answerWord, hideGameOverMessage, gameSetup } = useStore();

    const handleResetGame = () => {
        hideGameOverMessage();
        gameSetup();
    };

    return (
        <div>
            <p>게임 실패! 단어는 {answerWord} 였습니다.</p>
            <button onClick={handleResetGame}>게임 재시작</button>
        </div>
    );
};

export default EndGameToast;
