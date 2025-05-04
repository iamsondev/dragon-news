import React from "react";
import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    published_date,
    image_url,
    details,
    rating,
    total_view,
  } = news;

  // Format the date using native JavaScript
  const formattedDate = new Date(news.author.published_date).toLocaleDateString("en-CA");

  return (
    <div className=" rounded-lg shadow-md p-4 mb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-xl font-bold mb-3">{title}</h1>

      {/* Image */}
      <img
        src={image_url}
        alt={title}
        className="w-full h-56 object-cover rounded-lg mb-4"
      />

      {/* Details */}
      <p className="text-gray-700 mb-4">
        {details.length > 250
          ? details.slice(0, 250) + "... "
          : details}
        <span className="text-blue-600 font-medium cursor-pointer">
          Read More
        </span>
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center pt-2 border-t">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "text-orange-400" : "text-gray-300"}
            />
          ))}
          <span className="text-gray-700 ml-2">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center text-gray-500 gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
