const NewsCard = ({ news }) => {
  console.log(news);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        {/* <Image
          height={600}
          width={400}
          src={firstNews.imageUrl}
          alt={firstNews.imageUrl}
        /> */}
      </figure>
      <div className="card-body">
        {/* <p className="text-red-600 font-semibold">{firstNews.category}</p>
        <h2 className="card-title">{firstNews.title}</h2>
        <p>{firstNews.description}</p> */}
      </div>
    </div>
  );
};

export default NewsCard;
