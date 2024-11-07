
import { Provider } from "react-redux"
import Content from "./Content"
import Header from "./Header"
import store from "./store"
//import CartItem from "./CartItem"

function App() {
  return(
    <Provider store={store}>
    <Header />
    <Content />
    {/* <CartItem /> */}
    </Provider>
  )
}

export default App
