import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import './index.styles.scss'

const Wrapper = () => {
  return (
    <div className="Wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
export default Wrapper;