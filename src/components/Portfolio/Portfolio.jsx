import "./portfolio.css";
import IMG1 from "../../assets/Best.jpg";
import IMG2 from "../../assets/freshly.jpg";
import IMG3 from "../../assets/Zappos.jpg";
import IMG4 from '../../assets/Lifestyle.jpg'

var data=[
  {
    id:1,
    image:IMG4,
    title:'LifeStyleStores is a Product based website',
    github:'https://github.com/paruljamwal/LifeStyleStores.git',
    demo:'https://lifestyle-final-main.vercel.app/'
  },
  {
    id:2,
    image:IMG1,
    title:'BEST BUY is a Electronic products based web.',
    github:'https://github.com/paruljamwal/Zappos-Clone.git',
    demo:'https://merry-kitten-8e2680.netlify.app/'
  },
  {
    id:3,
    image:IMG2,
    title:'FRESHLY is an organization who delivers food in different areas.',
    github:'https://github.com/paruljamwal/Fressely.git',
    demo:'https://sid283.github.io/Ecommerce_freshly_clone/landing_page/homepage.html'
  },
  {
    id:4,
    image:IMG3,
    title:'Ecommerce web. provides clothes and Major know for Footwear.',
    github:'https://github.com/paruljamwal/Zappos.git',
    demo:'https://zappos-ddofkinha-paruljamwal.vercel.app'
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