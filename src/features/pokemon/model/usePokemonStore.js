import { create } from 'zustand';

export const usePokemonStore = create((set) => ({
    collection: [],
    catchPokemon: (pokemon) => set((state) => {
        if (!state.collection.find((p) => p.name === pokemon.name)) {
            return { collection: [...state.collection, pokemon] };
        }
        return state;
    })
}));
