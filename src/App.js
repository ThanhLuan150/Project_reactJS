import './App.css';
import Header from './components/header';
import Show from './components/Show_product';
import Cart from './components/Cart';
import Footer from './components/footer';
import { Routes,Route} from "react-router-dom";
import PageAdmin from './Admin/pageAdmin';
import Add from './Admin/Add';
import Edit from './Admin/Update';
import Delete from './Admin/Delete';
import ProductDetail from './components/ProductDetail';
function App() {
  return (
    <div>
         <Header/>
         <Routes>    
              <Route path='/' element={<Show/>}/>
              <Route path='/Cart' element={<Cart/>}/>
              <Route path='/Admin' element={<PageAdmin/>}/>;
              <Route path='/Add' element={<Add></Add>} />
              <Route path="/Edit/:id" element={<Edit></Edit>}/>
              <Route path="/product/:id" element={<ProductDetail></ProductDetail>} />
          </Routes>
         <Footer/>
         <Routes>   
         <Route path="/Delete/:id" element={<Delete></Delete>}/>
         </Routes>
    </div>
     
  );
}

export default App;
