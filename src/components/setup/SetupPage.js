import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const SetupPage = () => {
  return (
    <Container className="mt-2">
      <h3>Setup</h3>
      <Card className="mt-4">
        <Card.Header>The Challenge!</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>
              Using the provided (paginated) API, find the{" "}
              <b>average cubic weight</b> for all products in the{" "}
              <b>"Air Conditioners"</b> category.
            </p>
            <p>
              Cubic weight is calculated by multiplying the length, height and
              width of the parcel. The result is then multiplied by the industry
              standard cubic weight conversion factor of 250.
            </p>
            <h4>API Endpoint</h4>
            <pre>
              http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/api/products/1
            </pre>

            <h4>Cubic Weight Example</h4>
            <p>
              A parcel measuring 40cm long (0.4m) x 20cm high (0.2m) x 30cm wide
              (0.3m) is equal to 0.024 cubic metres.
              <br />
              Multiplied by the conversion factor of 250 gives a cubic weight of
              6kg.
            </p>
            <pre>
              {" "}
              0.4m x 0.2m x 0.3m = 0.024m<sup>3</sup>
              0.024m<sup>3</sup> x 250 = 6kg
            </pre>

            <h4>Assume that</h4>
            <ul>
              <li>All dimensions are provided in centimetres.</li>
              <li>All weights are provided in grams.</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Header>Boilerplate</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>
              I decided to use Create React App as it provides all the necessary
              boilerplate to get a React JS project up and running quickly
            </p>
            <p>
              In the real world you could setup webpack and babel manually and
              configure it to meet your own specifications
            </p>
            <p>
              To get started creating this app you need to have npm installed,
              then follow the below steps in powershell or command prompt on
              Windows
            </p>
            <ul>
              <li>
                Create React App Project, entry: npx create-react-app
                project-name
              </li>
              <li>Change directory into the project folder</li>
              <li>
                Install Bootstrap, entry: npm install react-bootstrap bootstrap
              </li>
              <li>Install axios for fetching data, npm install --save axios</li>
              <li>
                Install React Router Dom for dom navigation, npm install --save
                react-router-dom{" "}
              </li>
              <li>
                Launch VS Code using code . or use your favourite code editor
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Header>Project Setup</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>
              In the project src directory you only need to keep the index.js
              file
            </p>
            <p>Inside src I created the following folders</p>
            <ul>
              <li>apis to hold reusable instances of axios configurations</li>
              <li>
                components - this directory only has one file, App.js but also
                the following folders
                <ul>
                  <li>
                    common - holds shared components such as headers / carousels
                    etc.
                  </li>
                  <li>home - holds components related to the home page </li>
                  <li>setup - holds components related to the setup page</li>
                </ul>
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Header>Boilerplate</Card.Header>
        <Card.Body>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SetupPage;
