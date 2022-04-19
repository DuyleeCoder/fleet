import "./planning.css"

export default function Planning() {
    return (
        <div className='Planning'>

            <div className="planning__left">
                <div className="planning__miniHeading">
                 supercharge your planning powers
                </div>
                <div className="planning__heading">
                 Travel to make memories all around the world
                </div>

                <div className="planning__desc">
                    Stacks is a production-ready library of stackable content blocks built in React Native.
                </div>
                <div className="planning__searchContainer">
                    <input type="text" className="planning__search" placeholder="Enter your phone number" />
                    <i class="fas fa-arrow-right planning__searchBtn"></i>
                </div>
            </div>
            <div className="planning__right">
                
            </div>


        </div>
    )
}
