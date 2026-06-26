import { create } from 'zustand';
import { fetchNeoFeed } from '../services/cneosService';
import toast from 'react-hot-toast';

const useStore = create((set) => ({
  theme: 'light',
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    return { theme: newTheme };
  }),
  
  neoData: [],
  isLoading: false,
  error: null,
  hasFetched: false,
  
  fetchData: async () => {
    set({ isLoading: true, error: null });
    try {
      const data = await fetchNeoFeed();
      set({ neoData: data, isLoading: false, hasFetched: true });
      toast.success("Data NEO terbaru berhasil diperbarui dari server NASA");
    } catch (err) {
      set({ error: err.message, isLoading: false, hasFetched: true });
      toast.error("Gagal mengambil data dari NASA CNEOS");
    }
  }
}));

export default useStore;
