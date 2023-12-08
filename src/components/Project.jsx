import proj1 from "../assets/img/jwd.jpg";
import proj2 from "../assets/img/badgesystem.jpg";
import proj3 from "../assets/img/computer.jpg";
import proj4 from "../assets/img/kuesioner.png";
import proj5 from "../assets/img/sistemrawatinap.png";
import proj6 from "../assets/img/bot-wa.png";
import proj7 from "../assets/img/linux.jpg";
import proj8 from "../assets/img/database.jpg";
import proj9 from "../assets/img/finalexam.jpg";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import "animate.css";
import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Project = () => {
  const sertifikat = [
    {
      Judul: "Sertifikat Pelatihan",
      desc: "Junior Web Developer",
      imgUrl: proj1,
      urlProj:
        "https://digitalent.kominfo.go.id/cek-sertifikat?registrasi=19362591110-20",
    },
    {
      Judul: "Operating Systems Basics",
      desc: "Badge by cisco",
      imgUrl: proj2,
      urlProj:
        "https://www.credly.com/badges/f94ea99f-484b-4fb3-a4d4-d05a13dd9401/public_url",
    },
    {
      Judul: "Computer Hardware Basics",
      desc: "Badge by cisco",
      imgUrl: proj3,
      urlProj: "https://blackring8.github.io/GilangPrakoso-Profile/",
    },
    {
      Judul: "NDG Linux Unhatched",
      desc: "by cisco",
      imgUrl: proj7,
    },
    {
      Judul: "Course Completion: Database Design",
      desc: "by oracle academy",
      imgUrl: proj8,
    },
    {
      Judul: "Final Exam Completion: Database Design",
      desc: "by oracle academy",
      imgUrl: proj9,
    },
  ];
  const project = [
    {
      Judul: "Sistem Informasi Kuesioner Prodi",
      desc: "Development & Design",
      imgUrl: proj4,
    },
    {
      Judul: "Sistem Rawat Inap",
      desc: "Project Pelatihan Junior Web Developer",
      imgUrl: proj5,
      urlProj: "https://jwd.42web.io/",
    },
    {
      Judul: "Chatting Bot Whatsapp",
      desc: "Chatgpt",
      imgUrl: proj6,
    },
  ];

  return (
    <section className="project" id="portofolio">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              <AnimationOnScroll animateIn="animate__fadeIn">
                <h2>Portofolio</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav
                    variant="pills"
                    className="nav-pills mb-5 justify-content-center align-items-center"
                    id="pills-tab"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">Sertifikat</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Row>
                          {sertifikat.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </AnimationOnScroll>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Row>
                          {project.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </AnimationOnScroll>
                      <p>Coming Soon..</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </AnimationOnScroll>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
