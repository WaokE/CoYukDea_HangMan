import { create } from "zustand";

const useStore = create((set) => ({
    word: "None",
    mistakeCount: 0,
    mistakeOccur() {
        set((state) => ({ mistakeCount: state.mistakeCount + 1 }));
    },
    mistakeReset() {
        set((state) => ({ mistakeCount: 0 }));
    },

    isGameOver: false,
    gameOver() {
        set((state) => ({ isGameOver: true }));
    },
}));

export default useStore;
