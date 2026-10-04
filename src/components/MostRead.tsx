const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const news = data.data;
  console.log("most read", news);
  return (
    <div className="card p-2 bg-base-100 border border-gray-300">
      <h1 className="font-bold text-red-700">সর্বাধিক পঠিত</h1>
    </div>
  );
};

export default MostRead;
