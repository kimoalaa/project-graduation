import '../images/App.css';
import img_we from '../images/img_we.png';
function We () {
    return(
    <>
    <div className='section_we'> 
      <div className='header'> من نحن </div>
      <div className="content_we">
        <img className="img_we" src={img_we}/>
        <p className="text_we">
          تهتم بتقديم الخدمات الاجتماعية والإنسانية لفئات مختلفة في المجتمع. تقوم هذه المؤسسات بجمع التبرعات واستخدامها لتحقيق أهداف إنسانية أو اجتماعية و هدفنا تقديم المساعدة للفئات الضعيفة والمحتاجة في المجتمع. دعم التعليم وتوفير الفرص التعليمية. رعاية الصحة وتوفير الخدمات الطبية للأفراد ذوي الاحتياجات الخاصة.مساعدة في حالات الطوارئ والكوارث الطبيعية. تعزيز التنمية المستدامة في المجتمعات المحلية والعالمية.
        </p>
      </div>
    </div>
    </>
    );
}
export default We;