import { useParams } from 'react-router-dom';
import { dataportfolio } from '../../content_option';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

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
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> {project.projectName} </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

      </Container>
    </HelmetProvider>
  );

}