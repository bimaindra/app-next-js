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
                <title>Simple Apps Using NextJs | by Bima Indra</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="I'am Bima Indra Mulya. Indonesian who loves sport, travel, and tech. Liked cheesy jokes sometimes, and been around 4 years working as a Front End Engineer." />
                <meta name="keywords" content="Front End Engineer, Front End Developer, Software Engineer, Indonesia, Jakarta" />
                <meta property="og:title" content="Bima Indra Mulya | Front End Engineer" />
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
