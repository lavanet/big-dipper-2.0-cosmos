import React from 'react';
import {
  TelegramIcon,
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
} from '@icons';

export const socialMediaLinks: {
  component: React.ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <LinkedinIcon />,
    className: 'linkedin',
    url: 'https://www.linkedin.com/company/lava-network/',
  },
  {
    component: <TwitterIcon />,
    className: 'twitter',
    url: 'https://twitter.com/lavanetxyz',
  },
  {
    component: <GithubIcon />,
    className: 'github',
    url: 'https://github.com/lavanet',
  },
  {
    component: <DiscordIcon />,
    className: 'discord',
    url: 'https://discord.com/channels/963778337904427018/963780976239063060',
  },
];
