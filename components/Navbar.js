import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  return (
    <nav>
      <Link href="/">
        <a>
          <h1>Brooke Winka</h1>
        </a>
      </Link>
      <ul>
        <li>
          <Link href="/projects">
            <a className={router.pathname === '/projects' ? 'active' : '' }>Projects</a>
          </Link>
        </li>
        <li style={{marginRight: '10px', marginLeft: '10px', fontWeight: '600'}}>/</li>
        <li>
          <Link href="/info">
            <a className={router.pathname === '/info' ? 'active' : '' }>Info</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar