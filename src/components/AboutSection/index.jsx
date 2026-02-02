import portraitImg from "../../assets/personal-portrait.png";

const AboutSection = () => {
  return (
    <div className="flex justify-center w-full my-10 font-bvp font-light">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24 max-w-full lg:max-w-[1280px] xl:max-w-[1500px] mt-14 w-full mx-6 md:mx-4">
        <div className="md:basis-[55%] lg:basis-[60%]">
          <img
            className="aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] shadow-lg rounded-sm"
            src={portraitImg}
            alt="PersonalPortrait"
          ></img>
        </div>
        <div className="md:basis-[45%] lg:basis-[40%]">
          <h2 className="text-4xl md:text-5xl mb-5 font-normal font-domine">
            Most people call me Dan.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-prose">
            Nice to meet you! I’m a software engineer who believes technology is
            at its best when it tells a story. My journey here wasn’t a straight
            line—I spent over half a decade in finance (specifically
            fixed-income) before the pandemic sparked a new passion where I
            decided to swap spreadsheets for code.
          </p>
          <br></br>
          <p className="text-lg md:text-xl leading-relaxed max-w-prose">
            Since then, I’ve honed my skills in a software engineering program
            and contributed to teams at Citigroup and Live Music Project. I love
            crafting intuitive experiences, exploring new tech, and obsessing
            over the little details. Off the clock, you’ll find me tinkering
            with side projects, diving into design, or hunting down the perfect
            spicy snack.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
