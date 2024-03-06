import img from '../images/cuatehome.png';
import s from '../images/homes.png';
import '../images/App.css';
function Home (){
    return(
    <>
    <div className="main">
      <div className="left_home">
        <p className="text_home_one"> 
            يمكنك تحويل الاحداث المؤلمه الي فرص سعيده,للتعلم او النمو ,او مساعده الاخرين
        </p>
        <p className="text_home_two">
            كل يوم هو يوم جيد لفعل الخير
        </p>
        <button className="btn" type="submit"> هيا بنا! </button>
      </div>
      <div className="right_home">
        <img src={img} className="img_home" />
        <img src={s} className="s_home"/>
      </div>
    </div>
    </>
    );
}
export default Home;