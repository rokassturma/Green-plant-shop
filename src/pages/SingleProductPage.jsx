import { useLocation, useParams } from 'react-router-dom';
import './pagesStyle/singleProductPage.scss';
import usePlants from '../hooks/usePlants';

export default function SingleProductPage() {


  /* Duomenų perdavimas naudojant STATE */
  /* const location = useLocation();
  const plantData = location.state; */


  /* Duomenų perdavimas naudojant CONTEXT */
  const { id } = useParams();
  const { plants } = usePlants();
  const plantData = plants.find(p => p.id === parseInt(id));

  if (!plantData) {
    return <div className='example'>Plant was not found.</div>
  }

  return (

    <div>
      <h3>{plantData.title}</h3>
    </div>

  )
}
