import * as React from 'react'
import styled from 'styled-components'

import Colors from '../../../styles/colors'
import { BaseCellStyles } from './BaseCell'

// Header Cell uses some Base Cell styles - can't extend as Base Cell is a <td>
const Cell = styled.th`
  border-bottom: 1px solid ${Colors.skyDark};
  border-top: 1px solid ${Colors.sky};
  color: ${Colors.ink};
  font-weight: 400;
  padding: ${BaseCellStyles.padding};
  text-align: ${BaseCellStyles.textAlign};
  transition: ${BaseCellStyles.transition};
  white-space: ${BaseCellStyles.whiteSpace};
`

type Props = {
  content: string,
}

const HeaderCell = (props: Props) => (
  <Cell className="HeaderCell">
    {props.content}
  </Cell>
)

export default HeaderCell
