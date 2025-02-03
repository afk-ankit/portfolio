import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <section
      className="flex flex-col md:flex-row justify-between md:mt-28 mt-12 gap-8 scroll-mt-40"
      id="home"
    >
      <div className="md:flex-[0.6] flex flex-col">
        <h1 className="md:text-5xl text-3xl font-bold">
          Trust me, I&apos;m a{" "}
          <span className="text-accent">
            software <br /> engineer.
          </span>
        </h1>
        <p className="text-zinc-400 mt-8 leading-normal">
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
        <button className="transition-colors hover:bg-accent-800 py-2 px-6 bg-accent w-fit rounded-md cursor-pointer mt-8 hidden md:block">
          <a href="mailto:ankitsharmagh093@gmail.com">Let's connect</a>
        </button>
      </div>
      <div className="md:flex-[0.4] space-y-8 mx-auto md:h-full">
        <div className="rounded-2xl overflow-hidden max-w-md">
          <img
            src="/dp-2.jpg"
            alt=""
            className="aspect-square object-cover object-bottom"
          />
        </div>
        <div className="flex justify-between h-[30px] w-1/2 mx-auto">
          <a href="https://x.com/ankit6901sh" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-zinc-600 cursor-pointer hover:text-accent "
            />
          </a>
          <a href="https://github.com/afk-ankit">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-zinc-600 cursor-pointer hover:text-accent "
            />
          </a>
          <a href="https://www.linkedin.com/in/ankit-sharma-0b0b9b223/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-zinc-600 cursor-pointer hover:text-accent "
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
