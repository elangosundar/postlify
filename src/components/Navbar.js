import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 95%;
	z-index: 99;
	padding: 0.7rem 1.5rem;

	input {
		width: 500px;
	}

	.menu li {
		padding: 5px;
	}

	.toggle-navhandler {
		display: none;
	}

	.logo span {
		position: relative;
		top: 1px;
	}

	ul {
		list-style: none;
		display: flex;
		position: relative;
		top: 2px;
	}

	li svg {
		margin-right: 1.7rem;
		position: relative;
		top: 3px;
	}

	img {
		position: relative;
		top: 3px;
	}

	@media screen and (max-width: 1093px) {
		.toggle-navhandler {
			display: block;
		}
	}

	@media screen and (max-width: 1000px) {
		input {
			width: 400px;
		}
	}

	@media screen and (max-width: 850px) {
		input {
			width: 280px;
		}
	}

	@media screen and (max-width: 500px) {
		.toggle-navhandler {
			display: none;
		}

		li svg {
			width: 30px;
			height: 30px;
			margin-right: 1.7rem;
			position: relative;
			top: 0px;
		}
	}
`;

const Navbar = () => {

	return (
		<Wrapper>
			<div className="logo flex-row">
				<span>
					<Link to="/"> Postlify </Link>
				</span>
			</div>
			<div className="right">
				<ul className="menu">
					<li>
						<Link to='/'>Github</Link>
					</li>
					<li>
						<Link to='/'>Twitter</Link>
					</li>
					<li>
						<Link to='/'>More</Link>
					</li>
				</ul>
			</div>
		</Wrapper>
	);
};

export default Navbar;
