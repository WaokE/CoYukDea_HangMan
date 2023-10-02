import { create } from "zustand";

const dummyWords = {
    과일: [
        "APPLE",
        "BANANA",
        "ORANGE",
        "STRAWBERRY",
        "GRAPES",
        "WATERMELON",
        "PINEAPPLE",
        "MANGO",
        "KIWI",
        "PEACH",
        "PLUM",
        "CHERRY",
        "LEMON",
        "PEAR",
    ],
    음식: [
        "PIZZA",
        "SUSHI",
        "BURGER",
        "PASTA",
        "SALAD",
        "STEAK",
        "ICECREAM",
        "PANCAKE",
        "SANDWICH",
        "TACO",
        "SPAGHETTI",
        "CHEESE",
        "CHOCOLATE",
        "COFFEE",
        "CUPCAKE",
    ],
    감정: [
        "HAPPY",
        "SAD",
        "ANGRY",
        "SURPRISED",
        "EXCITED",
        "CALM",
        "CONFUSED",
        "LOVE",
        "HATE",
        "GRATEFUL",
        "NERVOUS",
        "CONTENT",
        "AMUSED",
        "DISGUSTED",
        "HOPEFUL",
    ],
    동물: [
        "LION",
        "ELEPHANT",
        "TIGER",
        "GIRAFFE",
        "MONKEY",
        "PENGUIN",
        "KANGAROO",
        "ZEBRA",
        "GORILLA",
        "CHEETAH",
        "KOALA",
        "HIPPOPOTAMUS",
        "PANDA",
        "CROCODILE",
        "GIRAFFE",
    ],
    악기: [
        "PIANO",
        "GUITAR",
        "VIOLIN",
        "TRUMPET",
        "FLUTE",
        "DRUMS",
        "CELLO",
        "SAXOPHONE",
        "HARP",
        "XYLOPHONE",
        "ACCORDEON",
        "BANJO",
        "HARMONICA",
        "TROMBONE",
        "OBOE",
    ],
    도구: [
        "HAMMER",
        "SCREWDRIVER",
        "WRENCH",
        "SAW",
        "LEVEL",
        "DRILL",
        "TROWEL",
        "SCISSORS",
        "STAPLER",
        "PENCIL",
    ],
    전자제품: [
        "COMPUTER",
        "SMARTPHONE",
        "TABLET",
        "LAPTOP",
        "TELEVISION",
        "HEADPHONE",
        "CAMERA",
        "PRINTER",
        "MICROWAVE",
        "REFRIGERATOR",
        "DRONE",
        "SMARTWATCH",
        "PROJECTOR",
        "SPEAKER",
        "EARBUDS",
    ],
};

const useStore = create((set) => {
    return {
        answerWord: "None",
        category: "",
        gameSetup() {
            // 랜덤으로 카테고리를 하나 뽑는다.
            const category =
                Object.keys(dummyWords)[Math.floor(Math.random() * Object.keys(dummyWords).length)];
            const wordsOfCategory = dummyWords[category];
            // 카테고리에서 랜덤한 단어를 뽑는다.
            const pickedWord = wordsOfCategory[Math.floor(Math.random() * wordsOfCategory.length)];
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
                // 정답 단어, 현재 단어, 실수 카운트, 카테고리 초기화
                answerWord: pickedWord,
                currentWord: startWord.join(""),
                mistakeCount: 0,
                category: category,
            }));
            return setupRevealAlphabet;
        },

        gameScore: 0,
        gameScoreUp() {
            set((state) => ({ gameScore: state.gameScore + 1 }));
        },
        gameScoreClear() {
            set(() => ({ gameScore: 0 }));
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

        hintMessage: "",
        setHintMessage(message) {
            set(() => ({ hintMessage: message }));
        },
        leftHint: 2,
        Hint() {
            set((state) => ({ leftHint: state.leftHint - 1 }));
        },
        resetHint() {
            set(() => ({ leftHint: 2 }));
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

        isHintVisible: false,
        showHint() {
            set(() => ({ isHintVisible: true }));
        },
        hideHint() {
            set(() => ({ isHintVisible: false }));
        },
    };
});

export default useStore;
