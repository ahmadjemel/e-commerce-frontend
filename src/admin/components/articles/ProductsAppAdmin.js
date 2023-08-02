import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getArticles } from '../../../features/articleSlice';
import AfficheArticleTable from './AfficheArticleTable';
import Createarticle from './Createarticle';
const ProductsAppAdmin = () => {
    
        const dispatch = useDispatch();
        useEffect(() => {
        dispatch(getArticles());
        },[])
  return (
    <div>
        <Createarticle/>
<AfficheArticleTable />

    </div>
  )
}

export default ProductsAppAdmin