import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useHistoryStore = create(
  persist(
    (set, get) => ({
      historyList: [],
      isLoading: true,
      setIsLoading: (loading) => set({ isLoading: loading }),
      setToHistoryList: (item) => set(state => ({
        historyList: [item, ...state.historyList].slice(0, 10)
      })),
      clearHistoryList: () => set({ historyList: [] }),
    }),
    {
      name: 'history-storage', 
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state.setIsLoading(false);
      },
    },
  ),
)