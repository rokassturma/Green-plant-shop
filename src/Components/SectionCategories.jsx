import Title from "./Title";
import './ComponnetsStyle/sectionCategories.scss';
import CategoriesList from "./CategoriesList";

export default function SectionCategories() {
  return (
    
    <>
    <section className="wrapper section-category">


    <Title text1='Shop' text2='by Category' showLink={true}/>
    <CategoriesList />
    </section>
    
    
    
    
    </>
  )
}
