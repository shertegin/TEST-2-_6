import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
const { Header, Footer } = Layout;

const LayoutWrapper = ({ children }) => {
    const loc = useLocation().pathname;
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header>
                <Menu theme="dark" mode="horizontal" selectedKeys={[loc]}>
                    <Menu.Item key="/">
                        <Link to="/">Покемоны</Link>
                    </Menu.Item>
                    <Menu.Item key="/arena">
                        <Link to="/arena">Арена</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            {children}
            <Footer style={{ textAlign: 'center' }}>Pokemon Arena ©2025</Footer>
        </Layout>
    );
};

export default LayoutWrapper;
