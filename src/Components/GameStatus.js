import useStore from "../Store/Store";

const GameStatus = () => {
    const { currentWord, gameScore, setHintMessage, leftHint, Hint, category, showHint } =
        useStore();

    const handleUseHint = () => {
        if (leftHint > 0) {
            Hint();
            setHintMessage(`정답의 카테고리는: ${category} 입니다.`);
            showHint();
        } else {
            setHintMessage(`힌트는 한 게임 당 두번만 사용 가능합니다.`);
            showHint();
        }
    };

    return (
        <div>
            <p>현재 점수: {gameScore}</p>
            <p>{currentWord.split("").join(" ")}</p>
            <button onClick={handleUseHint} style={{ fontFamily: "MainFont" }}>
                힌트 보기
            </button>
        </div>
    );
};

export default GameStatus;
