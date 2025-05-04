import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {
  const [CategoryNews, setCategoryNews] = useState([]);
  const { id } = useParams();
  // console.log(id)
  const data = useLoaderData();
  // console.log(id,data);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    }
    else if (id == "1") {
      const filteredNews = data.filter(news => news.others.is_today_pick == true);
      setCategoryNews(filteredNews)
    }
    else {
      const filteredNews = data.filter((news) => news.category_id == id)
      setCategoryNews(filteredNews);
    }

  }, [data, id])

  return (
    <div className='text-2xl'>Total news found - <span className='text-orange-600 font-bold'> {CategoryNews.length}</span>
      <div>
          {
            CategoryNews.map((news) => <NewsCard key={news.id} news={news}></NewsCard>)
          }
      </div>
    </div>
  )
};

export default CategoryNews;