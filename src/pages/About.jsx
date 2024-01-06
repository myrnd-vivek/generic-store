import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { styled } from "styled-components";

const About = () => {
	return (
		<Wrapper>
			<Container>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam veniam, accusamus id eaque ex reprehenderit suscipit atque perspiciatis laudantium neque fuga vitae provident sit sint! Exercitationem dolor ab labore nobis amet officia ipsum, in earum consequuntur a distinctio modi quibusdam. Distinctio maxime recusandae tenetur quibusdam, veritatis cupiditate cum officiis, error modi praesentium suscipit quasi! Distinctio culpa aperiam nihil eius vitae quisquam asperiores deleniti earum nesciunt sunt incidunt molestiae voluptates aliquid, numquam quam, assumenda magnam itaque doloribus. Sunt nobis, qui aliquid sequi quaerat praesentium vel quod voluptatibus, earum impedit voluptate culpa veritatis quia quam ab perspiciatis rem maxime. Laboriosam illum sit obcaecati aliquid aut explicabo, est ex dolore corrupti doloremque illo unde beatae accusantium quisquam in maiores reprehenderit neque quia ipsam necessitatibus assumenda sapiente. Iure, minus alias. Molestias amet aliquid consequuntur quia sunt perspiciatis ullam harum ad vel ut, illo, molestiae tempora error? Animi officia eum minima veniam porro dolor deleniti adipisci, alias esse, impedit repellat, asperiores quo expedita voluptas facilis et. Numquam mollitia laudantium sit nisi officia. Cum debitis aspernatur expedita quis impedit dolores aliquam dolorum non, nesciunt quam quidem, aliquid tempora, laudantium eum aut fugiat molestiae harum animi libero ex dolorem error? Suscipit cum repellendus eius eligendi reprehenderit natus.
                </p>
              </Col>
						</Row>
					</Container>
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

	max-width: 50%;
	margin: 0 auto;
`;

export default About;
