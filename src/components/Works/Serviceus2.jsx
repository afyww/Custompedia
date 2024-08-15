import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

const MediaCard = ({ src, title, projectId }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)]">
    <div className="relative pb-[56.25%]">
      {" "}

      <Link to={`/project/${projectId}`}>
        <img
          src={src}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </Link>
    </div>
  </div>
);

MediaCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  projectId: PropTypes.number.isRequired,
};

const ServicesSection = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://custom.beilcoff.shop/api/kategoris"
        );
        setCategories(response.data);
        setSelectedCategory(response.data[0].id);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch categories");
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const hideScrollbarStyle = {
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    WebkitOverflowScrolling: "touch",
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const selectedCategoryProjects =
    categories.find((cat) => cat.id === selectedCategory)?.projects || [];

  return (
    <div className="bg-gray-100 grid grid-cols-1 h-screen p-4">
      <div className="space-y-4">
        <div className="flex space-x-2">
          <div>
            <h1 className="text-xl text-left xl:text-2xl 2xl:text-7xl text-black font-bold">
              Services
            </h1>
          </div>
          <div className="pt-3.5 xl:pt-12">
            <div className="bg-yellow-400 p-1 xl:p-2 rounded-xl px-8 xl:px-16"></div>
          </div>
        </div>
        <div className="my-auto space-y-2">
          <div className="flex " style={hideScrollbarStyle}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`p-2 text-xs xl:text-base rounded-full ${
                  category.id === selectedCategory
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.kategori}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {selectedCategoryProjects.map((project) => (
              <MediaCard
                key={project.id}
                src={`https://custom.beilcoff.shop/storage/${project.img1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
