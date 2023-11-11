import React, { useEffect, useState } from "react";
import { Tab, Container, Row, Col, TabContainer, TabContent, TabPane } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/images/color-sharp2.png"

export const MyProjects = () =>{
    const projects = [
        {
            title: "Loja_Rosa",
            description: "Ecommerce",
            imgUrl: "projImg1",
        },
        {
            title:"Fliperama Game",
            description: "Jogo feito em pygame",
            imgUrl: "projImg2",
        },
        
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum</p>
                        <TabContainer id="projects-tabs" defaultactiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                Tab 3
                                </Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <TabContent>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <TabPane eventKey="second">
                                        Lorem Ipsum
                                </TabPane>
                                <TabPane eventKey="third">Lorem Ipsum</TabPane>
                            </TabContent>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right"src={colorSharp2}></img>
        </section>
    )
}