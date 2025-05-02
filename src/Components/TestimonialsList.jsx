import useFetch from '../hooks/useFetch';
import './ComponnetsStyle/testimonialsList.scss';
import DataHandler from '../utils/DataHandler';
import TestimonialsCard from './TestimonialsCard';

export default function TestimonialsList() {

    const { data: testimonials, loading, error } = useFetch(
        'https://gist.githubusercontent.com/rokassturma/f1e711edc4cadd4bb6cd15b0344e7299/raw/5a3e0fa67e657c82ceccdfd19f5c46e268dc573f/clientOpinion.json',
        'clients',
        'img'
    );

    return (
        <div className='test-list'>
            <DataHandler loading={loading} error={error}>
                {
                    testimonials.map(card => (
                    <TestimonialsCard 
                    key={card.id}
                    imageSrc={card.imageSrc}
                    name={card.name}
                    text={card.text}
                    rating={card.rating}
                    />
                ))
                }
            </DataHandler>
        </div>
    )
}
