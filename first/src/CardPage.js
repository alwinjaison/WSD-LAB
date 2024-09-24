function CardPage({ title, handler, image, description }) {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={image}></img>
          </figure>
        </div>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handler}</p>
        </div>
        <p className="content">{description}</p>
      </div>
    </div>
  );
}
export default CardPage;
