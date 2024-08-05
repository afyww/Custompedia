import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { getProject } from "../../api"; // Make sure this is the correct path to your API function

const LatestWork = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectData = await getProject(currentPage);
        setProjects(projectData.data);
        setTotalPages(projectData.last_page);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mx-auto p-4 grid  grid-cols-1 h-screen">
      <div className="space-y-4 xl:space-y-20 my-auto">
        <div className="space-y-4">
          <div className="flex space-x-2">
            <div className="bg-blue-500 rounded p-2 w-fit">
              <h1 className="text-white text-xs sm:text-sm font-semibold">
                Latest Post
              </h1>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                Our Latest Work
              </h1>
            </div>
          </div>
          <div>
            <p className="text-gray-600 text-sm sm:text-base w-1/2">
              Our ongoing project exemplifies our dedication and collaboration,
              driving us towards innovative and impactful results.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-2 xl:gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <Link to={`/project/${project.id}`}>
                <img
                  src={`https://custom.beilcoff.shop/storage/${project.img1}`}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover"
                />
              </Link>
              <div className="p-2 sm:p-4">
                <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500">
                  <span>{project.date}</span>
                  <span>{project.company}</span>
                </div>
                <h3 className="font-semibold text-base sm:text-lg">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <button
            className="p-2 my-auto hover:scale-110 hover:bg-gradient-to-l flex justify-between from-blue-400 to-blue-600 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl w-fit duration-200 delay-150"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <IoIosArrowBack className="text-white w-5 h-5 xl:w-7 xl:h-7" />
            <span className="text-white font-semibold text-left text-sm xl:text-xl 2xl:text-2xl">
              Previous
            </span>
          </button>
          <button
            className="p-2 my-auto hover:scale-110 hover:bg-gradient-to-l flex justify-between from-blue-400 to-blue-600 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl w-fit duration-200 delay-150"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <span className="text-white font-semibold text-left text-sm xl:text-xl 2xl:text-2xl">
              Next
            </span>
            <IoIosArrowForward className="text-white w-10 h-5 xl:w-12 xl:h-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestWork;
