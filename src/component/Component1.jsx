import "./Component1.css"
import Bride1 from '../assets/Bride1.jpg'
import Bride2 from '../assets/Bride2.jpg'
import Bride3 from '../assets/Bride3.jpg'
function Component1(){
    return(
        <>
        <div className="container">
            <div className="top">
                <div className="t">ALL</div>
                <div className="t1">WOMENS</div>
                <div className="t1">MENS</div>
                <div className="t1">INFRASTRUCTURE</div>
                <div className="t1">BRIDAL</div>
            </div>
            <div className="bottom">
                <div className="b">
                    <img src={Bride1} alt="bb"></img>
                </div>
                <div className="b">
                    <img src={Bride2} alt="cc"></img>
                </div>
                <div className="b">
                    <img src={Bride3} alt="bb"></img>
                </div>
            </div>
        </div>
        </>
    )
}
export default Component1