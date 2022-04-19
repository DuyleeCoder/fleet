import "./howitwork.css"

export default function HowItWork() {
    return (
        <div className="HowItWork">


            <h1 >
                  How it work
            </h1>
            <p>Keep calm & travel on </p>

            

            <div className="howItWorkItemsContainer">
            <div className="howItWorkBackground">
                  <svg width="839" height="137" viewBox="0 0 839 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M838 4.83887C823.237 25.0088 713.617 137.14 601.48 135.889C497.352 134.728 454.07 -36.7167 262.536 60.1723C94.2489 145.302 53.9174 52.5844 1.07634 1.99272" stroke="#E6E8EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 12"></path>
                </svg>
            </div>
               
                <div className="howItWorkItem">
                    <img src="./assets/work-pic-1@2x.png" alt="" />
                    <div className="howItWorkItem_Title">
                      Book & relax
                    </div>
                    <div className="howItWorkItem_Desc">
                         We realize ideas from simple to complex, everything becomes easy to use.
                    </div>
                </div>

                
                <div className="howItWorkItem">
                    <img src="./assets/work-pic-2@2x.png" alt="" />
                    <div className="howItWorkItem_Title">
                         Smart checklist
                    </div>
                    <div className="howItWorkItem_Desc">
                    We realize ideas from simple to complex, everything becomes easy to use.
                    </div>
                </div>
                

                
                <div className="howItWorkItem">
                    <img src="./assets/work-pic-3@2x.png" alt="" />
                    <div className="howItWorkItem_Title">
                      Save more
                    </div>
                    <div className="howItWorkItem_Desc">
                        We realize ideas from simple to complex, everything becomes easy to use.
                    </div>
                </div>


            </div>

        </div>
    )
}
