import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headlines {
  id: string;
  title: string;
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headlines: Headlines[] = data.data;
  console.log(headlines);
  console.log(data);
  return (
    <div className="bg-red-600 text-white">
      <div className="flex container mx-auto">
        <div className=" py-1 px-5 font-bold hover: bg-red-700">সর্বশেষ </div>

        <MarqueeText className="py-1" direction="right" duration={15}>
          {headlines.map((h) => (
            <span key={h.id}>
              <span>{h.title}</span>
              <span className="mx-5">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
