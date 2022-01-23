import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
	h2 {
		color: var(--text-title);
		font-size: 1.5rem;
		margin-bottom: 2rem;
	}

	input {
		width: 100%;
		padding: 0 1.5rem;
		height: 4rem;
		border: 1px solid #d7d7d7;
		border-radius: 0.25rem;
		background: #e7e9ee;
		font-weight: 400;
		font-size: 1rem;

		&:active {
			outline: 1px solid greenyellow;
		}

		&:focus {
			outline: 1px solid var(--secondary);
		}

		&::placeholder {
			color: var(--text-body);
		}

		& + input {
			margin-top: 1rem;
		}
	}

	button[type="submit"] {
		width: 100%;
		padding: 0 1.5rem;
		height: 4rem;
		background: var(--tertiary);
		color: white;
		border-radius: 0.25rem;
		border: none;
		font-size: 1rem;
		margin-top: 1.5rem;
		font-weight: 600;
		transition: filter 0.2s;

		&:hover {
			filter: brightness(97%);
		}
	}
`;

export const TransactionTypeContainer = styled.div`
	margin: 1rem 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.5rem;
	span {
		display: inline-block;
		margin-left: 1rem;
		font-style: 1rem;
		color: var(--text-body);
	}
`;

interface TransactionTypeProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33CC95",
  red: "#E52E4D"
}

export const TransactionTypeButton = styled.button<TransactionTypeProps>`
	height: 4rem;
	border: 1px solid #d7d7d7;
	border-radius: 0.25rem;
	background: ${(props) => (props.isActive ? transparentize(0.8, colors[props.activeColor]) : "transparent")};
	display: flex;
	align-items: center;
	justify-content: center;
	transition: border-color 0.2s;

	&:hover {
		border-color: ${darken(0.1, "#d7d7d7")};
	}
`;
