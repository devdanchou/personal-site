import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ name, img }) => {
  return (
    <Link to={`/work/${name}`}>
      <div className="flex flex-col rounded-sm overflow-clip" aria-label={name}>
        <motion.img
          className="w-[610px] h-[410px] lg:w-[710px] lg:h-[510px] object-cover shadow-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeOut",
          }}
          className="text-start font-zain font-light pt-5 text-xl lg:text-2xl text-slate-800"
        >
          {name}
        </motion.h2>
      </div>
    </Link>
  );
};

export default ProjectCard;
