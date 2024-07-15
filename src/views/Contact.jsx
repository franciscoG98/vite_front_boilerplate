import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className='container__contact'>
        <h1>Contact Us</h1>
        <Form />
      </main>
      <Footer />
    </>
  )
}

export default Contact
