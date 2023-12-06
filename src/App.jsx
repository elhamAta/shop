import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import './components/css/style.scss';
import {
  Home,
  Layout,
  Contact,
  Blog,
  DetailProduct,
  DetailBlog,
  Product,
  Login

} from './components';
import Test from './reducers/test';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/'  element={<Home />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/Blog' element={<Blog />}></Route>
              <Route path='/product/:id' element={<DetailProduct />} />
              <Route path='/blog/:id' element={<DetailBlog />}></Route>
              <Route path='/product' element={<Product />} > </Route>
              <Route path='/login' element={<Login />} > </Route>
              <Route path='/login' element={<Login />} > </Route>
              <Route path='/test' element={<Test />} > </Route>

            </Routes>
          </Layout>
          
        </BrowserRouter>
    </div>
  );
}

export default App;
