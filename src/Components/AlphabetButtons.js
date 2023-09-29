import useStore from "../Store/Store";

const AlphabetButtons = () => {
    const { answerWord, currentWord, setCurrentWord, mistakeOccur, showGameWinMessage } =
        useStore();
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

    const handleButtonClick = (char) => {
        // 단어에 포함된 알파벳을 골랐을 시
        if (answerWord.includes(char)) {
            // 현재 단어에서 맞힌 부분을 갱신해준다.
            const newWordArray = [...currentWord];
            for (let i = 0; i < newWordArray.length; i++) {
                if (answerWord[i] === char) newWordArray[i] = char;
            }
            const newWord = newWordArray.join("");
            setCurrentWord(newWord);
            if (newWord === answerWord) showGameWinMessage();
        }
        // 단어에 포함되지 않은 알파벳을 골랐을 시, mistakeCount를 ++ 해준다.
        else {
            mistakeOccur();
        }
    };

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "8px",
                width: "50%",
                margin: "0 auto",
            }}
        >
            {alphabet.map((char, index) => (
                <button
                    key={index}
                    onClick={() => handleButtonClick(char)}
                    style={{ fontFamily: "MainFont" }}
                >
                    {char}
                </button>
            ))}
        </div>
    );
};

export default AlphabetButtons;
