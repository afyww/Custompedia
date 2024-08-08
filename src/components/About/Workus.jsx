import { getProject } from "../../api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Workus() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectData = await getProject(1); // Fetch the first page of projects
        const latestProjects = projectData.data.slice(0, 4); // Get only the first 4 projects
        setProjects(latestProjects);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1">
      <div className="space-y-4 xl:space-y-20 my-auto">
        <div className="space-y-4">
          <div className="flex space-x-2">
            <div className="bg-blue-500 rounded p-1 xl:p-2 w-fit">
              <h1 className="text-white text-xs xl:text-xl font-semibold">
                Latest Post
              </h1>
            </div>
            <div className="my-auto">
              <h1 className="text-sm sm:text-3xl font-bold">Our Latest Work</h1>
            </div>
          </div>
          <div>
            <p className="text-gray-600 text-sm sm:text-base w-3/4 xl:w-1/2">
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
        <div className="border-2 border-blue-400 rounded-xl w-fit mx-auto p-2">
          <Link to="/projects" className="text-center flex space-x-1
          ">
            <h1 className="font-bold text-lg xl:text-xl my-auto">View All Our Work</h1>
            <IoIosArrowForward className="w-6 h-6 my-auto xl:w-8 xl:h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Workus;
