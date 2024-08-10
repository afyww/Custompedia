import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MediaCard = ({ src, title, projectId }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)] mb-4">
    <div className="relative pb-[56.25%]"> {/* 16:9 aspect ratio */}
      <Link to={`/project/${projectId}`}>
        <img src={src} alt={title} className="absolute top-0 left-0 w-full h-full object-cover" />
      </Link>
    </div>
    <div className="p-4">
      <h3 className="font-bold text-lg">{title}</h3>
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
        const response = await axios.get('https://custom.beilcoff.shop/api/kategoris');
        setCategories(response.data);
        setSelectedCategory(response.data[0].id);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch categories');
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const hideScrollbarStyle = {
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    WebkitOverflowScrolling: 'touch',
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const selectedCategoryProjects = categories.find(cat => cat.id === selectedCategory)?.projects || [];

  return (
    <div className="bg-gray-100 grid grid-cols-1 h-screen">
      <div className="my-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
          Services <span className="inline-block w-8 sm:w-12 h-1 bg-yellow-400 ml-2"></span>
        </h2>
        
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap" style={hideScrollbarStyle}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base rounded-full ${
                category.id === selectedCategory ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
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
              title={project.project}
              projectId={project.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
