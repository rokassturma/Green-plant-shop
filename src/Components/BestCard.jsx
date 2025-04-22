import Button from './Button';
import './ComponnetsStyle/bestCard.scss';



export default function BestCard({ imageSrc, title }) {


    return (
        <div className='bestCard'>
            <a href='#' className='bestCardLink'>
                <img src={imageSrc} alt={title}></img>
                <div className='bestOverlay'>
                    <h3 className='bestTitle'>{title}</h3>
                </div>
            </a>
            <Button className='green-btn' children='Shop Now'/>
        </div>


    )
}
