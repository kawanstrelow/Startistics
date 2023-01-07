import { styled } from '..'

export const VideoCardContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  gap: '2rem',
  width: '75%',

  padding: '1.5rem 0rem',
  borderBottom: '1px solid $gray800',
})

export const ImageContainer = styled('div', {
  height: 200,
  width: 360,
  overflow: 'hidden',
  borderRadius: 12,
})

export const InfoContainer = styled('div', {

  width: 500,

  'strong': {
    color: '$red200'
  },

  '> h1': {
      fontSize: '$xl'
  },

  '> p': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      marginTop: '0.25rem',
  }
})