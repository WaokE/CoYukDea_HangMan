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
        // dummyWords에서 랜덤한 단어를 뽑는다.
        const pickedWord = dummyWords[Math.floor(Math.random() * dummyWords.length)];
        set(() => ({
            // 정답 단어, 현재 단어, 실수 카운트 초기화
            answerWord: pickedWord,
            currentWord: "_".repeat(pickedWord.length),
            mistakeCount: 0,
        }));
    },

    currentWord: "None",
    setCurrentWord(newWord) {
        set(() => ({ currentWord: newWord }));
    },

    mistakeCount: 0,
    mistakeOccur() {
        set((state) => {
            const newMistakeCount = state.mistakeCount + 1;
            if (newMistakeCount > 6) {
                return {
                    mistakeCount: newMistakeCount,
                    isGameOverMessageVisible: true,
                };
            } else {
                return {
                    mistakeCount: newMistakeCount,
                };
            }
        });
    },

    isGameOverMessageVisible: false,
    showGameOverMessage() {
        set(() => ({ isGameOverMessageVisible: true }));
    },
    hideGameOverMessage() {
        set(() => ({ isGameOverMessageVisible: false }));
    },

    isGameWinMessageVisible: false,
    showGameWinMessage() {
        set(() => ({ isGameWinMessageVisible: true }));
    },
    hideGameWinMessage() {
        set(() => ({ isGameWinMessageVisible: false }));
    },
}));

export default useStore;
