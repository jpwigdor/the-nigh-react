import React, { Component } from "react";
import styled from "styled-components";

class Main extends Component {
	render() {
		return (
			<MainWrapper>
				MAIN COMPONENT
				<h2>News Placemarker</h2>
				<h2>Who are we?</h2>
				<h2>Setlists for our shows</h2>
				<h2>What do we listen to?</h2>
			</MainWrapper>
		);
	}
}

const MainWrapper = styled.div`
	background: red;
`;

export default Main;
