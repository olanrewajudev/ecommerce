import Footer from './Footer'
import Header from './Header'
// eslint-disable-next-line react/prop-types
const Layouts = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layouts
