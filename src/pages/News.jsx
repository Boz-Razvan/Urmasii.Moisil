import React from "react";
import { Footer, BgNews, NewsCard } from "../components";
import "./styles/News.css";

const newsData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://picsum.photos/600/400?random=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget commodo nulla. Nullam sed justo eget turpis hendrerit mollis in vitae sapien. Sed euismod justo vel tellus suscipit congue. Integer bibendum nisl quis tellus scelerisque bibendum. Mauris convallis, massa eget sagittis pulvinar, sem sapien aliquet nisi, a bibendum sapien odio sit amet ante.",
  },
  {
    id: 2,
    title: "Mauris sollicitudin lacus in enim bibendum",
    image: "https://picsum.photos/600/400?random=2",
    description:
      "Mauris sollicitudin lacus in enim bibendum, in ullamcorper elit aliquam. Integer consequat neque sed imperdiet auctor. Suspendisse ultrices diam enim, a tempor velit finibus at. Sed vel eros et lectus facilisis vestibulum. Morbi convallis efficitur dui, a auctor mi tempus ac. Aliquam vitae est nec lectus euismod ultricies. Donec pretium, leo a euismod congue, libero mi posuere lacus, vel consectetur velit metus ac velit.",
  },
  {
    id: 3,
    title: "Vivamus in odio nec quam tristique mattis id id velit",
    image: "https://picsum.photos/600/400?random=3",
    description:
      "Vivamus in odio nec quam tristique mattis id id velit. Nunc vehicula quam massa, in eleifend ex hendrerit at. Maecenas lobortis lobortis dui, ut vulputate sapien suscipit vel. Suspendisse potenti. Suspendisse potenti. In hac habitasse platea dictumst. Proin vulputate eros ac magna dapibus, in laoreet nunc rhoncus. Integer non imperdiet nulla, sit amet consectetur velit.",
  },
  {
    id: 4,
    title: "Integer sollicitudin velit id dolor interdum",
    image: "https://picsum.photos/600/400?random=4",
    description:
      "Integer sollicitudin velit id dolor interdum, eget vestibulum velit vulputate. Duis fringilla turpis ac enim dictum auctor. Ut aliquam, nisl vel pharetra sodales, odio leo posuere orci, nec efficitur ex libero in urna. Donec convallis vestibulum orci, vel pulvinar nulla bibendum sit amet. In vel orci mauris. Praesent sagittis, enim at tristique lobortis, neque tortor vestibulum orci, vel lobortis lorem dui non orci.",
  },
];

const News = () => {
  return (
    <>
      <BgNews />
      <div className="news-content">
        <h2 className="news-heading">Anunțuri</h2>
        <div className="news-card-container">
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
      <Footer />
     </> 
  );
};

export default News;
