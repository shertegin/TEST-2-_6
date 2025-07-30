import { usePokemonStore } from '../features/pokemon/model/usePokemonStore';
import { Select, Card } from 'antd';
import { useState } from 'react';

const { Option } = Select;

const Arena = () => {
    const { collection } = usePokemonStore();
    const [p1, setP1] = useState(null);
    const [p2, setP2] = useState(null);

    const score = (p) => p.stats.reduce((sum, s) => sum + s.base_stat, 0);
    const winner = p1 && p2 ? (score(p1) > score(p2) ? p1.name : score(p1) < score(p2) ? p2.name : 'Ничья') : null;

    return (
        <div style={{ padding: 20 }}>
            <h2>Боевая арена</h2>
            <Select placeholder="Первый покемон" onChange={(n) => setP1(collection.find(p => p.name === n))} style={{ width: 200, marginRight: 16 }}>
                {collection.map((p) => <Option key={p.name} value={p.name}>{p.name}</Option>)}
            </Select>
            <Select placeholder="Второй покемон" onChange={(n) => setP2(collection.find(p => p.name === n))} style={{ width: 200 }}>
                {collection.map((p) => <Option key={p.name} value={p.name}>{p.name}</Option>)}
            </Select>

            <div style={{ display: 'flex', marginTop: 32, gap: 32 }}>
                {p1 && <Card title={p1.name}><img src={p1.sprites.front_default} alt="" /><br />{p1.stats.map(s => <p key={s.stat.name}>{s.stat.name}: {s.base_stat}</p>)}</Card>}
                {p2 && <Card title={p2.name}><img src={p2.sprites.front_default} alt="" /><br />{p2.stats.map(s => <p key={s.stat.name}>{s.stat.name}: {s.base_stat}</p>)}</Card>}
            </div>

            {winner && <h3 style={{ marginTop: 24 }}> Победитель: {winner}</h3>}
        </div>
    );
};

export default Arena;
