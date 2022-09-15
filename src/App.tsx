import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Header from "./components/Header";
import FAQ from './components/FAQ';
const { Footer } = Layout;




const App = (): JSX.Element => (
  <Layout style={{ height: '100%' }}>
    <Header />
    <FAQ />
    <Footer style={{ textAlign: 'center' }}> ©2022 Created by Ahmed Waqas</Footer>
  </Layout>
);

export default App;