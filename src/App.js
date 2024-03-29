import { useEffect } from "react";

import useStore from "./Store/Store";

import GameStatus from "./Components/GameStatus";
import DrawHangman from "./Components/DrawHangMan";
import AlphabetButtons from "./Components/AlphabetButtons";
import GameStartModal from "./Components/Modals/GameStartModal";
import GameOverModal from "./Components/Modals/GameOverModal";
import GameWinModal from "./Components/Modals/GameWinModal";
import HintMessage from "./Components/HintMessage";

import "./Fonts/Font.css";
import "./App.css";

function App() {
    const {
        isGameStartMessageVisible,
        isGameOverMessageVisible,
        isGameWinMessageVisible,
        isHintVisible,
    } = useStore();

    useEffect(() => {
        if (window.Cypress) {
            window.store = useStore;
        }
    }, []);

    return (
        <div className="App">
            {isGameStartMessageVisible && <GameStartModal />}
            {!isGameStartMessageVisible && (
                <>
                    <GameStatus />
                    <DrawHangman />
                    <AlphabetButtons />
                </>
            )}

            {isGameOverMessageVisible && <GameOverModal />}
            {isGameWinMessageVisible && <GameWinModal />}
            {isHintVisible && <HintMessage />}
        </div>
    );
}

export default App;
