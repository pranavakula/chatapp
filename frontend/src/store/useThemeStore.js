import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",
  setTheme: (theme) => {
    // Update localStorage
    localStorage.setItem("chat-theme", theme);
    
    // Apply theme to HTML element
    document.documentElement.setAttribute("data-theme", theme);
    
    // Force a re-render of the entire app
    set({ theme });
    
    // Additional check to ensure theme is applied
    setTimeout(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, 0);
  },
}));