import { create } from "zustand";

const useAlphabetUsageStore = create((set) => {
    const alphabetArray = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

    const initialAlphabetUsage = alphabetArray.reduce((acc, char) => {
        acc[char] = false;
        return acc;
    }, {});

    return {
        alphabetUsage: initialAlphabetUsage,
        toggleAlphabetUsage: (letter) =>
            set((state) => ({
                alphabetUsage: {
                    ...state.alphabetUsage,
                    [letter]: !state.alphabetUsage[letter],
                },
            })),
        clearAlphabetUsage: () =>
            set(() => ({
                alphabetUsage: initialAlphabetUsage,
            })),
        alphabetRight: initialAlphabetUsage,
        toggleAlphabetRight: (letter) =>
            set((state) => ({
                alphabetRight: {
                    ...state.alphabetRight,
                    [letter]: !state.alphabetRight[letter],
                },
            })),
        clearAlphabetRight: () =>
            set(() => ({
                alphabetRight: initialAlphabetUsage,
            })),
        hintUsed: false,
        toggleHintUsed: () =>
            set((state) => ({
                hintUsed: !state.hintUsed,
            })),
    };
});

export default useAlphabetUsageStore;
