import create from 'zustand';

const initialState = {
  user: null,
  isLoading: false,

  menuPart: 1,
  menu: [],
  diaryPart: 1,
  diary: [],
  columnPart: 1,
  column: [],

  isMenuPopup: false
};
export const appStore = create((set) => ({
  ...initialState,
  setUser: (value) => set((state) => ({ user: value })),
  setIsLoading: (value) => set((state) => ({ isLoading: value })),

  setMenu: (value) => set((state) => ({ menu: [...state.menu, ...value] })),
  resetMenu: (value) => set((state) => ({ menu: [] })),
  setMenuPart: (value) => set((state) => ({ menuPart: value })),

  setDiary: (value) => set((state) => ({ diary: [...state.diary, ...value] })),
  resetDiary: (value) => set((state) => ({ diary: [] })),
  setDiaryPart: (value) => set((state) => ({ diaryPart: value })),

  setColumn: (value) => set((state) => ({ column: [...state.column, ...value] })),
  resetColumn: (value) => set((state) => ({ column: [] })),
  setColumnPart: (value) => set((state) => ({ columnPart: value })),

  setIsMenuPopup: (value) => set((state) => ({ isMenuPopup: value })),
  resetAppStore: () => set(initialState),
}));
