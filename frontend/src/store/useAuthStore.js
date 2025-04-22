import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,

  isCheckingAuth: true, // ✅ Corrected the key to camelCase with capital C

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("http://localhost:5001/api/auth/check");

      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false }); // ✅ Must match the key above
    }
  },
}));
