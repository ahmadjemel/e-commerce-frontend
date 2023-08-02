import React, { useEffect, useState,Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { getArticles } from '../../features/articleSlice';
import { getScategories } from '../../features/scategorieSlice';
import { getCategories } from '../../features/categorieSlice';
import CarouselProd from './carouselProduits';
import CarouselSCateg from './carouselScategories';
import CarouselCateg from './carouselCateg'
const ageCarousel = () => {
const dispatch = useDispatch();
const [Categ, setCateg] = useState();
const [SCateg, setSCateg] = useState();
useEffect(() => {
dispatch(getCategories())
}, [Categ]);
useEffect(() => {
dispatch(getScategories())
}, [SCateg]);
useEffect(() => {
dispatch(getArticles());
}, [dispatch]);
return (
<div>

<h4>Catégories</h4>
<Suspense fallback={<div>loading</div>}>
<CarouselCateg setCateg={setCateg} />
</Suspense>
<h4>Sous Catégories {Categ ? Categ.nomcategorie : null} </h4>
<Suspense fallback={<div>loading</div>}>
<CarouselSCateg setSCateg={setSCateg} selectedCategory={Categ} />
</Suspense>
<h4>Produits {SCateg ? SCateg.nomscategorie : null}</h4>
<Suspense fallback={<div>loading</div>}>
<CarouselProd selectedSCategory={SCateg} />
</Suspense>
</div>
);
};
export default pageCarousel;