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

const useStore = create((set) => {
    return {
        answerWord: "None",
        gameSetup() {
            // dummyWords에서 랜덤한 단어를 뽑는다.
            const pickedWord = dummyWords[Math.floor(Math.random() * dummyWords.length)];
            // 뽑은 단어와 동일한 길이의 '_'로 이루어진 배열을 만든다.
            const startWord = new Array(pickedWord.length).fill("_");
            // 게임 시작 시 밝힐 알파벳을 랜덤으로 뽑는다.
            const pickedWordAlphabetSet = new Set();
            for (let i = 0; i < pickedWord.length; i++) pickedWordAlphabetSet.add(pickedWord[i]);
            const setupRevealAlphabet = [...pickedWordAlphabetSet][
                Math.floor(Math.random() * pickedWordAlphabetSet.size)
            ];
            // 시작 단어의 일부를 뽑은 알파벳으로 밝힌다.
            for (let i = 0; i < startWord.length; i++)
                if (pickedWord[i] === setupRevealAlphabet) startWord[i] = setupRevealAlphabet;
            set(() => ({
                // 정답 단어, 현재 단어, 실수 카운트 초기화
                answerWord: pickedWord,
                currentWord: startWord.join(""),
                mistakeCount: 0,
            }));
            return setupRevealAlphabet;
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

        isGameStartMessageVisible: true,
        showGameStartMessage() {
            set(() => ({ isGameStartMessageVisible: true }));
        },
        hideGameStartMessage() {
            set(() => ({ isGameStartMessageVisible: false }));
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
    };
});

export default useStore;
