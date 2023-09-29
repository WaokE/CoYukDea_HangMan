import useStore from "../Store/Store";

const GameStatus = () => {
    const { currentWord, gameSetup } = useStore();

    const handleGameStart = () => {
        gameSetup();
    };
    return (
        <div>
            <button onClick={handleGameStart} style={{ fontFamily: "MainFont" }}>
                Game Start
            </button>
            <p>{currentWord}</p>
        </div>
    );
};

export default GameStatus;
