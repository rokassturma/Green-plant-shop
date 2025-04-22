import Title from './Title';
import './ComponnetsStyle/sectionBest.scss'
import BestList from './BestList';

export default function SectionBest() {


  return (

    <section className="wrapper section-best">
        <Title text1={"Best"} text2={"Selling"} showLink={true}/>
        <BestList />

    </section>

  )
}
