import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Arena from '../pages/Arena';
import { Layout, Menu } from 'antd';
import LayoutWrapper from '../components/Layout';

function App() {
    return (
        <LayoutWrapper>
            <Layout.Content style={{ padding: 24 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/arena" element={<Arena />} />
                </Routes>
            </Layout.Content>
        </LayoutWrapper>
    );
}

export default App;
