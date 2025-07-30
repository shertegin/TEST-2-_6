import axios from 'axios';

export const fetchPokemons = async ({ pageParam = 0 }) => {
    const offset = pageParam * 20;
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
    const results = await Promise.all(
        res.data.results.map((p) => axios.get(p.url).then((r) => r.data))
    );
    return { results, nextPage: pageParam + 1, hasMore: !!res.data.next };
};
