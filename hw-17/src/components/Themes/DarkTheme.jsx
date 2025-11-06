import { createTheme } from '@mui/material'

const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
     primary: {
      main: '#010014',
      contrastText: '#f5f1f1ff'
    },
    background: {
      default: '#07043aff'   
    }
  }
})

export default DarkTheme
