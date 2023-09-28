import { useState, Fragment } from "react";

const DrawHangman = () => {
    const [mistake, setMistake] = useState(0);
    const hangmanArt = [
        `
    +---+
        |
        |
        |
        |
        |
  =========
    `,
        `
    +---+
    |   |
        |
        |
        |
        |
  =========
    `,
        `
    +---+
    |   |
    O   |
        |
        |
        |
  =========
    `,
        `
    +---+
    |   |
    O   |
    |   |
        |
        |
  =========
    `,
        `
    +---+
    |   |
    O   |
   /|   |
        |
        |
  =========
    `,
        `
    +---+
    |   |
    O   |
   /|\\  |
        |
        |
  =========
    `,
        `
    +---+
    |   |
    O   |
   /|\\  |
   /    |
        |
  =========
    `,
        `
    +---+
    |   |
    O   |
   /|\\  |
   / \\  |
        |
  =========
    `,
    ];

    const getHangmanArt = () => {
        if (mistake >= 0 && mistake < hangmanArt.length) {
            return hangmanArt[mistake];
        } else {
            return hangmanArt[hangmanArt.length - 1]; // 최대 상태 (모두 틀렸을 때)
        }
    };

    const handleHangManTest = () => {
        setMistake(mistake + 1);
    };

    return (
        <Fragment>
            <pre style={{ fontFamily: "Courier New" }}>{getHangmanArt()}</pre>
            <button onClick={handleHangManTest}>Test</button>
        </Fragment>
    );
};

export default DrawHangman;
