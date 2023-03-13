import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div>
        <div className='toNav'>
          <Image src={'/next.svg'} alt="logo" width={50} height={50} />
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/about-us">About us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <h1>Lorem ipsum dolor sit.</h1>
      </div>
    </header>
  )
}

export default Header;