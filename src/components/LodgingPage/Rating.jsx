// IMAGES //
import fullStar from '../../images/fullStar.svg'
import emptyStar from '../../images/emptyStar.svg'

// STYLES //
import '../../styles/LodgingPage/Rating.css'

const redStar = <img src={fullStar} alt='full-star' />
const whiteStar = <img src={emptyStar} alt='empty-star' />

const rangeValue = {
    1: <div className='rating'>{redStar}{whiteStar}{whiteStar}{whiteStar}{whiteStar}</div>,
    2: <div className='rating'>{redStar}{redStar}{whiteStar}{whiteStar}{whiteStar}</div>,
    3: <div className='rating'>{redStar}{redStar}{redStar}{whiteStar}{whiteStar}</div>,
    4: <div className='rating'>{redStar}{redStar}{redStar}{redStar}{whiteStar}</div>,
    5: <div className='rating'>{redStar}{redStar}{redStar}{redStar}{redStar}</div>
}

const Rating = ({ notation }) => {
    return (
        rangeValue[notation]
    )
}

export default Rating