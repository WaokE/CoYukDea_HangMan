import { Fragment } from "react";
import useStore from "../Store/Store";

const DrawHangman = () => {
    const { mistakeCount, mistakeOccur, mistakeReset, gameOver, gameReset } = useStore();
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
        if (mistakeCount >= 0 && mistakeCount < hangmanArt.length) {
            return hangmanArt[mistakeCount];
        } else {
            return hangmanArt[hangmanArt.length - 1]; // 최대 상태 (모두 틀렸을 때)
        }
    };

    const handleHangManTest = () => {
        mistakeOccur();
        if (mistakeCount === 6) {
            gameOver();
        }
    };

    return (
        <Fragment>
            <pre style={{ fontFamily: "Courier New" }}>{getHangmanArt()}</pre>
            <button onClick={handleHangManTest}>Count Up</button>
        </Fragment>
    );
};

export default DrawHangman;
