import "./slider.css"

export default function Slider() {
    return (
        <div className='Slider'>
               <div className="sliderText">
                    <h1>Let’s go on an adventure</h1>
                    <p>Find and book a great experience.</p>

                    <div className="sliderItemsContainer">
                        <div className="sliderItem">
                            <div className="sliderItemLeft">
                                    <img src="./assets/adventure-pic-1.svg" alt="" srcset="" />
                            </div>
                            <div className="sliderItemRight">
                                        <div className="sliderDesc">Luxury resort at the sea</div>
                                        <div className="sliderRightBtn">5326 PLACES</div>
                            </div>
                        </div>

                        <div className="sliderItem">
                            <div className="sliderItemLeft">
                                    <img src="./assets/adventure-pic-2.svg" alt="" srcset="" />
                            </div>
                            <div className="sliderItemRight">
                                        <div className="sliderDesc">Camping amidst the wild</div>
                                        <div className="sliderRightBtn">5326 PLACES</div>
                            </div>
                        </div>

                        <div className="sliderItem">
                            <div className="sliderItemLeft">
                                    <img src="./assets/adventure-pic-3.svg" alt="" srcset="" />
                            </div>
                            <div className="sliderItemRight">
                                        <div className="sliderDesc">Luxury at the sea</div>
                                        <div className="sliderRightBtn">5326 PLACES</div>
                            </div>
                        </div>
                    </div>
                    <div className="sliderArrowContainer">
                            <div className="sliderArrow">
                                 <i class="fas fa-arrow-left"></i>
                            </div>

                            <div className="sliderArrow">
                                    <i class="fas fa-arrow-right"></i>
                            </div>
                    </div>
               </div>
        </div>
    )
}
