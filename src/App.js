import DrawHangman from "./Components/DrawHangMan";
import AlphabetButtons from "./Components/AlphabetButtons";
import useStore from "./Store/Store";

import "./App.css";
import EndGameToast from "./Components/EndGameToast";

function App() {
    const { isGameOver } = useStore();
    const dummyWords = [
        "Apple",
        "Banana",
        "Orange",
        "Elephant",
        "Computer",
        "Guitar",
        "Butterfly",
        "Rainbow",
        "Sunshine",
        "Dolphin",
        "Mountain",
        "Adventure",
        "Chocolate",
        "Universe",
        "Jigsaw",
        "Happiness",
        "Balloon",
        "Serendipity",
        "Mystery",
        "Wanderlust",
    ];

    return (
        <div className="App">
            <DrawHangman />
            <AlphabetButtons />
            {isGameOver && <EndGameToast />}
        </div>
    );
}

export default App;
