import { FC } from 'react'

import { GridContainer, MainGrid } from './styledComponents'
import GridPanel from 'components/GridPanel'

const Grid: FC = () => {
  const allGrids = Array(144).fill(null)

  return (
    <GridContainer>
      <MainGrid $gridPanels={12}>
        {allGrids.map((_, index) => (
          <GridPanel key={index} />
        ))}
      </MainGrid>
      {/* <div
      style={{
        width: '480px',
        height: '480px',
        zIndex: 2,
        backgroundColor: 'white',
      }}
    >
      Red and Color
    </div> */}
    </GridContainer>
  )
}

export default Grid
