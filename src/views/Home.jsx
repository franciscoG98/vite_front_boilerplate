import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="home__container">
        <h1 className="main__title">
          Site
          <span className="main__title--color">Title</span>
        </h1>
        <h3>Amazing short description make client go to call to action.</h3>
        <button className="btn">Call To Action</button>
      </main>
      <Footer />
    </>
  )
}

export default Home
