import { getProject } from "../../api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import moment from "moment";

function Workus() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectData = await getProject(1);
        const latestProjects = projectData.data.slice(0, 3);
        setProjects(latestProjects);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto p-8 grid grid-cols-1 min-h-screen bg-white">
      <div className="space-y-6 xl:space-y-12 my-auto flex flex-col justify-center">
        <div className="space-y-4">
          <div className="flex space-x-2 items-center">
            <div className="bg-blue-500 rounded-full py-1 px-3">
              <h1 className="text-white text-xs xl:text-sm font-semibold">
                Latest Post
              </h1>
            </div>
            <h1 className="text-lg sm:text-3xl font-bold">Our Latest Work</h1>
          </div>
          <p className="text-gray-600 text-sm sm:text-base w-full sm:w-3/4 xl:w-1/2">
            Our ongoing project exemplifies our dedication and collaboration,
            driving us towards innovative and impactful results.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="rounded-lg">
              <Link to={`/project/${project.id}`}>
                <div className="overflow-hidden h-full rounded-3xl">
                  <img
                    src={`https://custom.beilcoff.shop/storage/${project.img1}`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              {/* Updated information layout */}
              <div className="mt-4 px-4 pb-4">
                <div className="flex items-center text-xs sm:text-sm">
                  <p className="text-gray-500">
                    {moment(project.created_at).format("DD MMM, YYYY")}
                  </p>
                  <p className="text-blue-500 relative ml-3">Custompedia</p>
                </div>
                <h2 className="font-bold text-sm sm:text-base mt-2 text-left">
                  {project.project}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-1 border-2 border-blue-400 rounded-full py-2 px-4 text-blue-600 hover:bg-blue-400 hover:text-white transition-colors"
          >
            <h1 className="font-bold text-sm xl:text-lg">View All Our Work</h1>
            <IoIosArrowForward className="w-5 h-5 xl:w-6 xl:h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Workus;