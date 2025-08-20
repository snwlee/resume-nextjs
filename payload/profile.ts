import { faEnvelope, faRss } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  image: 'https://avatars.githubusercontent.com/u/82517133?v=4',
  name: {
    title: '이선우',
  },
  contact: [
    {
      title: 'pgrrr119@gmail.com',
      link: 'mailto:pgrrr119@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '블로그',
      link: 'https://velog.io/@iseon_u',
      icon: faRss,
    },
    {
      title: '깃허브',
      link: 'https://github.com/snwlee',
      icon: faGithub,
    },
  ],
  notice: {
    title:
      "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
    icon: faBell,
  },
};

export default profile;
