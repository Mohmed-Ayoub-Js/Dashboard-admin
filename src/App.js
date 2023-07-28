import Home from "./app/Home";
import InfoPublic from "./chart/InfoPublic";
import "./styles.css";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import User from "./user/User";
import Products from "./Products/Products";
export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/chart' element={<InfoPublic/>}/>
        <Route path='/users' element={<User />}/>
        <Route path='/products' element={<Products />}/>
    

      </Routes>
    </BrowserRouter>
    </>
  );
}
