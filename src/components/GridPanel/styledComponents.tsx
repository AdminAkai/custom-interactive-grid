import styled from 'styled-components'

export const GridPanelBox = styled.div`
  display: flex;
  background-color: #1a1a1a;
  grid-area: input;
  grid-column: auto;
  grid-row: auto;
  place-self: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: box-shadow 1s ease-in-out;

  &:hover {
    box-shadow: 2px 2px 4px black;
    background-color: #980000;
    transition: background-color 25ms ease-in-out;
  }
`