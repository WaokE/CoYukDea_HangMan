import useStore from "./Store/Store";

import GameStatus from "./Components/GameStatus";
import DrawHangman from "./Components/DrawHangMan";
import AlphabetButtons from "./Components/AlphabetButtons";
import EndGameToast from "./Components/EndGameToast";

import "./App.css";

function App() {
    const { isGameOver } = useStore();

    return (
        <div className="App">
            <GameStatus />
            <DrawHangman />
            <AlphabetButtons />
            {isGameOver && <EndGameToast />}
        </div>
    );
}

export default App;
