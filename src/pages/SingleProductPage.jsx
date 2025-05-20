import { useLocation, useParams } from 'react-router-dom';
import './pagesStyle/singleProductPage.scss';
import usePlants from '../hooks/usePlants';
import DataHandler from '../utils/DataHandler';
import SecondTitle from '../Components/SecondTitle';
import Button from "../Components/Button";
import Title from "../Components/Title";
import PlantCardList from "../Components/PlantCardList";

export default function SingleProductPage() {


  /* Duomenų perdavimas naudojant STATE */
  /* const location = useLocation();
  const plantData = location.state; */


  /* Duomenų perdavimas naudojant CONTEXT */
  const { id } = useParams();
  const { plants, loading, error } = usePlants();
  const plantData = plants.find(p => p.id === parseInt(id));



  return (
    <DataHandler loading={loading} error={error} noData={!plantData}>
      {
        plantData && (
          <>
            <SecondTitle big={'Plant'} small={plantData.title} />
            <div className='wrapper plantContent'>
              <div className='plantContent_img'>
                <img className='plantImg' src={plantData.imageSrc} alt={plantData.title} />
                <img className='plantImg' src={plantData.imageSrc} alt={plantData.title} />
                <img className='plantImg' src={plantData.imageSrc} alt={plantData.title} />
                <img className='plantImg' src={plantData.imageSrc} alt={plantData.title} />
              </div>
              <div className='plantContent_data'>
                <h3 className="plantContent_title">{plantData.title}</h3>

                {
                  plantData.discount > 0 ? (
                    <>
                      <span className="plantPrice">
                        ${(plantData.price * (1 - plantData.discount / 100)).toFixed(2)}
                      </span>
                      <span className="plantPrice-red">
                        ${plantData.price.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="plantPrice">
                      ${plantData.price.toFixed(2)}
                    </span>
                  )
                }

                <p className="plantContent_description">
                  {plantData.description}
                </p>

                <Button className={"green-btn"} children={"Add to cart"} />
              </div>
            </div>

            <div className="light-bg">
              <div className="wrapper example instruction">
                Plant instruction
              </div>
            </div>

            <div className="wrapper offer">
              <Title text1={"You'll love"} text2={"these too ..."} showLink={false} />
              <PlantCardList filterType="deals" limit={4}/>
            </div>
          </>
        )
      }
    </DataHandler>
  )
}
