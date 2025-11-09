import { Layout, Typography } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const { Text, Title } = Typography;

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: 'transparent' }}>
        <Title style={{ textAlign: 'center' }}>Oops!</Title>
      </Header>
      <Content
        style={{
          minHeight: '100%',
          textAlign: 'center',
          alignContent: 'center',
        }}
      >
        <Text style={{fontSize: '2rem'}}>
          {isRouteErrorResponse(error)
            ? 'This page does not exisit.'
            : 'An unexpected error occurred.'}
        </Text>
      </Content>
    </Layout>
  );
};

export default ErrorPage;
