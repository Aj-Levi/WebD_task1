import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ContentDisplay from './components/ContentDisplay'

const App = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  console.log(BACKEND_URL);
  return (
    <div>
        <Navbar />
        <HeroSection />
        <ContentDisplay BACKEND_URL={BACKEND_URL} />
    </div>
  )
}

export default App