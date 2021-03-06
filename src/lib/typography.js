import Typography from 'typography'
import '../fonts/fonts.css'
import colors from '../lib/colors'

export const fonts = {
  walsheim: 'GT Walsheim Regular',
  walsheimLight: 'GT Walsheim Light',
  walsheimBold: 'GT Walsheim Bold',
  regular: 'FreightText W01 Book',
  regularItalic: 'FreightText W01 Book Italic',
  bold: 'FreightText W01 Bold',
  boldItalic: 'FreightText W01 Bold Italic',
  regularSans: 'FreightSans W03 Book',
  regularSansItalic: 'Freight Sans W03 Book Italic',
  lightSans: 'Freight Sans W03 Light',
  boldSans: 'Freight Sans W03 Bold',
  monoRegular: 'IBM Plex',
}

const typography = new Typography({
  baseFontSize: '22px',
  baseLineHeight: 1.45,
  headerLineHeight: 1.4,
  headerFontFamily: [fonts.walsheim, 'sans-serif'],
  bodyFontFamily: [fonts.regular, 'serif'],
  headerColor: '#EDF1F0',
  bodyColor: '#7990A2',

  overrideStyles: ({ rhythm }) => ({
    h1: {
      color: colors.lightGrey,
      fontFamily: fonts.walsheim,
      fontSize: rhythm(2.1),
      letterSpacing: 'normal',
    },
    h2: {
      color: colors.white,
      fontFamily: fonts.regular,
      fontSize: rhythm(1.3),
      fontWeight: 'normal',
    },
    h3: {
      color: colors.white,
      fontFamily: fonts.lightSans,
      fontSize: rhythm(1),
      letterSpacing: 'normal',
    },
    h4: {
      fontFamily: fonts.walsheimLight,
      marginBottom: rhythm(1),
      letterSpacing: 'normal',
    },
    h5: {
      fontSize: rhythm(0.6),
      lineHeight: rhythm(0.8),
    },
    'h5, h6': {
      fontWeight: '300',
      marginTop: 0,
      fontFamily: fonts.regularSans,
      WebkitFontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
    },
    'h1,h2,h3,h4': {
      lineHeight: 1.25,
      marginTop: rhythm(1),
      marginBottom: rhythm(0.6),
      WebkitFontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
    },
    h6: {
      color: colors.lightGrey,
    },
    p: {
      maxWidth: '660px',
      margin: '0 auto',
      lineHeight: '1.8em',
      fontSize: rhythm(0.7),
      marginBottom: rhythm(1 / 2),
      WebkitFontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
    },
  }),
})
// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
