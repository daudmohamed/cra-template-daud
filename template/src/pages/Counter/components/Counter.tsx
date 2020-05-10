import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
	decrement,
	increment,
	incrementByAmount,
	selectCount,
} from '../ducks/counterSlice';
import {incrementAsyncSaga} from "../sagas/counter.saga";
import styled from "styled-components";
import Button from "../../../components/button/Button";

const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	
	&:not(:last-child) {
		margin-bottom: 16px;
	}
`;

const Value = styled.span`
	font-size: 78px;
	padding-left: 16px;
	padding-right: 16px;
	margin-top: 2px;
	font-family: 'Courier New', Courier, monospace;
`;



const AsyncButton = styled.button`
	composes: button;
	position: relative;
	margin-left: 8px;
	
	&:after {
		content: "";
		background-color: rgba(112, 76, 182, 0.15);
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		opacity: 0;
		transition: width 1s linear, opacity 0.5s ease 1s;
	}
	
	&:active:after {
		width: 0%;
		opacity: 1;
		transition: 0s
	}
`;

const Input = styled.input`
	font-size: 32px;
	padding: 2px;
	width: 64px;
	text-align: center;
	margin-right: 8px;
`;

const Counter = ( ) => {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState('2');

	return (
		<div>
			<Row>
				<Button
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
				>
					+
				</Button>
				<Value className={'value'}>{count}</Value>
				<Button
					className={'button'}
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					-
				</Button>
			</Row>
			<Row>
				<Input
					aria-label="Set increment amount"
					value={incrementAmount}
					onChange={e => setIncrementAmount(e.target.value)}
				/>
				<Button
					onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
				>
					Add Amount
				</Button>
				<AsyncButton
					onClick={() => dispatch(incrementAsyncSaga(Number(incrementAmount) || 0))}
				>
					Add Async
				</AsyncButton>
			</Row>
		</div>
	);
};


export default Counter;