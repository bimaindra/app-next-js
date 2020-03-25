import { useRouter } from 'next/router';
import Layout from '../../components/Layout';


const News = () => {

    const router = useRouter();

    return (
        <Layout>
            <h1>{router.query.title}</h1>
            <p>This is the Article post content. {router.query.title}</p>
        </Layout>
    )
};

export default News;