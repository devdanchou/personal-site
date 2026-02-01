import { motion } from "framer-motion";

const ProjectCard = ({ name, img }) => {
  return (
    <button
      className="flex flex-col font-serif mb-10 rounded-sm overflow-clip"
      aria-label={name}
    >
      <motion.img
        className="lg:w-[725px] lg:h-[525px] object-cover shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeOut",
        }}
        src={img}
        alt={name}
      ></motion.img>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeOut",
        }}
        className="text-start py-2 text-xl lg:text-2xl"
      >
        {name}
      </motion.h2>
    </button>
  );
};

export default ProjectCard;
