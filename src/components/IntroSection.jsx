import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.3,
        duration: 1,
        ease: "easeOut",
      }}
      className="flex items-center justify-center w-full my-20"
    >
      <p
        className="
      max-w-6xl mx-5 text-center
      font-zain font-light
      text-2xl lg:text-3xl
      leading-relaxed tracking-tight text-slate-700"
      >
        Daniel Chou is a full-stack software engineer. He has a soft spot for
        very spicy food, a growing sneaker rotation, an appreciation for{" "}
        <span className="underline">Japanese art</span>, and spends his free
        time training Brazilian jiu-jitsu. He lives and works in Queens, New
        York with his wife and dog.
      </p>
    </motion.div>
  );
};

export default IntroSection;
