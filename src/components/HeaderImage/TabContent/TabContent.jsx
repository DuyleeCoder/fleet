import "./tabcontent.css"

function contentBlock({iconClass,topContent,bottomContent}) {
    return ( 
        <div className="tabContent__contentBlock">
                            <div className="contentBlock__icon">
                                <i class={iconClass}></i>
                            </div>
                            <div className="contentBlock__text">
                                <div className="contentBlock__text-top">{topContent}</div>
                                <div className="contentBlock__text-bottom"> {bottomContent} </div>
                            </div>
         </div>
    )
}

export default function TabContent() {
    return (
        
             <div className="TabContent">
                <div className="tabContent__tabHeader">
                    <div className="tabStays tabContent__tab tabAction">
                        Stays
                    </div>
                    <div className="tabFlights tabContent__tab">
                        Flights
                    </div>
                    <div className="tabCars tabContent__tab">
                        Cars
                    </div>
                    <div className="tabThings tabContent__tab">
                        Things to do
                    </div>
                </div>
                <div className="tabContent__horizontalLine"></div>
                <div className="tabContent__content">
                    <div className="tabStaysContent">                        
                       {
                           contentBlock({
                               iconClass:"fas fa-location-arrow",
                               topContent:"Location",
                               bottomContent:"Where are you going? "
                           })
                       }
                       {
                           contentBlock({
                               iconClass:"fas fa-calendar-check",
                               topContent:"Check in",
                               bottomContent:"Add date "
                           })
                       }
                       {
                           contentBlock({
                               iconClass:"fas fa-calendar-check",
                               topContent:"Check out",
                               bottomContent:"Add date"
                           })
                       }
                       {
                           contentBlock({
                               iconClass:"fas fa-user",
                               topContent:"Travelers",
                               bottomContent:"Travelers"
                           })
                       }                    

                    </div>
                </div>
            </div>
       
    )
}
