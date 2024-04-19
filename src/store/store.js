import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import {showSuccess, showWarning} from "@/helpers/utils/toasts";

export const useHistoryStore = create(
  persist(
    (set, get) => ({
      historyList: [],
      isLoading: true,
      setIsLoading: (loading) => set({ isLoading: loading }),
      setToHistoryList: (item) => {
          set(state => ({
            historyList: [item, ...state.historyList].slice(0, 10)
          }));
          showSuccess('Item added to history!');
      },
      clearHistoryList: () => {
          set({ historyList: [] });
          showWarning('History was removed')
      }
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