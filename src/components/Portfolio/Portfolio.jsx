import "./portfolio.css";
import final from "../../assets/final.png";
import final1 from "../../assets/final1.png";
import omsLiveOrders from "../../assets/oms-live-orders.jpg";
import tmsAllShipments from "../../assets/tms-all-shipments.jpg";
import wmsTotalInventory from "../../assets/wms-total-inventory.jpg";

const data = [
  {
    id: 1,
    kind: "case",
    image: wmsTotalInventory,
    name: "Warehouse Management System (WMS)",
    title:
      "Responsive inventory and shipping workflows for warehouse operators across 100+ tenants — contributing to a 12% increase in warehouse utilization. Optimized table-heavy pick/pack/ship UIs with code splitting, lazy loading, and memoized rendering.",
    tech: "React.js · TypeScript · Redux Toolkit · Tailwind · React Query",
  },
  {
    id: 2,
    kind: "case",
    image: omsLiveOrders,
    name: "Order Management System (OMS)",
    title:
      "Reusable cancellation and return flows with CASL route- and action-level RBAC so multi-tenant roles only access permitted order actions on a platform processing 52K+ orders/day.",
    tech: "React.js · TypeScript · Redux Toolkit · CASL · REST · Tailwind",
  },
  {
    id: 3,
    kind: "case",
    image: tmsAllShipments,
    name: "Transport Management System (TMS)",
    title:
      "Real-time order and inventory tracking with Pusher (sub-100ms latency) and Beam notifications, enabling faster order fulfillment for logistics operators.",
    tech: "React.js · TypeScript · Redux Toolkit · Pusher · Beam",
  },
  {
    id: 4,
    kind: "clone",
    image: final1,
    name: "EverHour",
    title:
      "Earlier work — time tracker web app that helps small and mid-size companies organize working hours.",
    github: "https://github.com/paruljamwal/viable-argument-168.git",
    demo: "https://idyllic-semifreddo-852580.netlify.app",
  },
  {
    id: 5,
    kind: "clone",
    image: final,
    name: "OverStock",
    title:
      "Earlier work — e-commerce experience for home decor, furniture, and outdoor products.",
    github: "https://github.com/paruljamwal/OverStock.git",
    demo: "https://endearing-malabi-e92ee0.netlify.app/",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {data.map((item) => (
          <article key={item.id} className="portfolio__item">
            {item.image && (
              <div className="Portfolio__item-image">
                <img src={item.image} alt={item.name} />
              </div>
            )}
            <h2 style={{ textAlign: "center" }}>{item.name}</h2>
            {item.tech && (
              <h4 style={{ textAlign: "center", marginBottom: "0.75rem" }}>
                {item.tech}
              </h4>
            )}
            <h3>{item.title}</h3>
            {item.kind === "clone" && (
              <div className="portfolio__item-cta">
                <a
                  href={item.github}
                  className="btn github"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={item.demo}
                  className="btn btn-primary github"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
