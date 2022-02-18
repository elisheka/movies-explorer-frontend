import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitile';
import photo from '../../images/photo-min.jpeg'
import Portfolio from '../Portfolio/Portfolio';
import {portfolioLinks} from '../../config/links';

import './AboutMe.css';

const AboutMe = () => {
  return (
      <section id="about-me" className="about-me">
        <div className="about-me__container">
          <SectionTitle title={'Студент'}/>
          <div className="bio">
            <div className="bio__description">
              <p className="bio__name">Элис</p>
              <p className="bio__job">Веб-разработчик, 43 года</p>
              <p className="bio__text">
                Родилась в Москве, живу в Москве, получила высшее образование по специальности архитектор, сейчас — выпускник курса по веб-разработке Яндекс.Практикума.
                Люблю смотреть фильмы, заниматься цифровой графикой, путешествовать.
              </p>

              <ul className="bio__links">
                <li className="bio__list-item">
                  <a href="https://www.facebook.com/"
                     rel="noopener noreferrer"
                     target="_blank"
                     className="bio__external-link">Facebook
                  </a>
                </li>
                <li className="bio__list-item">
                  <a href="https://github.com/elisheka/"
                     rel="noopener noreferrer"
                     target="_blank"
                     className="bio__external-link">Github
                  </a>
                </li>
              </ul>
            </div>

              <img src={photo}
                   alt="Фото студента"
                   className="bio__photo"
              />
          </div>

          <Portfolio links={portfolioLinks} className={'portfolio__about-me'}/>
        </div>
      </section>
  )
}

export default AboutMe;
