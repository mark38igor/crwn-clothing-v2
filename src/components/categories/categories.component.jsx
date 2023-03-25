import { useNavigate } from 'react-router-dom';
import './categories.styles.scss';
const Categories=( {title, imageUrl})=>{
  let navigate = useNavigate();
  const routeChange = (route) => {
    let path = `/home/shop/${route}`;
    navigate(path);
  };
    return(
        <div  className='category-container'>
          <div className='background-image' style={{ backgroundImage:`url(${imageUrl})` }}></div>
          <div className='category-body-container'>
            <h2>{title.toUpperCase()}</h2>
            <p onClick={()=>{
              routeChange(title)
            }}>Shop Now</p>
          </div>
        </div>
    )
}

export default Categories;