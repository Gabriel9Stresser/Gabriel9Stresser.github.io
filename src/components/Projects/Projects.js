import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fiotec from "../../Assets/Projects/fiotec.jpeg";
import cromai from "../../Assets/Projects/cromai.jpeg";
import art from "../../Assets/Projects/art.jpeg";
import virtus from "../../Assets/Projects/virtus.jpeg";
import ds from "../../Assets/Projects/ds.jpeg";
import phast from "../../Assets/Projects/phast.jpeg";
import cpm from "../../Assets/Projects/cpm.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">trabalhos </strong>recentes
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão os projetos mais recentes em que participei:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={art}
              isBlog={false}
              title="ds.art"
              description="Aplicativo mobile para geração de arte e impulsionamento em redes sociais, desenvolvido em react native, firebase e node. Disponível em ios e android."
              demoLink="https://play.google.com/store/apps/details?id=com.datasales.feeds.io&hl=en_US"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ds}
              isBlog={false}
              title="Datasales"
              description="Produto que conta com plataforma web, bots utilizando IA e sistema integrado com redes sociais."
              demoLink="https://datasales.io/solucoes/dsmarketing/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phast}
              isBlog={false}
              title="Phast"
              description="Aplicativo internacional feito em react native para fisioterapeutas acompanhar o desenvolvimento do seu paciente com relatórios e indicadores de tratamento."
              demoLink="https://phast.com.br/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cpm}
              isBlog={false}
              title="CPM Medita"
              description="Aplicativo voltado a saúde mental com praticas de meditação, vídeos com diversos temas e dashboard integrado para gerenciar as informações"
              demoLink="https://cpmindfulness.com.br/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fiotec}
              isBlog={false}
              title="Fiotec - Zelo"
              description="Produto composto por 3 aplicativos mobile React Native, um painel web React e um backend com docker em node. Voltado para idosos, familia e cuidadores de idoso ter um maior controle e segurança ao decorrer do acompanhamento."
              demoLink="https://www.fiotec.fiocruz.br/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virtus}
              isBlog={false}
              title="Virtus Pay"
              description="Aplicação para o mercado financeiro com o parcelamento de boletos, integrações com instituições bancárias e diversas landing pages feitas"
              demoLink="https://www.usevirtus.com.br/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cromai}
              isBlog={false}
              title="Cromai"
              description="Aplicação do setor agro que automatiza algumas funções necessárias para a análise de imagens em grande escala."
              demoLink="https://www.cromai.com/daninhas"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
