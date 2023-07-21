import { create } from 'zustand';

interface PlayerStore {
  ids: string[];
  activeId?: string;
  setId: (id: string) => void;  
  
  // NOTE :  This means that setId which accepts the id which is type of string and setId will retur n void 
  
  setIds: (ids: string[]) => void;
  reset: () => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  activeId: undefined,
  setId: (id: string) => set({ activeId: id }),
  setIds: (ids: string[]) => set({ ids:ids }),
  reset: () => set({ ids: [], activeId: undefined })
}));


export default usePlayer;