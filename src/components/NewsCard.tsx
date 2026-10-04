import Image from "next/image";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}
const NewsCard = ({ news }: { news: News }) => {
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <Image
          height={600}
          width={400}
          src={news.imageUrl}
          alt={news.imageUrl}
        />
      </figure>
      <div className="card-body">
        <p className="text-red-600 font-semibold">{news.category}</p>
        <h2 className="card-title">{news.title}</h2>
        <p>{news.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
