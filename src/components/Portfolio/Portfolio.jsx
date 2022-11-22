import "./portfolio.css";
import IMG1 from "../../assets/Best.jpg";
import IMG2 from "../../assets/freshly.jpg";
import IMG3 from "../../assets/Zappos.jpg";
import IMG4 from '../../assets/Lifestyle.jpg';
import IMG5 from '../../assets/snow.png'
import final from '../../assets/final.png';
import final1 from '../../assets/final1.png';
var data=[
  {
    id:1,
    image:final1,
    title:'Everhour is a time tracker website that helps small and mid-size companies  to  organize their working hours.',
    github:'https://github.com/paruljamwal/viable-argument-168.git',
    demo:'https://ever-lmnstkh00-paruljamwal.vercel.app'
  },

  {
    id:2,
    image:final,
    title:'OverStock is a American product based organisation where you can buy home decor, furniture etc.',
    github:'https://github.com/paruljamwal/OverStock.git',
    demo:'https://over-bz1zdp857-paruljamwal.vercel.app'
  },
  {
    id:3,
    image:IMG4,
    title:'LifeStyleStores is a Product based website',
    github:'https://github.com/paruljamwal/LifeStyleStores.git',
    demo:'https://lifestyle-final-main.vercel.app/'
  },
  {
    id:4,
    image:IMG1,
    title:'BEST BUY is a Electronic products based web.',
    github:'https://github.com/paruljamwal/BestBuy_Clone',
    demo:'https://roaring-cassata-209e07.netlify.app/'
  },

  {
    id:5,
    image:IMG2,
    title:'FRESHLY is an organization who delivers food in different areas.',
    github:'https://github.com/paruljamwal/Fressely.git',
    demo:'https://sid283.github.io/Ecommerce_freshly_clone/landing_page/homepage.html'
  },
  {
    id:6,
    image:IMG3,
    title:'Ecommerce web. provides clothes and Major know for Footwear.',
    github:'https://github.com/paruljamwal/Zappos.git',
    demo:'https://zappos-ddofkinha-paruljamwal.vercel.app'
  }
  ,
  {
    id:7,
    image:IMG5,
    title:'Snow glove image.',
    github:'https://github.com/paruljamwal/snow_globe',
    demo:'https://famous-mousse-3232bc.netlify.app/'
  }
 
]

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
         data.map(({id,image,title,github,demo})=>{
           return (
            <article key={id} className="portfolio__item">
            <div className="Portfolio__item-image">
              <img src={image} alt="image" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className="btn github" target="_blank">
              Github
            </a>
            <a href={demo} className="btn btn-primary github" target="_blank">
              Live Demo
            </a>
            </div>
          </article>
           )

         })
       }
      </div>
    </section>
  );
};