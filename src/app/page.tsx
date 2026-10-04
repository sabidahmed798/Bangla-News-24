import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import NewsCard from "@/components/NewsCard";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;

  const otherSection = sections.slice(1);
  // console.log("ooooooo", otherSection);

  return (
    <div>
      <Marquee />
      <div className="grid grid-cols-3 container mx-auto">
        {/* news section */}
        <div className=" col-span-2 ">
          <MainNews news={mainNews} />
          <div className="grid gap-5 mt-5">
            {otherSection.map((os) => (
              <div
                className="border-b-2 border-red-700 pb-1"
                key={os.curationId}
              >
                <h1 className="font-bold">{os.title}</h1>
                {os.articles.map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* most read section */}
        <div className="bg-green-500 col-span-1 "></div>
      </div>
    </div>
  );
}
