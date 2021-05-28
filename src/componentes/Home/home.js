import React from 'react';
import Banner from './Banner/Banner';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';

const Home = () => {
    const { category } = useParams()
    return (
        <React.Fragment>
            {!category && <Banner />}
            <ItemListContainer title="Catálogo" category={category} />
        </React.Fragment>
    )
}
export default Home