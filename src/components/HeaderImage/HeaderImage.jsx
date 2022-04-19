import "./headerimage.css"
import TabContent from "./TabContent/TabContent"

export default function HeaderImage() {
    return (
        <div className="HeaderImage">
            <div className="headerImage__imgContainer">
                <img src="./assets/main-pic-1.jpg" alt="" className="headerImgElement" />
            </div>
            <div className="headerImage__content headerShow">
                <h1 className="headerTitle">Air, sleep, dream</h1>
                <p className="headerDesc">Find and book a great experience.</p>
                <div className="headerBtnStartYourSearch">
                    Start your search
                </div>
            </div>

           <TabContent/>
            
        </div>
    )
}
