import useStore from "../Store/Store";

const EndGameToast = () => {
    const { answerWord, gameReset, mistakeReset } = useStore();

    const handleResetGame = () => {
        gameReset();
        mistakeReset();
    };

    return (
        <div>
            <p>게임 실패! 단어는 {answerWord} 였습니다.</p>
            <button onClick={handleResetGame}>리셋</button>
        </div>
    );
};

export default EndGameToast;
