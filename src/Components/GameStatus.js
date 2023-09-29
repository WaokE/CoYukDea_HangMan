import useStore from "../Store/Store";

const GameStatus = () => {
    const { currentWord } = useStore();

    return (
        <div>
            <p>{currentWord}</p>
        </div>
    );
};

export default GameStatus;
