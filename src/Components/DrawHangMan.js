import { Fragment } from "react";
import useStore from "../Store/Store";
import bunny1 from "../Images/1.png";
import bunny2 from "../Images/2.png";
import bunny3 from "../Images/3.png";
import bunny4 from "../Images/4.png";
import bunny5 from "../Images/5.png";
import bunny6 from "../Images/6.png";
import bunny7 from "../Images/7.png";
import bunny8 from "../Images/8.png";

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
