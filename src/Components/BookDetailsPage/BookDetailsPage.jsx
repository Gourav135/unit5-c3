export const BookDetailsPage = ({ id, imageUrl, title, price ,author,description,section,reviews,isbnNumber}) => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route

  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{title}</h2>
        <img className="image" src={imageUrl} alt="#" />
        <div className="author">{author}</div>
        <div className="description">{description}</div>
        <div className="price">{price}</div>
        <div className="section">{section}</div>
        <div className="isbnNumber">{isbnNumber}</div>
        <ul className="reviews">
          {reviews}
        </ul>
      </div>
    </>
  );
};
