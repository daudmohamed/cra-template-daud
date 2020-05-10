import React from 'react';
import Page from "../Page";
import Svg from "../../components/svg/Svg";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import Button from "../../components/button/Button";
import {useDispatch} from "react-redux";
import { toggleDarkMode } from '../../ducks/darkMode/DarkModeSlice';
import Header from "../../components/header/Header";
import Logo from '../../assets/logo.svg';


const Container = styled.div`
  text-align: center;
`;

const Link = styled.a`
  color: #61dafb;
`;

const HomePage = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	return (
		<Page>
			<Container className="App">
				<Header>
					<Svg Component={Logo}/>
					<Button
						onClick={() => dispatch(toggleDarkMode())}
					>Change theme</Button>
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<span>
					  <span>Learn </span>
					  <Link
						  href="https://reactjs.org/"
						  target="_blank"
						  rel="noopener noreferrer"
					  >
						React
					  </Link>
					  <span>, </span>
					  <Link
						  href="https://redux.js.org/"
						  target="_blank"
						  rel="noopener noreferrer"
					  >
						Redux
					  </Link>
					  <span>, </span>
					  <Link
						  href="https://redux-toolkit.js.org/"
						  target="_blank"
						  rel="noopener noreferrer"
					  >
						Redux Toolkit
					  </Link>
					  <span> and </span>
					  <Link
						  href="https://react-redux.js.org/"
						  target="_blank"
						  rel="noopener noreferrer"
					  >
						React Redux
					  </Link>
					</span>
				</Header>
			</Container>
			<Button
				onClick={() => history.push("/counter")}
			>
				Go to Counter.
			</Button>
		</Page>
	);
}

export default HomePage;