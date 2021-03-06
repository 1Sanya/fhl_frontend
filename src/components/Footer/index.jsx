import React, { memo } from 'react';

import { Link } from 'react-router-dom';
import InstagramIcon from '../Social/Instagram';
import VkIcon from '../Social/Vk';
import YoutubeIcon from '../Social/Youtube';

import './index.scss';

const FOOTER = () => (
  <footer className="footer">
    <div className="container footer-container">

      <ul className="footer-menu">
        <li className="footer-menu__item">
          <Link to="/" className="footer-menu__link">Главная</Link>
        </li>
        <li className="footer-menu__item">
          <Link to="players" className="footer-menu__link">Игроки</Link>
        </li>
        <li className="footer-menu__item">
          <Link to="toclubs" className="footer-menu__link">Клубы</Link>
        </li>
        <li className="footer-menu__item">
          <Link to="todanate" className="footer-menu__link">Поддержать</Link>
        </li>
      </ul>
      <div className="footer-social">
        <a className="footer-social__link" href="https://vk.com/firehorn" target="_blank" rel="noreferrer">
          <VkIcon />
        </a>
        <a className="footer-social__link" href="https://www.youtube.com/channel/UChaA9krZaM5qgR6-u0YE2pAe" target="_blank" rel="noreferrer">
          <YoutubeIcon />
        </a>
        <a className="footer-social__link" href="https://www.instagram.com/firehornleague/" target="_blank" rel="noreferrer">
          <InstagramIcon />
        </a>
      </div>
    </div>
  </footer>
);

export default memo(FOOTER);
