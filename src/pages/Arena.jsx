import { usePokemonStore } from '../features/pokemon/model/usePokemonStore';
import { Select, Card, Button } from 'antd';
import { useState } from 'react';

const { Option } = Select;

const Arena = () => {
    const { collection } = usePokemonStore();
    const [p1, setP1] = useState(null);
    const [p2, setP2] = useState(null);
    const [winner, setWinner] = useState(null);

    const score = (p) => p.stats.reduce((sum, s) => sum + s.base_stat, 0);

    const handleBattle = () => {
        if (!p1 || !p2) return;
        const s1 = score(p1);
        const s2 = score(p2);
        if (s1 === s2) {
            setWinner('Ничья');
        } else {
            setWinner(s1 > s2 ? p1.name : p2.name);
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Боевая арена</h2>

            <div style={{ marginBottom: 20 }}>
                <Select
                    placeholder="Первый покемон"
                    onChange={(name) => {
                        setP1(collection.find((p) => p.name === name));
                        setWinner(null);
                    }}
                    style={{ width: 200, marginRight: 16 }}
                >
                    {collection.map((p) => (
                        <Option key={p.name} value={p.name}>
                            {p.name}
                        </Option>
                    ))}
                </Select>

                <Select
                    placeholder="Второй покемон"
                    onChange={(name) => {
                        setP2(collection.find((p) => p.name === name));
                        setWinner(null);
                    }}
                    style={{ width: 200 }}
                >
                    {collection.map((p) => (
                        <Option key={p.name} value={p.name}>
                            {p.name}
                        </Option>
                    ))}
                </Select>
            </div>

            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                {p1 && (
                    <Card title={p1.name}>
                        <img src={p1.sprites.front_default} alt={p1.name} />
                        {p1.stats.map((s) => (
                            <p key={s.stat.name}>
                                {s.stat.name}: {s.base_stat}
                            </p>
                        ))}
                    </Card>
                )}

                {p2 && (
                    <Card title={p2.name}>
                        <img src={p2.sprites.front_default} alt={p2.name} />
                        {p2.stats.map((s) => (
                            <p key={s.stat.name}>
                                {s.stat.name}: {s.base_stat}
                            </p>
                        ))}
                    </Card>
                )}
            </div>

            <div style={{ marginTop: 30 }}>
                <Button
                    type="primary"
                    disabled={!p1 || !p2}
                    onClick={handleBattle}
                    style={{ fontSize: 16, padding: '0 24px' }}
                >
                     В бой!
                </Button>
            </div>

            {winner && (
                <h2 style={{ marginTop: 24 }}>
                     Победителем стал: <span style={{ color: 'green' }}>{winner.toUpperCase()}</span>
                </h2>
            )}
        </div>
    );
};

export default Arena;
