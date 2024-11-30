import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="h-60 grid place-items-center">
      <div className="space-y-8">
        <div className="flex gap-4 items-center">
          <img
            src="/dp.jpeg"
            alt=""
            className="w-10 h-10 object-contain rounded-full overflow-hidden"
          />
          <span className="text-xl font-bold tracking-wide">Ankit Sharma</span>
        </div>
        <div className="flex justify-between px-4">
          <FontAwesomeIcon icon={faTwitter} className="text-zinc-600" />
          <FontAwesomeIcon icon={faGithub} className="text-zinc-600" />
          <FontAwesomeIcon icon={faLinkedin} className="text-zinc-600" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
