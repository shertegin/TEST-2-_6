import { Card, Button } from 'antd';
import { usePokemonStore } from '../model/usePokemonStore';

const PokemonCard = ({ pokemon }) => {
    const { catchPokemon, collection } = usePokemonStore();
    const isCaught = collection.some((p) => p.name === pokemon.name);

    return (
        <Card
            title={pokemon.name.toUpperCase()}
            cover={<img src={pokemon.sprites.front_default} alt={pokemon.name} />}
            style={{ width: 200, margin: 8 }}
        >
            {pokemon.stats.map((s) => (
                <p key={s.stat.name}>
                    {s.stat.name.toUpperCase()}: {s.base_stat}
                </p>
            ))}
            <Button type="primary" onClick={() => catchPokemon(pokemon)} disabled={isCaught}>
                {isCaught ? 'Пойман' : 'Поймать'}
            </Button>
        </Card>
    );
};

export default PokemonCard;
