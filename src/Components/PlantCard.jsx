import Button from './Button';
import './ComponnetsStyle/plantCard.scss';

export default function PlantCard({ imageSrc, title, price }) {

    return (

        <div className='plantCard'>
            <a>
                <div className='imageBox'>
                    <img className='plantImage' src={imageSrc} alt={title} />
                </div>
                <div className='cardText'>
                    <h3 className='plantTitle'>{title}</h3>
                    <div className='plantPrice'>{price} Eur</div>
                </div>
            </a>
            <Button className='green-btn'>Buy</Button>
        </div>
    )
}
