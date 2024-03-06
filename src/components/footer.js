import '../images/App.css';
import foo from '../images/foo.png';
import facebook from '../images/facebook.png';
import twitter from '../images/x.png';
import snapchat from '../images/snapchat.png';
import tum from '../images/tum.png';
import phone from '../images/phone.png';
import mail from '../images/mail.png';
import location from '../images/location.png';
function Footer () {
    return(
    <>
    <div className="content_foo">
        <div className="content_foo_one">
            <img src={foo}/>
        </div>
        <div className="content_foo_two">
            <div className="header_two"> تواصل معنا عبر </div>
            <div className="content_phone">
            <img src={phone}/>
                <p className="text_one"> 777777777777777 </p>
            </div>
            <div className="content_mail">
            <img src={mail}/>
                <p className="text_one"> saad777@gmail.com </p>
            </div>
            <div className="content_location">
            <img src={location}/>
                <p className="text_one"> المنصورة </p>
            </div>
            <div className="social">
                <a href="#"><img src={facebook}/></a>
                <a href="#"><img src={twitter}/></a>
                <a href="#"><img src={snapchat}/></a>
                <a href="#"><img src={tum}/></a>
            </div>
        </div>
        <div className="content_foo_three">
            <div className="header_three"> روابط سريعة </div>
            <a href="#" className="text_one"> التبرع  </a>
            <a href="#" className="text_one"> تسجيل الدخول  </a>
            <a href="#" className="text_one"> من نحن  </a>  
        </div>
    </div>
    </>
    );
}
export default Footer;