import React from 'react';
import Counter from "./components/Counter";
import Page from "../Page";
import Button from "../../components/button/Button";
import {useHistory} from "react-router";
import Header from "../../components/header/Header";

const CounterPage = () => {
	const history = useHistory();
	return (
		<Page>
			<Header>
				<Counter/>
			</Header>
			<Button
				onClick={() => history.push("/")}
			>
				Go to home.
			</Button>
		</Page>
	);
}

export default CounterPage;