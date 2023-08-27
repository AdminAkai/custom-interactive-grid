import styled from 'styled-components'

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const MainGrid = styled.div<{ $gridPanels: number }>`
  height: 100%;
  width: 100%;
  position: absolute;
  display: grid;
  background-color: #980000;
  grid-template-columns: ${({ $gridPanels }) => `repeat(${$gridPanels}, 1fr)`};
  grid-template-rows: ${({ $gridPanels }) => `repeat(${$gridPanels}, 1fr)`};
  gap: 2px;
`
