import "./bookticket.css"

export default function BookTicket() {
    return (
        <div className="BookTicket">
            <div className="ticket__headerContainer">
               <div className="ticket__headerContainer__left">
                    <p>fleet travel ui kit</p>
                    <h1>Book a ticket and just leave</h1>
               </div>
               <div className="ticket__headerContainer__right">
                   <div className="ticket__bookBtn">Book now</div>
               </div>
            </div>
        </div>
    )
}
