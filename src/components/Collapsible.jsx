import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Collapsible = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleCollapsibleOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="collapsible">
      <div className="header__collapsible">
        <h4 className="title__collapsible">{title}</h4>
        <button type="button" className='collapsible__btn' onClick={handleCollapsibleOpening}>
          {!isOpen ? (
            <FaChevronDown size={30} />
          ) : (
            <FaChevronUp size={30} />
          )}
        </button>
      </div>

      <div className="collapsible__children">
        <div>{isOpen && <div className="p-3">{children}</div>}</div>
      </div>
    </div>
  )
}

export default Collapsible
