import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

const MediaCard = ({ src, projectId }) => (
  <div className="w-full" >
    <Link to={`/project/${projectId}`}>
      <img
        src={`https://custom.beilcoff.shop/storage/${src}`}
        alt="Project"
        className="w-full h-full object-cover rounded-xl"
      />
    </Link>
  </div>
);

MediaCard.propTypes = {
  src: PropTypes.string.isRequired,
  projectId: PropTypes.number.isRequired,
};

const ServicesSection = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://custom.beilcoff.shop/api/kategoris"
        );
        setCategories([{ id: "all", kategori: "All" }, ...response.data]);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch categories");
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const allProjects = categories.flatMap((category) =>
    category.id === "all" ? [] : category.projects
  );

  const displayedProjects =
    selectedCategory === "All"
      ? allProjects
      : categories.find((cat) => cat.kategori === selectedCategory)?.projects ||
        [];

  return (
    <div className="bg-gray-100 grid grid-cols-1 h-screen p-4">
      <div className="space-y-4 my-auto">
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
        <div className="flex overflow-x-auto mb-4 pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm whitespace-nowrap mr-2 rounded-full shadow-md ${
                category.kategori === selectedCategory
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black "
              }`}
              onClick={() => setSelectedCategory(category.kategori)}
            >
              {category.kategori}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {displayedProjects.map((project) => (
            <MediaCard
              key={project.id}
              src={project.img1}
              projectId={project.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
