import useStore from "./Store/Store";

import GameStatus from "./Components/GameStatus";
import DrawHangman from "./Components/DrawHangMan";
import AlphabetButtons from "./Components/AlphabetButtons";
import EndGameToast from "./Components/EndGameToast";

import "./App.css";

function App() {
    const { isGameOverMessageVisible } = useStore();

    return (
        <div className="App">
            <GameStatus />
            <DrawHangman />
            <AlphabetButtons />
            {isGameOverMessageVisible && <EndGameToast />}
        </div>
    );
}

export default App;
