import './ComponnetsStyle/secondTitle.scss';

export default function SecondTitle({ big, small }) {



    return (
        <div className='light-bg'>
            <div className='wrapper'>
                <h2 className='secondTitle'>
                    <span className='secondTitle-big'>{big}</span>
                    <span className='secondTitle-small'>{small}</span>
                </h2>
            </div>
        </div>
    )
}
