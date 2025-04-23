import { create } from "zustand";
import  toast, { Toaster }  from "react-hot-toast";
import { axiosInstance } from "../lib/axios.js";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      toast.error("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({isSigningUp:true});
    try {
        const res = await axiosInstance.post("/auth/signup",data);
        set({ authUser: res.data });
        console.log("Signup payload:", data);
        toast.success("Account created successfully");
    } catch (error) {
        console.error("Signup error:", error.response?.data || error.message);
        toast.error(error.response.data.message || "Something went wrong. Please try again.");
    } finally {
      set({ isSigningUp: false });
    }
  },
}));
