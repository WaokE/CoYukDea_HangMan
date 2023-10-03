import styled from "styled-components";

import useStore from "../Store/Store";
import useAlphabetUsageStore from "../Store/AlphabetUsageStore";

const StyledButton = styled.button`
    width: 100px;
    padding: 0;
    font-weight: 200;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
    transition: all 0.2s;
    background: #f0d264;

    &:hover {
        background: #ecc535;
    }
`;

const GameStatus = () => {
    const { currentWord, gameScore, setHintMessage, leftHint, Hint, category, showHint } =
        useStore();
    const { hintUsed, toggleHintUsed } = useAlphabetUsageStore();

    const handleUseHint = () => {
        toggleHintUsed();
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
            <StyledButton
                onClick={handleUseHint}
                style={{ fontFamily: "MainFont" }}
                disabled={hintUsed}
            >
                힌트 보기
            </StyledButton>
        </div>
    );
};

export default GameStatus;
