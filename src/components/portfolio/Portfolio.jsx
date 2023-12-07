import React from 'react'
import { useState } from "react";
import './portfolio.css'

import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio Title 1',
    build: 'https://github.com',
    info: 'https://dribbble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Portfolio Title 2',
    build: 'https://github.com',
    info: 'https://dribbble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio Title 3',
    build: 'https://github.com',
    info: 'https://dribbble.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Portfolio Title 4',
    build: 'https://github.com',
    info: 'https://dribbble.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Portfolio Title 5',
    build: 'https://github.com',
    info: 'https://dribbble.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Portfolio Title 6',
    build: 'https://github.com',
    info: 'https://dribbble.com'
  }
]

function Portfolio() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id='portfoliotabs'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <div className="portfolio__bloc-tabs">
          <button className={toggleState === 1 ? "portfolio__tabs portfolio__active-tabs" : "portfolio__tabs"} onClick={() => toggleTab(1)}>
          School
          </button>

          <button className={toggleState === 2 ? "portfolio__tabs portfolio__active-tabs" : "portfolio__tabs"} onClick={() => toggleTab(2)}>
            Games
          </button>

          <button className={toggleState === 3 ? "portfolio__tabs portfolio__active-tabs" : "portfolio__tabs"} onClick={() => toggleTab(3)}>
            Other
          </button>
        </div>

        <div className="portfolio__content-tabs">
          <div className={toggleState === 1 ? "portfolio__content  portfolio__active-content" : "portfolio__content"}>
            <div className="portfolio__projects">
              {
                data.map(({id, image, title, build, info}) => {
                  return (
                    <article key ={id} className='portfolio__item'>
                    <div className="portfolio__item-image">
                      <img src={image} alt={title} />
                    </div>
                      <h3>{title}</h3>
                      <div className="portfolio__item-cta">
                        <a href={build} className='btn' target='_blank'>Download</a>
                        <a href={info} className='btn btn-primary' target='_blank'>Info</a>
                      </div>
                  </article>
                  )
                })
              }
            </div>
            </div>

          <div className={toggleState === 2 ? "portfolio__content  portfolio__active-content" : "portfolio__content"}>
            <p>
              There are no projects to be seen at the moment. New projects will be added upon completion.
            </p>
          </div>

          <div className={toggleState === 3 ? "portfolio__content  portfolio__active-content" : "portfolio__content"}>
            <p>
              There are no projects to be seen at the moment. New projects will be added upon completion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio