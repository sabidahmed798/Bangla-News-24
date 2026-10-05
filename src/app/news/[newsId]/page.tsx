import Image from "next/image";
import React from "react";
const NewsDetails = async ({ params }: { params: { newsId: string } }) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );

  const data = await res.json();

  const news = data.data;
  if (!news) {
    return <div> news not found</div>;
  }
  console.log("details news", news);

  return (
    <div>
      <div className="card bg-base-100 w-full shadow-sm h-">
        <div className="card-body">
          <h2 className="card-title mx-34 text-5xl mt-5">{news.title}</h2>
        </div>
        <figure>
          <Image
            className="w-300 h-150"
            height={500}
            width={800}
            src={news.imageUrl}
            alt={news.imageUrl}
          />

          {/* <figure>
          <Image
            className="w-200"
            height={600}
            width={400}
            src={firstNews.imageUrl}
            alt={firstNews.imageUrl}
          /> */}
        </figure>
        <p className=" mx-39 text-2xl mt-5">{news.text}</p>

        <p>{news.tags}</p>
      </div>
    </div>
  );
};

export default NewsDetails;
