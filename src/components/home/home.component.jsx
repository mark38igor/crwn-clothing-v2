import './home.styles.scss';

import { Outlet, Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../Categories-preview/categories-preview.component';
import Shop from '../shop/shop.component';

const Home=(props)=>{
    return(
      <>
        <Routes>
          <Route index element={<CategoriesPreview/>}></Route>
          <Route path='/shop/:category' element={<Shop/>}></Route>
        </Routes>
        <Outlet></Outlet>
        </>
    )
}

export default Home;