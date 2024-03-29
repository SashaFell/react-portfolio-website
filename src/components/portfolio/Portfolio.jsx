import React from 'react'
import { useState } from "react";
import './portfolio.css'


import Game1 from '../../assets/Games/Canabalt_PC_Build.zip'
import Game2 from '../../assets/Games/Platformer_PC_Build.zip'
import Game3 from '../../assets/Games/Ghost_Runner_PC_Build.zip'
import Game4 from '../../assets/Games/Endless_Runner_PC_Build.zip'
import Game5 from '../../assets/Games/Flappy_Bird_PC_Build.zip'

import IMG1 from '../../assets/M322_Prototyp_Screenshot_2.PNG'
import IMG2 from '../../assets/M426_Projekt_Screenshot.png'
import IMG3 from '../../assets/M294&M295_Screenshot_Small.png'
import IMG4 from '../../assets/portfolio4.jpg'

import IMG5 from '../../assets/Games/Game_Images/Canabalt_Screenshot.PNG'
import IMG6 from '../../assets/Games/Game_Images/Platformer_Screenshot.PNG'
import IMG7 from '../../assets/Games/Game_Images/Ghost_Runner_Screenshot.PNG'
import IMG8 from '../../assets/Games/Game_Images/Endless_Runner_Screenshot.PNG'
import IMG9 from '../../assets/Games/Game_Images/Flappy_Bird_Screenshot.PNG'

import IMG10 from '../../assets/Portfolio_Website_Screenshot.PNG'

const data = [

  /*School*/
  {
    id: 1,
    catId: 1,
    image: IMG1,
    title: 'M322',
    build: 'https://www.figma.com/file/KyAk8olU0s3HkDHMEOHozM/Sportapp-Simple?type=design&node-id=0-1&mode=design&t=wzpyrEHnK0q1iO5j-0',
    info: 'https://dribble.com'
  },

  {
    id: 2,
    catId: 1,
    image: IMG2,
    title: 'M426',
    build: 'https://github.com/SashaFell/M426_Projekt',
    info: 'https://dribble.com'
  },
  {
    id: 3,
    catId: 1,
    image: IMG3,
    title: 'M294 & M295',
    build: 'https://github.com/SashaFell/M294_M295_LB_Projekt',
    info: 'https://dribble.com'
  },

  // // {
  // //   id: 3,
  // //   catId: 1,
  // //   image: IMG2,
  // //   title: 'M294 & M295',
  // //   build: 'https://github.com',
  // //   info: 'https://dribbble.com'
  // // },
  // {
  //   id: 3,
  //   catId: 1,
  //   image: IMG2,
  //   title: 'M347',
  //   build: 'https://github.com',
  //   info: 'https://dribbble.com'
  // },

  /*Games*/
  {
    id: 5,
    catId: 2,
    image: IMG5,
    title: 'Canabalt',
    build: Game1,
    info: 'https://dribbble.com'
  },
  {
    id: 6,
    catId: 2,
    image: IMG6,
    title: 'Platformer',
    build: Game2,
    info: 'https://dribbble.com'
  },
  {
    id: 7,
    catId: 2,
    image: IMG7,
    title: 'Ghost Runner',
    build: Game3,
    info: 'https://dribbble.com'
  },
  {
    id: 8,
    catId: 2,
    image: IMG8,
    title: 'Endless Runner',
    build: Game4,
    info: 'https://dribbble.com'
  },
  {
    id: 9,
    catId: 2,
    image: IMG9,
    title: 'Flappy Bird',
    build: Game5,
    info: 'https://dribbble.com'
  },

  /*Other*/
  {
    id: 2,
    catId: 3,
    image: IMG10,
    title: 'Portfolio Webseite',
    build: 'https://github.com/SashaFell/react-portfolio-website',
    info: 'https://dribbble.com'
  },
]

function Portfolio() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id='portfoliotabs'>
    <h5>Meine Projekte</h5>
    <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <div className="portfolio__bloc-tabs">
          <button className={toggleState === 1 ? "portfolio__tabs portfolio__active-tabs" : "portfolio__tabs"} onClick={() => toggleTab(1)}>
          Schule
          </button>

          <button className={toggleState === 2 ? "portfolio__tabs portfolio__active-tabs" : "portfolio__tabs"} onClick={() => toggleTab(2)}>
            Games
          </button>

          <button className={toggleState === 3 ? "portfolio__tabs portfolio__active-tabs" : "portfolio__tabs"} onClick={() => toggleTab(3)}>
            Andere
          </button>
        </div>

        <div className="portfolio__content-tabs">
          <div className={toggleState === 1 ? "portfolio__content  portfolio__active-content" : "portfolio__content"}>
            <div className="portfolio__projects">
              {
                data.filter(thing=>thing.catId===1).map(({id, image, title, build, info}) => {
                  return (
                    <article key ={id} className='portfolio__item'>
                    <div className="portfolio__item-image">
                      <img src={image} alt={title} />
                    </div>
                      <h3>{title}</h3>
                      <div className="portfolio__item-cta">
                        <a href={build} className='btn' target='_blank'>Projekt</a>
                        {/* <a href={info} className='btn btn-primary' target='_blank'>Info</a> */}
                      </div>
                  </article>
                  )
                })
              }
            </div>
            </div>

          <div className={toggleState === 2 ? "portfolio__content  portfolio__active-content" : "portfolio__content"}>
            <div className="portfolio__projects">
                {
                  data.filter(thing=>thing.catId===2).map(({id, image, title, build, info}) => {
                    return (
                      <article key ={id} className='portfolio__item'>
                      <div className="portfolio__item-image">
                        <img src={image} alt={title} />
                      </div>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                          <a href={build} className='btn' target='_blank'>Download</a>
                          {/* <a href={info} className='btn btn-primary' target='_blank'>Info</a> */}
                        </div>
                    </article>
                    )
                  })
                }
              </div>
          </div>

          <div className={toggleState === 3 ? "portfolio__content  portfolio__active-content" : "portfolio__content"}>
            <div className="portfolio__projects">
                {
                  data.filter(thing=>thing.catId===3).map(({id, image, title, build, info}) => {
                    return (
                      <article key ={id} className='portfolio__item'>
                      <div className="portfolio__item-image">
                        <img src={image} alt={title} />
                      </div>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                          <a href={build} className='btn' target='_blank'>Projekt</a>
                          {/* <a href={info} className='btn btn-primary' target='_blank'>Info</a> */}
                        </div>
                    </article>
                    )
                  })
                }
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio