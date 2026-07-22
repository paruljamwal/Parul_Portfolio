import "./experience.css";

function Experience() {
  return (
    <section id="experience">
      <h5>Where I've Worked</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__work">
          <div className="experience__work-header">
            <h3>Software Development Engineer (Frontend)</h3>
            <h4>Omniful Technologies</h4>
            <small className="text-light">Jan 2023 – Present</small>
          </div>
          <ul className="experience__work-list">
            <li>
              Owned frontend for WMS, OMS, and TMS modules used by 100+
              enterprise tenants processing 52K+ orders/day.
            </li>
            <li>
              Cut page load times by ~40% via React Query caching, route-level
              code splitting, lazy loading, and memoized list rendering.
            </li>
            <li>
              Architected a reusable React component library and shared hooks,
              cutting duplicate UI work by ~40% across WMS/OMS/TMS.
            </li>
            <li>
              Engineered real-time order/inventory tracking with Pusher and Beam
              notifications, enabling faster order fulfillment.
            </li>
            <li>
              Built route- and action-level RBAC with CASL and delivered OMS
              cancellation/return flows with REST API integrations.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
