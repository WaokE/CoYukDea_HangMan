import { create } from "zustand";

const dummyWords = [
    "APPLE",
    "BANANA",
    "ORANGE",
    "ELEPHANT",
    "COMPUTER",
    "GUITAR",
    "BUTTERFLY",
    "RAINBOW",
    "SUNSHINE",
    "DOLPHIN",
    "MOUNTAIN",
    "ADVENTURE",
    "CHOCOLATE",
    "UNIVERSE",
    "JIGSAW",
    "HAPPINESS",
    "BALLOON",
    "SERENDIPITY",
    "MYSTERY",
    "WANDERLUST",
];

const useStore = create((set) => ({
    answerWord: "None",
    gameSetup() {
        const pickedWord = dummyWords[Math.floor(Math.random() * dummyWords.length)];
        set(() => ({ answerWord: pickedWord, currentWord: "_".repeat(pickedWord.length) }));
    },

    currentWord: "None",
    setCurrentWord(newWord) {
        set(() => ({ currentWord: newWord }));
    },

    mistakeCount: 0,
    mistakeOccur() {
        set((state) => ({ mistakeCount: state.mistakeCount + 1 }));
    },
    mistakeReset() {
        set(() => ({ mistakeCount: 0 }));
    },

    isGameOver: false,
    gameOver() {
        set(() => ({ isGameOver: true }));
    },
    gameReset() {
        set(() => ({ isGameOver: false }));
    },
}));

export default useStore;
