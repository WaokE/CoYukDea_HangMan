import useStore from "./Store/Store";

import GameStatus from "./Components/GameStatus";
import DrawHangman from "./Components/DrawHangMan";
import AlphabetButtons from "./Components/AlphabetButtons";
import GameOverModal from "./Components/Modals/GameOverModal";

import "./Fonts/Font.css";
import "./App.css";

function App() {
    const { isGameOverMessageVisible } = useStore();

    return (
        <div className="App">
            <GameStatus />
            <DrawHangman />
            <AlphabetButtons />
            {isGameOverMessageVisible && <GameOverModal />}
        </div>
    );
}

export default App;
