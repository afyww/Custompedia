import { getProject } from "../../api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Workus() {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectData = await getProject(currentPage);
        setProjects(projectData.data);
        setTotalPages(projectData.last_page);
        console.log("Total Pages:", projectData.last_page);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      console.log("Next button clicked");
      setCurrentPage(currentPage + 1);
      console.log("Current Page:", currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="grid grid-cols-1 bg-black p-4 xl:p-8">
      <div className="my-auto">
        <div className="space-y-5 xl:space-y-8 2xl:space-y-12">
          <div className="w-full">
            <div className="flex space-x-2">
              <div>
                <h1 className="text-xl text-left xl:text-5xl 2xl:text-7xl text-white font-bold">
                  Our Work
                </h1>
              </div>
              <div className="pt-3.5 xl:pt-8 2xl:pt-12">
              <div className="bg-yellow-400 p-1 xl:p-2 rounded-xl px-8 xl:px-16"></div>
              </div>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl">
              Moves Businesses Forward
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 xl:p-8 p-4">
            {projects.map((project) => (
              <div className="w-full my-auto" key={project.id}>
                <Link className="" to={`/project/${project.id}`}>
                  <div className="relative group shadow-xl transform duration-500 hover:bg-right cursor-pointer">
                    <img
                      src={`https://custom.beilcoff.shop/storage/${project.img1}`}
                      alt={project.project}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 py-8 xl:py-36 hover:bg-opacity-75 transform duration-300 flex items-center justify-center">
                      <h2 className="text-white duration-300 mx-5 bottom-0 font-extrabold text-2xl xl:text-4xl opacity-0 transition-opacity group-hover:opacity-100 hover:text-white">
                        {project.project}
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workus;
