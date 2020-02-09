import Link from 'next/link';

const Style = {
    display: 'inline-block',
    marginRight: 15
}

const Header = () => {
    return (
        <div>
            <ul>
                <li style={Style}>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li style={Style}>
                    <Link href="/about"><a>About</a></Link>
                </li>
            </ul>
        </div>
    )
};

export default Header;