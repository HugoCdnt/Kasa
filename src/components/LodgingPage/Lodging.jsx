// COMPONENTS //
import Rating from './Rating'

// STYLES //
import '../../styles/LodgingPage/Lodging.css'

const Lodging = ({ cover, title, id, location, tags, host, hostPhoto, rating }) => {
    return (
        <div key={id}>
            <div className="lodging-heading">
                <div className="title-location-tags">
                    <h1 className='lodging-title'>{title}</h1>
                    <p className='lodging-location'>{location}</p>
                    <ul className="tags">
                        {tags.map((tag) => 
                            <li key={`${id}+ " " + ${tag}`}>{tag}</li>
                        )}
                    </ul>
                </div>
                <div className="host-rating">
                    <div className='host'>
                        <p>
                            {host.split(' ')[0]}<br />
                            {host.split(' ')[1]}
                        </p>
                        <img className='host-photo' src={hostPhoto} alt={host}/>
                    </div>
                    <Rating notation={rating} />
                </div>
            </div>
        </div>
    )
}

export default Lodging