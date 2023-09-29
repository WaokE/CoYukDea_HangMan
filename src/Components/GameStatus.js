import useStore from "../Store/Store";

const GameStatus = () => {
    const { currentWord } = useStore();

    return (
        <div>
            <p>{currentWord.split("").join(" ")}</p>
        </div>
    );
};

export default GameStatus;
