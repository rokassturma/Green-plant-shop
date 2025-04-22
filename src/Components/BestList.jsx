import useFetch from '../hooks/useFetch';
import './ComponnetsStyle/bestList.scss'
import DataHandler from '../utils/DataHandler';
import BestCard from './bestCard';




export default function BestList() {

    const { data: bestCards, loading, error } = useFetch(
        'https://gist.githubusercontent.com/rokassturma/d6522fb5a506433f9ae87f02e3930bae/raw/5ddfbc7fb5cb0f40cb235bd4a10dc68e46cbd11f/bestSelling.json',
        'bestSelling',
        'fileName'
    );

    console.log(bestCards);

    return (
        <div className='bestList'>
            <DataHandler>
                {bestCards.map(card => (
                    <BestCard key={card.id} imageSrc={card.imageSrc} title={card.title} />
                ))}
            </DataHandler>
        </div>
    )
}
