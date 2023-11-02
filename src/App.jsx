import './App.css'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import SideBar from './components/sidebar/SideBar'
import Navbar from './components/navbar/Navbar'



function App() {

  return (
    <>
      <Container maxWidth="xl" >
        <Navbar/>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <SideBar/>
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          <div style={{width:'100%',backgroundColor:'red',height:'100vh'}}></div>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App
