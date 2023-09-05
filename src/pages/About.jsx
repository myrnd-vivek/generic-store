import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { styled } from "styled-components";

const About = () => {
	return (
		<Wrapper>
			<Container fluid>
				<Row>
					<Header />
				</Row>
				<Row>
					<h1 className="title">About</h1>
					<Container>
						<Row>
              <Col>
                <img
                  src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
                  alt="img"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Similique reprehenderit
                  pariatur vero sunt consequuntur sequi,
                  dignissimos quas aut eligendi, omnis rerum
                  facilis soluta debitis nulla et impedit,
                  aspernatur perspiciatis molestiae tempore
                  voluptatem. Eligendi quo, nostrum maxime, eos
                  consequuntur eum ullam itaque adipisci alias,
                  dignissimos facilis nisi? Inventore laboriosam
                  sequi eum, tempora natus sapiente repudiandae,
                  ipsam nulla dolorem impedit minima. Praesentium
                  ab voluptas porro fugit expedita soluta
                  voluptate aperiam suscipit! Voluptatum esse
                  corrupti perferendis aliquam! Harum temporibus
                  minus fuga tempore animi quasi amet, distinctio
                  iusto itaque adipisci sunt numquam at, laborum
                  eveniet sint consequuntur voluptates odio
                  explicabo eligendi? A veniam tempore quasi,
                  aliquid corrupti architecto dolorem molestiae,
                  deleniti temporibus, explicabo eaque consectetur
                  maxime natus exercitationem reiciendis cum
                  fugiat delectus repellat alias doloribus
                  perspiciatis veritatis. Veritatis, ut recusandae
                  sint, eveniet tempore quaerat asperiores saepe
                  deleniti magni quo quas praesentium voluptatum
                  tenetur amet consectetur ab sequi eum distinctio
                  in blanditiis accusamus! Temporibus nihil
                  nesciunt deserunt omnis, voluptatem est atque,
                  assumenda impedit minima labore et earum eum
                  esse autem! Id doloribus, quisquam, vel
                  laboriosam provident adipisci corporis assumenda
                  facilis dicta, praesentium incidunt consectetur
                  explicabo earum maiores? Esse architecto
                  voluptas aliquid labore minus doloremque
                  consequatur, provident commodi unde sed, optio
                  tempora nihil quasi voluptatem voluptate?Lorem
                  ipsum dolor sit amet consectetur adipisicing
                  elit. Non alias nobis quos quaerat ad ratione,
                  nam quidem. Fugiat impedit, laudantium quam
                  iusto fuga minus facere. A accusantium omnis
                  eius? Exercitationem necessitatibus blanditiis
                  quos, eius voluptate similique facilis quae
                  reiciendis aspernatur! Unde doloremque veritatis
                  laboriosam asperiores qui aliquam voluptate
                  consequuntur rem!
                </p>
              </Col>
						</Row>
					</Container>
				</Row>
				<Row>
					<Footer />
				</Row>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.title {
		text-align: center;
		padding: 20px;
		font-size: 30px;
	}

	img {
		float: left;
		margin: 20px 50px;
		border-radius: 50%;
		width: 200px;
		height: 200px;
	}
`;

export default About;
