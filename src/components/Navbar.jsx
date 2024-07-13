import { Link } from 'react-router-dom'
import react_log from '../assets/logos/react.svg'

const nav_items = [
  {
    slug: 'About Us',
    path: 'about-us'
  },
  {
    slug: 'Products',
    path: 'products'
  },
  {
    slug: 'Our Clients',
    path: 'our-clients'
  },
  {
    slug: 'FAQ',
    path: 'faq'
  },
  {
    slug: 'Contact',
    path: 'contact'
  },
]

const Navbar = () => {
  return (
    <div className='navbar__container'>
      <Link to='/'>
        <img
          src={react_log}
          alt="react logo link to home"
        />
      </Link>
      <nav className='navbar'>
        {
          nav_items.map((i, idx) => (
            <Link
              key={idx}
              to={`/${i.path}`}
              className='nav__item'
            >{i.slug}</Link>
          ))
        }
      </nav>
    </div>
  )
}

export default Navbar
