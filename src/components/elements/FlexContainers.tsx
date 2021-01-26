import styled from 'styled-components'
// TODO: Fix any type
export const FlexColumn: any = styled.div`
  display: flex;
  flex-direction: column;
`
FlexColumn.centerHorizontally = styled(FlexColumn)`
  justify-content: center;
`
FlexColumn.centerVertically = styled(FlexColumn)`
  align-items: center;
`
FlexColumn.center = styled(FlexColumn)`
  align-items: center;
  justify-content: center;
`

export const FlexRow: any = styled.div`
  display: flex;
  flex-direction: row;
`
FlexRow.centerVertically = styled(FlexRow)`
  justify-content: center;
`
FlexRow.centerHorizontally = styled(FlexRow)`
  align-items: center;
`
FlexRow.center = styled(FlexRow)`
  justify-content: center;
  align-items: center;
`
