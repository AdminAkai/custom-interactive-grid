import { FC, memo } from 'react'

import { GridPanelBox } from './styledComponents'

const GridPanel: FC = () => {
  return (
    <GridPanelBox />
  )
}

const memoizedGridPanel = memo(GridPanel)

export default memoizedGridPanel