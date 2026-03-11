import About from './components/About/About'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Statistic from './components/Statistics/Statistic'

function Layout() {
  return (
    <div>
      <Header />
      <Hero/>
      <Statistic />
      <About/>
    </div>
  )
}

export default Layout