import { create } from "zustand";

const useStore = create((set) => ({
    mistakeCount: 0,
    mistakeOccur() {
        set((state) => ({ mistakeCount: state.mistakeCount + 1 }));
    },
}));

export default useStore;
