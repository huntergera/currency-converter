import {FacebookIcon} from "../icons/FacebookIcon";
import {InstagramIcon} from "../icons/InstagramIcon";
import {TwitterIcon} from "../icons/TwitterIcon";
import {YoutubeIcon} from "../icons/YoutubeIcon";

export default function Socials() {
  return (
    <div className='flex gap-x-3'>
      <a href="#">
        <FacebookIcon className="hover:fill-gray fill-black transition-fill" />
      </a>
      <a href="#">
        <InstagramIcon className="hover:fill-gray fill-black transition-fill" />
      </a>
      <a href="#">
        <TwitterIcon className="hover:fill-gray fill-black transition-fill" />
      </a>
      <a href="#">
        <YoutubeIcon className="hover:fill-gray fill-black transition-fill" />
      </a>
    </div>
  );
}
