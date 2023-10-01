import { Fragment } from "react";
import useStore from "../Store/Store";
import bunny1 from "../Images/송편토끼-01.jpg";
import bunny2 from "../Images/송편토끼-02.jpg";
import bunny3 from "../Images/송편토끼-03.jpg";
import bunny4 from "../Images/송편토끼-04.jpg";
import bunny5 from "../Images/송편토끼-05.jpg";
import bunny6 from "../Images/송편토끼-06.jpg";
import bunny7 from "../Images/송편토끼-07.jpg";
import bunny8 from "../Images/송편토끼-08.jpg";

const hangmanArt = [bunny1, bunny2, bunny3, bunny4, bunny5, bunny6, bunny7, bunny8];

const DrawHangman = () => {
    const { mistakeCount } = useStore();

    const getHangmanArt = () => {
        if (mistakeCount >= 0 && mistakeCount < hangmanArt.length) {
            return hangmanArt[mistakeCount];
        } else {
            return hangmanArt[hangmanArt.length - 1]; // 최대 상태 (모두 틀렸을 때)
        }
    };

    return (
        <Fragment>
            <img
                src={getHangmanArt()}
                alt={`Hangman Art ${mistakeCount}`}
                style={{ maxWidth: "10%", height: "auto" }}
            />
        </Fragment>
    );
};

export default DrawHangman;
