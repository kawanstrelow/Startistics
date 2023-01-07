import { styled } from '..'

export const FilterBoxContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
//   alignItems: 'center',
  justifyContent: 'center',
  gap: '0.25rem',
  width: '55%',

  paddingBottom: '2rem',
  borderBottom: '1px solid $gray800',

  'select': {
    backgroundColor: '$gray800',
    color: '$gray300',
    border: 0,
    borderRadius: 6,
    padding: '0.3rem',
  }
})