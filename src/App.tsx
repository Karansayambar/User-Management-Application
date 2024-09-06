import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { Provider } from "react-redux"
import store from "./redux/store"
import UserDetailsPage from "./pages/UserDetailsPage"


function App() {

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/userDetails/:id" element={<UserDetailsPage/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
