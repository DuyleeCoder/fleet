import { useRef,useEffect } from "react"
import "./besthost.css"

export default function BestHost() {
    const dropBtn = useRef();
    const dropCOntainer = useRef();

    useEffect(() => {
        let btn = dropBtn.current;
        btn.addEventListener("click",()=>{ 
            (dropCOntainer.current.style.display==="block")?dropCOntainer.current.style.display="none":dropCOntainer.current.style.display="block";
            
        })
    }, [])

    return (
        <div className="BestHost">
            <div className="besthost__headerContainer">
                <h1 className="besthost__header__h1">Best hosts of the</h1>
                <div className="besthost__header__dropMenu">
                   <h1 ref={dropBtn}>month <i class="fas fa-angle-down"></i></h1>
                   <div ref={dropCOntainer} className="besthost__header__dropContainer">
                       <h1 className="besthost__dropItem">month</h1>
                       <h1 className="besthost__dropItem">year</h1>
                       <h1 className="besthost__dropItem">day</h1>
                   </div>
                </div>
                <div className="besthost__header__sliderArrow">
                            <div className="sliderArrow">
                                 <i class="fas fa-arrow-left"></i>
                            </div>

                            <div className="sliderArrow">
                                    <i class="fas fa-arrow-right"></i>
                            </div>
                </div>
            </div>
            <div className="besthost__sliderContainer">
                    <div className="besthost__silderCard">
                        <div className="besthost__sliderCard__top">
                            <img src="./assets/host-pic-1.jpg" alt="" />
                        </div>
                        <div className="besthost__sliderCard__bot">
                                <div className="besthost__sliderCard__botAvatar">
                                        <img src="./assets/host-avatar-1.jpg" alt="" />
                                </div>
                                <div className="besthost__sliderCard__botInfo">
                                        <p>Antone Heller</p>
                                        <p>Superman</p>
                                </div>
                            </div>
                    </div>

                    <div className="besthost__silderCard">
                        <div className="besthost__sliderCard__top">
                            <img src="./assets/host-pic-2.jpg" alt="" />
                        </div>
                        <div className="besthost__sliderCard__bot">
                                <div className="besthost__sliderCard__botAvatar">
                                        <img src="./assets/host-avatar-4.jpg" alt="" />
                                </div>
                                <div className="besthost__sliderCard__botInfo">
                                        <p>Antone Heller</p>
                                        <p>Superman</p>
                                </div>
                            </div>
                    </div>

                    <div className="besthost__silderCard">
                        <div className="besthost__sliderCard__top">
                            <img src="./assets/host-pic-3.jpg" alt="" />
                        </div>
                        <div className="besthost__sliderCard__bot">
                                <div className="besthost__sliderCard__botAvatar">
                                        <img src="./assets/host-avatar-3.jpg" alt="" />
                                </div>
                                <div className="besthost__sliderCard__botInfo">
                                        <p>Antone Heller</p>
                                        <p>Superman</p>
                                </div>
                            </div>
                    </div>

                    <div className="besthost__silderCard">
                        <div className="besthost__sliderCard__top">
                            <img src="./assets/host-pic-4.jpg" alt="" />
                        </div>
                        <div className="besthost__sliderCard__bot">
                                <div className="besthost__sliderCard__botAvatar">
                                        <img src="./assets/host-avatar-4.jpg" alt="" />
                                </div>
                                <div className="besthost__sliderCard__botInfo">
                                        <p>Antone Heller</p>
                                        <p>Superman</p>
                                </div>
                            </div>
                    </div>


            </div>
        </div>
    )
}
