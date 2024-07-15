import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Collapsible from '../components/Collapsible'

const Faq = () => {
  return (
    <>
      <Navbar />
      <main className='container__faq'>
        <h1>Faq</h1>
        <Collapsible
          false
          title="Collapsible Title"
        >
          Consectetur adipiscing elit pellentesque habitant morbi tristique.
          Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
          pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
          et netus et. Elementum integer enim neque volutpat. Faucibus in ornare
          quam viverra orci sagittis. Amet volutpat consequat mauris nunc congue
          nisi vitae suscipit. Dui accumsan sit amet nulla. Proin sagittis nisl
          rhoncus mattis. Enim nulla aliquet porttitor lacus. Arcu odio ut sem
          nulla pharetra diam sit amet. Gravida rutrum quisque non tellus orci ac
          auctor augue
        </Collapsible>
        <Collapsible
          false
          title="Pregunta Boluda n° 2"
        >
          Tomá por mirón
        </Collapsible>
        <Collapsible
          false
          title="Pregunta Boluda n° 3"
        >
          Tu novia puta con mi pingo se ahoga y vos no decis nada porque sos un toga
        </Collapsible>
      </main>
      <Footer />
    </>
  )
}

export default Faq
