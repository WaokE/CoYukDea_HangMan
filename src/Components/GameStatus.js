import useStore from "../Store/Store";

const GameStatus = () => {
    const { pickAnswerWord } = useStore();

    const handleGameStart = () => {
        pickAnswerWord();
    };
    return (
        <div>
            <button onClick={handleGameStart}>Game Start</button>
        </div>
    );
};

export default GameStatus;
