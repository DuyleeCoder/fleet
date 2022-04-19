import "./flamingo.css"

export default function Flamingo() {
    return (
        <div className="Flamingo">
            <h1>Travel to make memories all around the world</h1>
            <p>Find trips that fit a flexible lifestyle</p>
            <div className="flamingoMainContent">
                <div className="flamingoContentLeft">
                    <div className="flamingoContentBlock">
                        <div className="flamingoBlockCount flamingo-orange">
                            01
                        </div>
                        <div className="flamingoBlockHeader">
                         Find trips that fit a flexible lifestyle
                        </div>
                        <div className="flamingoBlockDesc">
                          Stacks is a production-ready library of stackable content blocks built in React Native
                        </div>
                    </div>

                    <div className="flamingoContentBlock">
                        <div className="flamingoBlockCount flamingo-blue"> 
                            02
                        </div>
                        <div className="flamingoBlockHeader">
                         Find trips that fit a flexible lifestyle
                        </div>
                        <div className="flamingoBlockDesc">
                          Stacks is a production-ready library of stackable content blocks built in React Native
                        </div>
                    </div>

                    <div className="flamingoContentBlock">
                        <div className="flamingoBlockCount flamingo-green">
                            03
                        </div>
                        <div className="flamingoBlockHeader">
                         Find trips that fit a flexible lifestyle
                        </div>
                        <div className="flamingoBlockDesc">
                          Stacks is a production-ready library of stackable content blocks built in React Native
                        </div>
                    </div>

                    <div className="flamingoBtn">Start your search</div>
                </div>

                <div className="flamingoContentRight">
                        <img className="flamingoImage" src="./assets/travel-pic-1@2x.jpg" alt="" srcset="" />

                        <div className="flamingoPersonRank">
                            <div className="flamingoPersonRank__left">
                                <img src="./assets/catalog-pic-6.jpg" alt="" />
                            </div>
                            <div className="flamingoPersonRank__right">
                                <div className="flamingoPersonRank__right__top">
                                   Mr. Lee
                                </div>
                                <div className="flamingoPersonRank__right__bottom">
                                    <i class="fas fa-star rank__start" ></i> 4.8
                                </div>
                            </div>
                        </div>

                    </div>
            </div>
        </div>
    )
}
