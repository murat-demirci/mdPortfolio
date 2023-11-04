import './assets/css/app.css'
import GithubCard from './components/cards/GithubCard'
import LinkedinCard from './components/cards/LinkedinCard'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className='app-container'>
        <GithubCard />
        <LinkedinCard/>
      </div>
    </>
  )
}

export default App
