import {React, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'

// DATA //
import lodgings from '../data/logements.json'

// COMOPONENTS //
import Lodging from '../components/LodgingPage/Lodging'
import Collapse from '../components/Collapse'
import ImageSlider from '../components/LodgingPage/ImageSlider'
import Footer from '../components/Footer'

// STYLES //
import '../styles/Collapse.css'
import '../styles/LodgingPage/LodgingPage.css'

const LodgingPage = () => {
    const {id} = useParams();
    const stringifiedLodgings = JSON.stringify(lodgings);
    const foundLodging = lodgings.find(lodging => {
        return lodging.id === id;
    })

    useEffect(() => {
        if (stringifiedLodgings.includes(id) === true) {
            document.title = `${foundLodging.title}`
        }
    }, [id, stringifiedLodgings, foundLodging])
    
    if (stringifiedLodgings.includes(id) !== true) {
        return(
            <Navigate to="/notfound" replace />
        )
    }
    
    return (
    <div className='lodging-page--container'>
        <ImageSlider slides={foundLodging.pictures} />
        <Lodging
            title={foundLodging.title}
            id={id}
            location={foundLodging.location}
            tags={foundLodging.tags}
            host={foundLodging.host.name}
            hostPhoto = {foundLodging.host.picture}
            rating = {foundLodging.rating}
        />
        <div className='lodging-collapses'>
            <Collapse title="Description" description={foundLodging.description}/>
            <Collapse title="Équipements" description={foundLodging.equipments.map((equipment) => <li key={`${foundLodging.id}+ " " + ${equipment}`}>{equipment}</li>)}/>
        </div>
        <Footer />
    </div>
    )
}

export default LodgingPage