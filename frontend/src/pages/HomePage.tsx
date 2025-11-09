import { Layout as AntLayout } from 'antd';
import { Header as AntHeader, Content } from 'antd/es/layout/layout';
import Header from '../components/header';

const HomePage = () => {
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <AntHeader style={{ background: 'transparent' }}>
        <Header />
      </AntHeader>
      <Content>{/* content goes here */}</Content>
    </AntLayout>
  );
};

export default HomePage;
