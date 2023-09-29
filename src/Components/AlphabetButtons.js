import styled from "styled-components";

import useStore from "../Store/Store";
import useAlphabetUsageStore from "../Store/AlphabetUsageStore";

const StyledButton = styled.button`
    height: 60px;
    width: 60px;
    background-color: #f0d264;
    border-radius: 20px;
`;

const AlphabetButtons = () => {
    const { answerWord, currentWord, setCurrentWord, mistakeOccur, showGameWinMessage } =
        useStore();
    const { alphabetUsage, toggleAlphabetUsage } = useAlphabetUsageStore();
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
        toggleAlphabetUsage(char);
    };

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 0.1fr)",
                gap: "3px",
                width: "50%",
                margin: "0 auto",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {alphabet.map((char, index) => (
                <StyledButton
                    key={index}
                    onClick={() => handleButtonClick(char)}
                    style={{ fontFamily: "MainFont" }}
                    disabled={alphabetUsage[char]}
                >
                    {char}
                </StyledButton>
            ))}
        </div>
    );
};

export default AlphabetButtons;
