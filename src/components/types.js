import '../images/App.css';
import health from '../images/health.png';
import home from '../images/home.png';
import edu from '../images/edu.png';
import food from '../images/food.png';
function Types () {
    return(
    <>
    <div className="section_types">
        <div className="header_types"> انواع التبرعات </div>
        <div className="content_types">
            <div className="card1">
                <img className='food' src={food}/>
                <p className='text'> طعام </p>
            </div>
            <div className="card2">
                <img className='edu' src={edu}/>
                <p className='text'> تعليم </p>
            </div>
            <div className="card3">
                <img className='home' src={home}/>
                <p className='text'> المسكن </p>
            </div>
            <div className="card4">
                <img className='health' src={health}/>
                <p className='text'> صحة </p>
            </div>
        </div>
        <hr className="hr1"/>
        <hr className="hr2"/>
    </div>
    </>
    );
}
export default Types;