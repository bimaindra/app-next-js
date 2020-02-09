import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';

const Content = () => {

    const router = useRouter();

    return (
        <div>
            <h1>{router.query.id}</h1>
            <p>This is the blog post content.</p>
        </div>
    )
};

const Article = () => {
    return (
        <Layout>
            <Content />
        </Layout>
    )
};

export default Article;