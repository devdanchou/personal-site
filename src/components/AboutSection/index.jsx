import portraitImg from "../../assets/personal-portrait.png";

const AboutSection = () => {
  return (
    <div className="flex justify-center w-full my-10 font-bvp font-light">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24 max-w-full lg:max-w-[1280px] xl:max-w-[1400px] mt-14 w-full mx-6 md:mx-4">
        <div className="md:basis-[55%] lg:basis-[60%]">
          <img
            className="aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] shadow-sm rounded-sm"
            src={portraitImg}
            alt="PersonalPortrait"
          ></img>
        </div>
        <div className="md:basis-[45%] lg:basis-[40%]">
          <p className="text-lg md:text-xl leading-relaxed max-w-prose">
            You’ve gotten this far and now I consider us friends. It’s nice to
            meet you! I'm a designer passionate about creating visuals that tell
            stories and designing brand experiences that improve everyday lives,
            especially within the direct-to-consumer market. My projects have
            ended up nationwide in places like Whole Foods, Target, and Sephora.
            I come from a multidisciplinary background (I studied sustainable
            environmental design at UC Berkeley but my specialties lie within
            graphic design, brand design, and making work feel like play). I’ve
            gotten the chance to work with some of my dream companies and I am
            so extremely grateful for this! I'm a big fan of powerful branding
            and communication. I taught a class on Brand Identity and Graphic
            Design at UC Berkeley! ccc
            <br />
            I’ve also given talks about design at Berkeley and Stanford (and
            even spoken in front of 1,000 people at the Brand New conference).
            During my free time, you can find me reading or searching for my
            next book cover to design, filming my friends, or eating chicken
            wings. Check my Instagram @edgykatrina for my latest work. I have an
            art shop, a youtube channel where I make fun videos about graphic
            design and life, and a newsletter where I write about graphic design
            and life. Thanks for stopping by. I hope you enjoyed my website. If
            you didn't, here's a little something special to make up for
            it.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
