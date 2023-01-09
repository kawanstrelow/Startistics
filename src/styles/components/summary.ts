import { styled } from '..'

export const SummaryContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '70%',
  gap: '1rem',
})

export const SummaryItems = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '15rem',
  height: '15rem',
  
  
  backgroundColor: '$gray800',
  color: '$white',
  borderRadius: 8,
  fontWeight: 'bold',
  fontSize: '$xl',
  textAlign: 'center',
  cursor: 'pointer',

})