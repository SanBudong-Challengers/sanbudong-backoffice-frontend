import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useStore = create(
	devtools(
		persist(
			(set, get) => ({
				count: 0,
				increaseCount: () => set({ count: get().count + 1 }),
			}),
			{
				name: 'data-storage',
			},
		),
	),
);

export default useStore;
