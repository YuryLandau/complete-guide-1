import '../styles/globals.css'
import NavBar from './src/components/Navbar'

function MyApp({ Component, pageProps }) {
  return( 
  <>
    <NavBar newClass="topnavbar"/>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
