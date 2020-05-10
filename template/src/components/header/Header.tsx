import styled from "styled-components";
import React, { useState } from 'react';
import {useSelector} from "react-redux";
import {DarkModeState, selectDarkMode} from "../../ducks/darkMode/DarkModeSlice";

type Props = {
	children: Array<JSX.Element> | JSX.Element
}

const Header = (props: Props) => {
	const darkMode = useSelector(selectDarkMode);
	return (
		<AppHeader isOn={darkMode.isOn}>
			{props.children}
		</AppHeader>
	);
};

const AppHeader = styled.header<DarkModeState>`
  background-color: ${props => props.isOn ? props.theme.mode.dark : props.theme.mode.light};
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default Header;