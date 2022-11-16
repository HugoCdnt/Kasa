// COMPONENTS //
import lodgings from '../../data/logements.json'
import LodgingCard from './LodgingCard';

// STYLES //
import '../../styles/Home/LodgingList.css'


// [data, setData] = useState(lodgings)

const LodgingList = () => {    
    return (
            <ul className='lodgings-list'>
                {lodgings.map(({ id, cover, title }) =>
                    <LodgingCard
                        id={id}
                        cover={cover}
                        title={title}
                        key={id.toString()}
                    />
                )}
            </ul>
    )
}

export default LodgingList
