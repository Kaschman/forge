
const colorValues = {
  ink: '#212b36',
  sky: '#dfe3e8',
  skyDark: '#c4cdd5',
  skyLight: '#f4f6f8',
}

export default colorValues

export type Color = $Keys<typeof colorValues>
