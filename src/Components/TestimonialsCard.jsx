import './ComponnetsStyle/testimonialsCard.scss';
import Image from './Image';

export default function TestimonialsCard({ imageSrc, name, text, rating }) {

    const renderStars = (rating) => {
        const roundedRating = Math.round(rating * 2) / 2;
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if (roundedRating >= i) {
                stars.push(<span key={i} className='star full'>★</span>
                )
            } else if (roundedRating >= i - 0.5) {
                stars.push(<span key={i} className='star half'>★</span>)
            } else {
                stars.push(<span key={i} className='star'>★</span>)
            }
        }

        return stars;
    }


        return (

            <div className='test-card'>
                <Image className='test-image' src={imageSrc} alt={name} />
                <div className='rating'>{renderStars(rating)}</div>
                <div className='test-card-text'>'{text}'</div>
                <div className='test-clientName'>{name}</div>
            </div>

        )
    }
