import Layout from '../../components/Layout';
import Link from 'next/link'


const NewsLink = props => (
    <li>
        <Link href={`/article/detail?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

const Article = () => {
    return (
        <Layout>
            <h1>News Page</h1>

            <ul>
                <NewsLink title="How To Create App" />
                <NewsLink title="Next JS Tutorial" />
                <NewsLink title="This is cool" />
            </ul>
        </Layout>
    )
}

export default Article;