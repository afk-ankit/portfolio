import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <section
      className="flex justify-between mt-28 gap-8 scroll-mt-40"
      id="home"
    >
      <div className="flex-[0.6] flex flex-col">
        <h1 className="text-5xl font-bold leading-tight">
          Trust me, I&apos;m a{" "}
          <span className="text-accent">
            software <br /> engineer.
          </span>
        </h1>
        <p className="text-zinc-400 mt-8">
          Meet Ankit Sharma, freelance web developer, and entrepreneur known for
          his expertise in the tech industry. He has successfully launched
          numerous technical courses on various platforms. Founder of Samtal.io,
          white-labeled Social Media to help businesses connect their employees
          globally.
        </p>
        <span className="text-sm text-zinc-600 mt-3">~ ChatGPT</span>
        <p className="text-zinc-400 mt-8">
          Building <span className="font-bold text-white">Upesto.com</span>{" "}
          next-gen talent-hiring platform ✨
        </p>
        <button className="py-2 px-6 bg-accent w-fit rounded-md cursor-pointer mt-8 font-semibold">
          Let's connect
        </button>
      </div>
      <div className="flex-[0.4] space-y-8">
        <div className="aspect-square rounded-2xl overflow-hidden">
          <img src="/dp.jpeg" alt="" />
        </div>
        <div className="flex justify-between h-[30px] w-1/2 mx-auto">
          <FontAwesomeIcon icon={faTwitter} className="text-zinc-600" />
          <FontAwesomeIcon icon={faGithub} className="text-zinc-600" />
          <FontAwesomeIcon icon={faLinkedin} className="text-zinc-600" />
        </div>
      </div>
    </section>
  );
};

export default Home;
