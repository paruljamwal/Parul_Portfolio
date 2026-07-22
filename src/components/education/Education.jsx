import "./education.css";

function Education() {
  return (
    <section id="education">
      <h5>My Learning</h5>
      <h2>Education</h2>
      <div className="container education__container">
        <article className="education__item">
          <h3>Full Stack Web Development</h3>
          <h4>Masai School, Bangalore</h4>
          <small className="text-light">2021 – 2022</small>
        </article>
        <article className="education__item">
          <h3>Bachelor of Computer Applications</h3>
          <h4>Himachal Pradesh University</h4>
          <small className="text-light">2019 – 2021</small>
        </article>
      </div>
    </section>
  );
}

export default Education;
