import Layout from '../../components/Layout';
import Link from 'next/link';
import Fetch from '../../components/ServiceFetch';

const TelevisionShow = props => (
    <Layout>
        <h1>Try Fetch Data from TV Magz</h1>
        <ul>
            {props.data.map(i => (
                <li key={i.id}>
                    <Link href={`/show/detail?title=${i.name}`}>
                        <a>{i.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

let get = Fetch(TelevisionShow, 'https://api.tvmaze.com/shows/2993/episodes', 'mapping');

export default TelevisionShow;