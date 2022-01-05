import styled from "styled-components";

export const Container = styled.div`
margin-top: 4rem;

table {
  width: 100%;
  border-spacing: .5rem;

  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem;
    border: none;
    background: var(--shape);
    font-weight: 400;
    color: var(--text-body);
    border-radius: .25rem;

    &.title {
      color: var(--text-title);
    }

    &.deposit {
      color: var(--tertiary);
    }

    &.withdraw {
      color: var(--primary);
    }
  }
}
`;