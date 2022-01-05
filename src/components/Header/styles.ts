import styled from "styled-components";

export const Container = styled.header`
background: var(--secondary);
`

export const Content = styled.div`
max-width: 1120px;
margin: 0 auto;
padding: 2rem 1rem 12rem;
display: flex;
justify-content: space-between;
align-items: center;

button {
  background: var(--secondary-light);
  color: white;
  border: none;
  padding: 0 2rem;
  border-radius: .25rem;
  height: 3rem;
  transition: filter .2s;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(.05rem);
  }
}
`
