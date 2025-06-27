
import { create } from 'zustand';

interface ThemeState {
  isDark: boolean;
  language: 'en' | 'ur';
  toggleTheme: () => void;
  setLanguage: (lang: 'en' | 'ur') => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDark: false,
  language: 'en',
  toggleTheme: () => set((state) => {
    const newIsDark = !state.isDark;
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    return { isDark: newIsDark };
  }),
  setLanguage: (lang) => set({ language: lang }),
}));
