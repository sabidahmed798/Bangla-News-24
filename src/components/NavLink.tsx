import Link from "next/link";
import React from "react";

interface Navs {
  slug: string;
  title: string;
  topicId: null | string;
  url: string;
  scrapable: boolean;
}

const NavLink = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();

  const navs: Navs[] = data.data;
  const filteredNavs = navs.filter((n) => n.scrapable);
  return (
    <div className="flex gap-5 justify-center mt-5 ">
      <Link href={"/"}>হোম</Link>
      {filteredNavs.map((n, i) => (
        <Link key={i} href={n.slug}>
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLink;
