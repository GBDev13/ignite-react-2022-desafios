import styled from "styled-components";

export const SearchInputContainer = styled.form`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;

    h3 {
      font-size: ${({ theme }) => theme.textSizes["title-title-s"]};
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }

    span {
      font-size: ${({ theme }) => theme.textSizes["text-text-s"]};
      color: ${({ theme }) => theme.colors["base-span"]};
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors["base-input"]};
    border: 1px solid ${({ theme }) => theme.colors["base-border"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    transition: 0.4s;

    &:focus {
      border-color: ${({ theme }) => theme.colors["brand-blue"]};
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors["base-label"]};
    }
  }
`;
