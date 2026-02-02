import ProjectCard from "../MiddleSection/ProjectCard";
import { PROJECT_SECTIONS } from "../../constants/Section";

const MiddleSection = () => {
  return (
    <div className="flex justify-center w-full my-10">
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-16 max-w-full lg:max-w-[1280px] xl:max-w-[1500px] mt-14 w-full mx-6 md:mx-0">
        {PROJECT_SECTIONS.map(({ img, name }) => (
          <ProjectCard key={name} img={img} name={name} />
        ))}
      </div>
    </div>
  );
};

export default MiddleSection;
