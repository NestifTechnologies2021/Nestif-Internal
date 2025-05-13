import "./InternshipScrollCard.css";
import { Component } from "react";
import { FaArrowRight } from "react-icons/fa";
class ScrollCardsDetails extends Component {
  ScrollCardsItems = [
    {
      id: 0,
      heading: "Core Languages",
      img: "corelanguage.png",
      text:
        " Engineered into an intuitive operating model, software will automatically and continuously adapt to customers’ evolving needs .",
      url: "/CoreLanguage"
    },
    {
      id: 1,
      heading: "Web Platforms",
      img:"webplatform.png",
      text:
      "End-to-end spectrum of software consulting services, including strategy, implementation, and ongoing operations. ",
      url: "/WebPlatforms"
    },
    {
      id: 2,
      heading: "Windows Platforms",
      img: "windowplatforms.png",
      text:
      "Developing organizational and technology-based capabilities that allow a company to continuously improve its customers' needs",
      url: "/WindowPlatform"
    },
    {
      id:3 ,
      heading: "Cloud Technologies",
      img: "cloud.png",
      text:
      "Deliver personalised employee experiences — all within a single contact centre solution.",
      url: "/CloudTechnologies"
    },
    {
        id:4 ,
        heading: "Artificial Intelligence",
        img: "aiml.png",
        text:
        "Deliver personalised employee experiences — all within a single contact centre solution.",
        url: "/ArtificialIntelligence"
      },
      {
        id:5 ,
        heading: "Certifications",
        img: "certifications.png",
        text:
        "Deliver personalised employee experiences — all within a single contact centre solution.",
        url: "/Certificates"
      }
    
  ];
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.ScrollCardsItems.map((cards) => {
            return (
              <div key={cards.id} className="col-md-4 col-sm-6 mb-4"> 
                <div className="cards-container"> 
                  <div className="cards">
                    <h4>{cards.heading}</h4>
                    <img src={cards.img} alt="..." />
                  </div>
                  <div className="cards-desc">
                    <p>{cards.text}</p>
                    <a href={cards.url} className="learn-more-link">
                      Learn More <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default ScrollCardsDetails;