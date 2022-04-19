import "./liveanywhere.css"

export default function LiveAnyWhere() {
    return (
        <div className="LiveAnyWhere">
            <h1>Live anywhere</h1>
            <p>Keep calm & travel on</p>
            <div className="liveAnyWhere__cardContainer">
                <div className="liveAnyWhere__card">
                    <div className="liveAnyWhere__card__image">
                        <img src="./assets/live-pic-1@2x.png" alt="" srcset="" />
                    </div>
                    <div className="liveAnyWhere__card__title">
                      Enjoy the great cold
                    </div>
                    <div className="liveAnyWhere__card__props">
                     6,879 properties

                    </div>
                </div>

                <div className="liveAnyWhere__card">
                    <div className="liveAnyWhere__card__image">
                        <img src="./assets/live-pic-2@2x.png" alt="" srcset="" />
                    </div>
                    <div className="liveAnyWhere__card__title">
                      Enjoy the great cold
                    </div>
                    <div className="liveAnyWhere__card__props">
                     6,879 properties

                    </div>
                </div>

                <div className="liveAnyWhere__card">
                    <div className="liveAnyWhere__card__image">
                        <img src="./assets/live-pic-3@2x.png" alt="" srcset="" />
                    </div>
                    <div className="liveAnyWhere__card__title">
                      Enjoy the great cold
                    </div>
                    <div className="liveAnyWhere__card__props">
                     6,879 properties

                    </div>
                </div>



            </div>

            <div className="liveAnyWhere__loading">
                <i class="fas fa-spinner loading"></i>
               &nbsp;  Load more
            </div>
        </div>
    )
}
