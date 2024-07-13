import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main className="container--about">
        <h1>About Us</h1>

        <section className="section--about">
          <div className="section__children">
            <h2>Our Begining</h2>
            <p>
              Super sad story, we worked a lot, meritocracy exists. We deserve all that we have because we worked for this. Luck, contacts from priviliged enviroment has nothing to do with our success.
              bla bla bla bla bla
              bla bla bla bla bla
              bla bla bla bla bla
              bla bla bla bla bla
            </p>
          </div>

          <div className="section__children">
            <h2>Services / Achievements</h2>
            <ul>
              <li>Achievement 1</li>
              <li>Achievement 2</li>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
              <li>Service 4</li>
            </ul>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

export default AboutUs
