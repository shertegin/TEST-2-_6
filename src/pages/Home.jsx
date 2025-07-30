import PokemonCard from '../features/pokemon/ui/PokemonCard';
import { fetchPokemons } from '../features/pokemon/api/pokemonApi';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

const Home = () => {
    const ref = useRef();
    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ['pokemons'],
        queryFn: fetchPokemons,
        getNextPageParam: (lastPage) => (lastPage.hasMore ? lastPage.nextPage : undefined),
    });

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting && hasNextPage) fetchNextPage();
        });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [hasNextPage, fetchNextPage]);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {data?.pages.map((page) =>
                page.results.map((p) => <PokemonCard key={p.id} pokemon={p} />)
            )}
            <div ref={ref} style={{ height: 80 }} />
        </div>
    );
};

export default Home;
