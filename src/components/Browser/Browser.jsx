import "./browser.css"

export default function Browser() {
    return (
        <div className="Browser">
            <div className="browser__header">
                <h1 className="browser__header__h1">
                  Explore nearby
                </h1>

                <div className="sliderArrowContainer">
                            <div className="sliderArrow">
                                 <i class="fas fa-arrow-left"></i>
                            </div>

                            <div className="sliderArrow">
                                    <i class="fas fa-arrow-right"></i>
                            </div>
                    </div>  
            </div>
            <p>Let’s go on an adventure</p>

            <div className="browser__sliderContainer">
                <div className="browser__sliderCard">
                    <div className="browser__cardImage">
                        <img src="./assets/catalog-pic-1.jpg" alt="" />
                    </div>
                    <div className="browser__cardInfo">
                        <p className="browser__cardName">Nature house</p>
                        <p className="browser__cardCount"> <i class="fas fa-home"></i> &nbsp;345.678</p>
                    </div>

                </div>
              
                <div className="browser__sliderCard">
                    <div className="browser__cardImage">
                        <img src="./assets/catalog-pic-2.jpg" alt="" />
                    </div>
                    <div className="browser__cardInfo">
                        <p className="browser__cardName">Nature house</p>
                        <p className="browser__cardCount"> <i class="fas fa-home"></i> &nbsp;345.678</p>
                    </div>

                </div>

                <div className="browser__sliderCard">
                    <div className="browser__cardImage">
                        <img src="./assets/catalog-pic-3.jpg" alt="" />
                    </div>
                    <div className="browser__cardInfo">
                        <p className="browser__cardName">Nature house</p>
                        <p className="browser__cardCount"> <i class="fas fa-home"></i> &nbsp;345.678</p>
                    </div>

                </div>

                <div className="browser__sliderCard">
                    <div className="browser__cardImage">
                        <img src="./assets/catalog-pic-4.jpg" alt="" />
                    </div>
                    <div className="browser__cardInfo">
                        <p className="browser__cardName">Nature house</p>
                        <p className="browser__cardCount"> <i class="fas fa-home"></i> &nbsp;345.678</p>
                    </div>

                </div>
            </div>

        </div>
    )
}
