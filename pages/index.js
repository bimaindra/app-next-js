import Layout from '../components/myLayout';
import Link from 'next/link';

const ArticleLink = props => (
    <li>
        <Link href="/article/[id]" as={`/article/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

const Index = () => {
	return (
		<div>
			<Layout>
                <h1>Home</h1>
                <p>This is in home page</p>
                <ul>
                    <ArticleLink id="Article-1" />
                    <ArticleLink id="Article-2" />
                    <ArticleLink id="Article-3" />
                </ul>
            </Layout>
		</div>
	)
};

export default Index;