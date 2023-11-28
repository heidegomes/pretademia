import Head from 'next/head';
import Table from '../components/table';
import Filtro from '../components/filtro';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head></Head>
      <Filtro></Filtro>
      <Table></Table>
    </Layout>
  );
}


