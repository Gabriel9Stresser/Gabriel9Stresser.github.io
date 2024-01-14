import React from "react";
import Card from "react-bootstrap/Card";
import { MdOutlineSkateboarding } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import { CgGames } from "react-icons/cg";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Fala ae pessoal, me chamo{" "}
            <span className="purple">Gabriel Stresser </span>
            sou de <span className="purple"> São Paulo, Brasil.</span>
            <br /> Sou formado em Engenharia Mecatrônica, já vivenciei diversas
            fases da contrução de um produto e venho me especializando no
            desenvolvimento mobile
            <br />
            Além disso, atualmente trabalho como desenvolvedor de software na
            Datasales.
            <br />
            <br />
            fora a codificação, algumas outras atividades que adoro fazer!
          </p>
          <ul>
            <li className="about-activity">
              <CgGames /> Jogar games
            </li>
            <li className="about-activity">
              <MdOutlineSkateboarding /> Andar de skate
            </li>
            <li className="about-activity">
              <SiYourtraveldottv /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Seja a mudança que você quer ver no mundo."{" "}
          </p>
          <footer className="blockquote-footer">Mahatma Gandhi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
