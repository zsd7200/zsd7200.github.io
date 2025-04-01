import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faBluesky, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

type LinksType = {
  name: string,
  short: string,
  link: string,
  icon?: IconProp,
}

export const linksData: Array<LinksType> = [
  {
    name: 'Resume',
    short: 'res',
    link: '/resume',
    icon: faFile,
  },
  {
    name: 'GitHub',
    short: 'gh',
    link: 'https://github.com/zsd7200',
    icon: faGithub,
  },
  {
    name: 'LinkedIn',
    short: 'li',
    link: 'https://www.linkedin.com/in/zachary-dunham-346256127/',
    icon: faLinkedin,
  },
  {
    name: 'Bluesky',
    short: 'bsky',
    link: 'https://bsky.app/profile/junko.lol',
    icon: faBluesky,
  },
];