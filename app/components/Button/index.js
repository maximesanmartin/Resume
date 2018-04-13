import styled from 'styled-components'

export default styled.button`
  padding: 0.25em 1em;
  font-size: 1em;
  background-color: ${(props) => props.theme.primary.c};
  color: ${(props) => props.theme.primary.bg};
  box-shadow: none;
  outline: 0;
  border: 2px solid ${(props) => props.theme.primary.bg};
  border-radius: 3px;

  &:hover, &:focus {
    background-color: ${(props) => props.theme.primary.bg};
    color: ${(props) => props.theme.primary.c};
  }
`
