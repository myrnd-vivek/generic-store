import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./Footer.css";

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__title">The Generics</div>
			<div className="footer__icons">
				<div>
					<i className="bi bi-youtube"></i>
					<i className="bi bi-spotify"></i>
					<i className="bi bi-facebook"></i>
				</div>
			</div>
		</footer>
	);
};
