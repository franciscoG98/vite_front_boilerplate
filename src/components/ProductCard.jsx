const ProductCard = ({ name, img, description}) => {

  return (
    <div className="product__card">
      <img
        src={img}
        alt={name}
        className="card__image"
      />
      <h3 className="title__card">{name}</h3>
      <p className="text_card">{description}</p>
      <button className="btn card__btn">Action</button>
    </div>
  )
}

export default ProductCard
