import useStore from "../Store/Store";

const EndGameToast = () => {
    const { answerWord, hideGameOverMessage, mistakeReset } = useStore();

    const handleResetGame = () => {
        hideGameOverMessage();
        mistakeReset();
    };

    return (
        <div>
            <p>게임 실패! 단어는 {answerWord} 였습니다.</p>
            <button onClick={handleResetGame}>게임 재시작</button>
        </div>
    );
};

export default EndGameToast;
