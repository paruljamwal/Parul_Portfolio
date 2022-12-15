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
    name:"EverHour",
    title:'Everhour is a time tracker website that helps small and mid-size companies  to  organize their working hours.',
    github:'https://github.com/paruljamwal/viable-argument-168.git',
    demo:'https://idyllic-semifreddo-852580.netlify.app'
  },

  {
    id:2,
    image:final,
    name:"OverStock",
    title:'OverStock is a American product based organisation where you can buy home decor, furniture, indoor-outdoor tents etc.',
    github:'https://github.com/paruljamwal/OverStock.git',
    demo:'https://endearing-malabi-e92ee0.netlify.app/'
  },

  {
    id:4,
    image:IMG1,
    name:"BEST BUY",
    title:'The company sells a wide variety of items, including mobile phones, and video games, home appliances.',
    github:'https://github.com/paruljamwal/BestBuy_Clone',
    demo:'https://roaring-cassata-209e07.netlify.app/'
  },

  {
    id:5,
    image:IMG2,
    name:"FRESHLY",
    title:'Freshly clone is a pepared meal delivery website which not only aims at just delivering food but also focuses on nutrition and calories.',
    github:'https://github.com/paruljamwal/Fressely.git',
    demo:'https://sid283.github.io/Ecommerce_freshly_clone/landing_page/homepage.html'
  },
  {
    id:6,
    image:IMG3,
    name:"Zappos",
    title:'Ecommerce web. provides clothes and Major know for Footwear. At Zappos.com, our purpose is simple: to live and deliver WOW and best service, experience.',
    github:'https://github.com/paruljamwal/Zappo_Tappo_Website_USA.git',
    demo:'https://cozy-mandazi-5494a7.netlify.app/'
  }
  ,
  {
    id:7,
    image:IMG5,
    name:"Snow glove",
    title:'Snow glove: add any image and gift to your loved one.',
    github:'https://github.com/paruljamwal/snow_globe',
    demo:'https://famous-mousse-3232bc.netlify.app/'
  },
  {
    id:3,
    image:IMG4,
    name:"LifestyleStores",
    title:'LifestyleStores is a retail Fashion Brand. Which has all clothing in varies categories and has a wide range of fashion products',
    github:'https://github.com/paruljamwal/LifeStyleStores.git',
    demo:'https://lifestyle-final-main.vercel.app/'
  }
 
]

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
         data.map(({id,image,name,title,github,demo})=>{
           return (
            <article key={id} className="portfolio__item">
            <div className="Portfolio__item-image">
              <img src={image} alt="image" />
            </div>
            <h2 style={{textAlign:"center"}} >{name}</h2>
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