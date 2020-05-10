import React from 'react';
import SVG from '../../assets/logo.svg';
import styled, {keyframes} from "styled-components";

type SvgProps = {
	className?: string,
	Component: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Svg = ({ className, Component }: SvgProps) => {
	return(
		<Component className={className} />
	);
};

const AppLogoo = styled(Svg)`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${rotate} 20s linear infinite;
  }
`;

export default AppLogoo;