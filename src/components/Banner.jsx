import '../styles/Banner.css'

const Banner = ({title, image}) => {
    return (
    <div className='banner'>
        <h1>{title}</h1>
        <img className='banner-background' src={image} alt={`Fond bannière`} />
    </div>
    )
}

export default Banner