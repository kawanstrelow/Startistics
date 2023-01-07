import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
})

export const SearchField = styled('form', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '3rem',
  gap: '0.5rem',
  marginBottom: '2rem',

  'p': {
    fontSize: '$xl',
    color: '$gray300',
    fontWeight: 'bold'
  },

  'button': {
    border: 0,
    height: '3rem',
    width: '6rem',
    borderRadius: 8,

    fontSize: '$lg',
    fontWeight: 'bold',
    color: 'white',

    backgroundColor: '$red500'
  }
})

export const InputText = styled('input', {
  height: '3rem',
  width: '50%',
  padding: '0 1rem',
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

  '&::placeholder': {
    color: '$gray700',
    fontWeight: 'bold',
  }
})

