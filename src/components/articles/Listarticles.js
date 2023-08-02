import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch } from "react-redux";
import { getArticles, getArticlespages } from "../../features/articleSlice";
import AfficheArticles from './AfficheArticles';
const Listarticles = () => {

    //const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    //const indexOfLastItem = currentPage * itemsPerPage;
    //const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const dispatch = useDispatch()
    const listproduits = useCallback(() => {
        const mesParams = {
            currentPage: currentPage,
            itemsPerPage: itemsPerPage
        };
        dispatch(getArticlespages(mesParams))
    }, [currentPage])
    useEffect(() => {
        listproduits()
    }, [listproduits])


   /*  useEffect(() => {
        console.log("errrrrrrrrrrrrrrrrrr")
        dispatch(getArticles())
    }, [dispatch]) */
    return (
        <div>
            <AfficheArticles currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage = {itemsPerPage}/>
        </div>
    )
}

export default Listarticles