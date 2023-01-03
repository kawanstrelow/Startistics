import { styled } from "../../../styles"

export const HeaderContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  minWidth: '50rem',
  minHeight: '5rem',
  color: '$gray300',

  'h1': {
    color: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    background: '-webkit-linear-gradient(180deg, $red500 0%, white 100%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },

  'nav': {
    display: 'flex',
    gap: '1rem',

    'span': {
        fontSize: '$md'
    }
  }
})