import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <h3>Follow US!</h3>
      <section className="section__social">
        <FaWhatsapp size={30} />
        <FaInstagram size={30} />
        <FaXTwitter size={30} />
        <FaYoutube size={30} />
        <FaTiktok size={30} />
      </section>
      <p className='footer__copyright'>
        Copyright © Someone {currentYear}. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
