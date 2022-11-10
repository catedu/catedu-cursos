import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Header from './Header'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import CoursesView from './CoursesView'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        CATEDU, Gobierno de Aragón
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ my: 4 }}>
          <CoursesView />
          <Copyright />
        </Box>
      </Container>
    </>
  )
}
