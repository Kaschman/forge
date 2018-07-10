import styled from 'styled-components'

import Colors from '../../../styles/colors'

// Export for use in other cell types, like <td>
export const BaseCellStyles = {
  borderBottom: `1px solid ${Colors.skyLight}`,
  padding: '1.6rem',
  textAlign: 'left',
  transition: 'background-color 0.2s ease-in-out',
  whiteSpace: 'nowrap',
}

const BaseCell = styled.td`
  border-bottom: ${BaseCellStyles.borderBottom};
  padding: ${BaseCellStyles.padding};
  text-align: ${BaseCellStyles.textAlign};
  transition: ${BaseCellStyles.transition};
  white-space: ${BaseCellStyles.whiteSpace};
`

export default BaseCell
