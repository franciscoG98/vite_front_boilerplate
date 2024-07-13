import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

// photos (from unsplash)
import ebook from '../assets/images/ebook.jpg'
import hard_drive from '../assets/images/hard_drive.jpg'
import keyboard from '../assets/images/keyboard.jpg'
import laptop from '../assets/images/laptop.jpg'
import mechanical_keyboard from '../assets/images/mechanical_keyboard.jpg'
import monitor from '../assets/images/monitor.jpg'
import mouse from '../assets/images/mouse.jpg'
import raspbeberry_pi from '../assets/images/raspberry_pi.jpg'
import ProductCard from "../components/ProductCard"

const products = [
  {
    id: 1,
    prod_name: 'Kindle',
    prod_image: ebook,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed feugiat metus.'
  },
  {
    id: 2,
    prod_name: 'Hard Drive',
    prod_image: hard_drive,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed feugiat metus.'
  },
  {
    id: 3,
    prod_name: 'Keyboard',
    prod_image: keyboard,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed feugiat metus.'
  },
  {
    id: 4,
    prod_name: 'Laptop',
    prod_image: laptop,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed feugiat metus.'
  },
  {
    id: 5,
    prod_name: 'Mechanical Keyboard',
    prod_image: mechanical_keyboard,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed feugiat metus.'
  },
  {
    id: 6,
    prod_name: 'Monitor',
    prod_image: monitor,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed feugiat metus.'
  },
  {
    id: 7,
    prod_name: 'Mouse',
    prod_image: mouse,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed feugiat metus.'
  },
  {
    id: 8,
    prod_name: 'Raspbeberry Pi',
    prod_image: raspbeberry_pi,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed feugiat metus.'
  },
]

const Products = () => {
  return (
    <>
      <Navbar />
      <main className="container--products">
        <h1>Products</h1>
        <div className="products--grid">
          {
            products.map(prod => (
              <ProductCard
                key={prod.id}
                name={prod.prod_name}
                img={prod.prod_image}
                description={prod.description}
              />
            ))
          }
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Products
