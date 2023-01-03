import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
})

export const SearchField = styled('div', {
  display: 'flex',
  width: '100%',
  height: 'calc(100vh - 15rem)',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '1rem',
  gap: '0.5rem',

  'p': {
    fontSize: '$xl',
    color: '$gray300',
    fontWeight: 'bold'
  }
})

export const InputText = styled('input', {
  height: '3rem',
  width: '50%',
  padding: '0 0.5rem',
  backgroundColor: '$gray800',
  color: '$gray300',
  fontSize: '$xl',

  border: 0,
  borderRadius: 8,

  '&:focus': {
    outline: '1px solid $red500',
  },

  '&:hover&:not(:focus)': {
    border: '1px solid $gray300',
  },
})

