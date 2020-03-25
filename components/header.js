import Link from 'next/link';

const Style = {
    display: 'inline-block',
    marginRight: 15,
    padding: 0,
}

const Header = () => {
    return (
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
        </ul>
    )
};

export default Header;