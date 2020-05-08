import Head from 'next/head';
import Link from 'next/link';

const Style = {
    display: 'inline-block',
    marginRight: 15,
    padding: 0,
}

const Header = () => {
    return (
        <div>
            <Head>
                <title>Nex Js Test | by Bima Indra</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="This is an example of a meta description. This will often show up in search results."></meta>
            </Head>
            <ul style={Style}>
                <li style={Style}>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li style={Style}>
                    <Link href="/about"><a>About</a></Link>
                </li>
                <li style={Style}>
                    <Link href="/article"><a>News</a></Link>
                </li>
                <li style={Style}>
                    <Link href="/show"><a>TV Show</a></Link>
                </li>
                <li style={Style}>
                    <Link href="/kita-bisa"><a>KitaBisa</a></Link>
                </li>
            </ul>
        </div>
    )
};

export default Header;
