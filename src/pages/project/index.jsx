import { useParams } from 'react-router-dom';
import { dataportfolio } from '../../content_option';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";


export const Project = () => {
  // Grab the dynamic parameter from the URL
  const { projectID } = useParams(); 

  // Find the specific item matching the URL path
  const project = dataportfolio.find(i => i.projectID === projectID);

  if (!project) {
    return <h2>Page Not Found</h2>;
  }

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {project.projectName} </title>{" "}
        </Helmet>
        <br></br>
         <h1 className="display-4 mb-4"> {project.projectName} </h1>{" "}
      
        <div className="summary-container">
          <div className="summary-box left-box">
            <img src={project.finalImg} alt="" />
          </div>
          <div className="summary-box mid-box">
            <img src={project.wipImg1} alt="" />
            <img src={project.wipImg2} alt="" />
          </div>
          <div className="summary-box right-box">
            <h3>Tools</h3>
            <p>{project.tools}</p>
            <h3>Description</h3>
            <p>{project.fullDescription}</p>
            <h3>Takeaways</h3>
            <p>{project.takeaways}</p>
          </div>

        </div>

      </Container>
    </HelmetProvider>
  );

}