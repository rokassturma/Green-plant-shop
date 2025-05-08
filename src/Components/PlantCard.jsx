import { Link } from 'react-router-dom';
import Button from './Button';
import './ComponnetsStyle/plantCard.scss';
import Image from './Image';

export default function PlantCard({ imageSrc, title, price, discount, plantId }) {

    const discountedPrice = discount
        ? (price * (1 - discount / 100)).toFixed(2)
        : price.toFixed(2);

    return (

        <div className='plantCard'>
            <Link className='plantCardLink' to={`/products/${plantId}`}>
                <div className='imageBox'>
                    {
                        discount > 0 && (
                            <div className='discountBlock'>
                                <div>{discount}%</div>
                                <div>off</div>
                            </div>
                        )}
                    {/*                  <img className='plantImage' src={imageSrc} alt={title} /> */}
                    <Image className='plantImage' src={imageSrc} alt={title} />
                </div>
                <div className='cardText'>
                    <h3 className='plantTitle'>{title}</h3>
                    {
                        discount > 0
                            ? (
                                <>
                                    <span className='plantPrice'>{discountedPrice} Eur</span>
                                    <span className='plantPrice-red'>{price} Eur</span>
                                </>
                            )
                            : (
                                <div className='plantPrice'>{price} Eur</div>
                            )
                    }
                </div>
            </Link>
            <Button className='green-btn'>Buy</Button>
        </div>
    )
}
