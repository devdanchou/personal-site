import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SECTIONS } from "../../constants/Section";
import NavItem from "../NavBar/NavItem";

const ContactSection = () => {
  const buttons = SECTIONS.filter((item) => item.as === "button");
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
      className="flex flex-col justify-start w-[575px] h-full my-20 px-4"
    >
      <h2 className="my-10 text-3xl font-light font-domine">
        Let’s Build Something Together.
      </h2>
      <div
        className="      font-zain font-light
      text-xl lg:text-2xl
      leading-relaxed tracking-tighter text-slate-800"
      >
        <p className="mb-5">
          I’m a big believer in the power of thoughtful, creative solutions that
          make a real difference in people’s lives. My favorite projects are the
          ones where technical skill meets a genuine, real-world purpose.
        </p>
        <p className="mb-5">
          If you have an idea that aims to do more than just "get the job done,"
          I’d love to help you bring it to life.
        </p>
        <p className="mb-5">
          <span className="font-medium">Ready to jump in? </span>Please fill out
          the form below and tell me a bit about your vision. Sharing details
          like your project scope, timeline, and budget helps me get a clear
          picture of your goals so we can hit the ground running.
        </p>
        <p>
          <span className="font-medium">
            Not quite ready for a project yet?
          </span>{" "}
          That’s totally fine too. If you’d just like to say hello or start a
          conversation about what’s possible, I’m always happy to connect.
        </p>
        <div className="mt-5">
          {buttons.map((button) => (
            <NavItem key={button.type} {...button} size="footer">
              <i className={button.icon} />
            </NavItem>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
