import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UM POUCO <span className="purple"> SOBRE </span> MIM
            </h1>
            <p className="home-about-body">
              Sou formado em Engenharia Mecatrônica e possuo uma longa
              experiência com Desenvolvimento de Software.
              <br />
              <br />
              Sou fluente em linguagens clássicas como
              <i>
                <b className="purple"> Javascript, C++ e Python. </b>
              </i>
              <br />
              <br />
              Nesse período participei de times excepicionais em&nbsp;
              <i>
                <b className="purple">Fintechs, Agtechs e Healthtechs. </b> Tive
                a oportununidade de expandir alguns conhecimentos em{" "}
                <b className="purple">Inteligência Artificial.</b>
              </i>
              <br />
              <br />
              Sempre que possível, desenvolvo projetos próprios com{" "}
              <b className="purple">Node.js</b> e
              <i>
                <b className="purple">
                  {" "}
                  Bibliotecas e Frameworks modernos em Javascript
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js, Next.js e React-Native</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ME SIGA NAS REDES</h1>
            <p>
              Sinta-se <span className="purple">livre </span>para entrar em
              contato
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Gabriel9Stresser"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gabriel-augusto-soler-stresser-366719100/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
