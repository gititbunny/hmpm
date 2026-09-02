import { Link } from "react-router-dom";

import churchStoryImage from "../assets/images/about/church-story.jpg";
import missionImage from "../assets/images/about/mission.jpg";
import visionImage from "../assets/images/about/vision.jpg";
import leaderProphetImage from "../assets/images/about/leader-prophet.jpg";
import leaderPastorImage from "../assets/images/about/leader-pastor.jpg";
import leaderTeamImage from "../assets/images/about/leader-team.jpg";

function About() {
  return (
    <>
      <section className="content-section about-overview-section">
        <div className="about-overview-image-wrap">
          <img
            className="about-overview-image"
            src={churchStoryImage}
            alt="House Of Miracles church gathering"
          />
        </div>

        <div className="about-overview-content">
          <p className="eyebrow">About The Ministry</p>
          <h1>House Of Miracles Prophetic Ministries.</h1>
          <p>
            A prophetic ministry rooted in prayer, worship, the Word, spiritual
            guidance, and community care.
          </p>

          <div className="about-quick-points">
            <article>
              <span>Sunday Service</span>
              <strong>11:30 AM</strong>
            </article>

            <article>
              <span>One-on-One</span>
              <strong>Wednesday, Saturday & Sunday</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section about-ministry-note">
        <p className="eyebrow">What Happens Here</p>
        <h2>A place of prayer, deliverance, guidance, and testimonies.</h2>
        <p>
          People come to House Of Miracles Prophetic Ministries for prayer,
          prophetic guidance, deliverance, healing, restoration, and spiritual
          support. Many members also share testimonies of breakthrough in their
          families, work, faith, and personal lives.
        </p>
      </section>

      <section className="content-section mission-section">
        <article className="mission-card mission-card-with-image">
          <img src={missionImage} alt="Church mission and worship moment" />
          <div className="mission-card-overlay"></div>

          <div className="mission-card-content">
            <span>Mission</span>
            <h2>To lead people into prayer, worship, faith, and spiritual growth.</h2>
            <p>
              Serving people through the Word of God, prayer, spiritual
              guidance, compassion, and community support.
            </p>
          </div>
        </article>

        <article className="mission-card mission-card-with-image">
          <img src={visionImage} alt="Church vision and community gathering" />
          <div className="mission-card-overlay light-overlay"></div>

          <div className="mission-card-content">
            <span>Vision</span>
            <h2>To see lives transformed through healing and restoration.</h2>
            <p>
              A ministry where people experience hope, direction, breakthrough,
              and a deeper relationship with God.
            </p>
          </div>
        </article>
      </section>

      <section className="content-section leadership-section">
        <div className="section-heading compact-about-heading">
          <p className="eyebrow">Leadership</p>
          <h2>Meet the church leadership.</h2>
        </div>

        <div className="leader-grid">
          <article className="leader-card">
            <div className="leader-image-wrap">
              <img
                className="leader-image"
                src={leaderProphetImage}
                alt="Prophet VK Ngobeni"
              />
            </div>
            <h3>Prophet VK Ngobeni</h3>
            <p>Founder & Prophet</p>
          </article>

          <article className="leader-card">
            <div className="leader-image-wrap">
              <img
                className="leader-image"
                src={leaderPastorImage}
                alt="Apostle Mashele"
              />
            </div>
            <h3>Apostle Mashele</h3>
            <p>Apostle / Lead Pastor</p>
          </article>

          <article className="leader-card">
            <div className="leader-image-wrap">
              <img
                className="leader-image"
                src={leaderTeamImage}
                alt="House Of Miracles leadership team"
              />
            </div>
            <h3>Norman Nkuna</h3>
            <p>Chairperson</p>
          </article>
        </div> 
      </section>

      <section className="content-section page-cta about-final-cta">
        <div>
          <p className="eyebrow">Visit The Ministry</p>
          <h2>Join us this Sunday or book a one-on-one session.</h2>
          <p>
            View service details, directions, and contact information before
            your visit. 
          </p>
        </div>

        <div className="cta-actions">
          <Link className="btn btn-primary" to="/contact">
            Plan Your Visit
          </Link>
          <Link className="btn btn-outline" to="/booking">
            Book One-on-One
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;