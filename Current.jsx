import React from "react";


const Current = ({ current, location }) => {
    return (
        <div className="container mt-5">
            <h4 className="text-center">Current Weather of {location.name},{location.region}</h4>
            <div className="row">
                {/* col-1*/}
                <div className="col-3 ">
                    <div className="card bg-primary bg-opacity-50 border border-primary border-3 "   >


                        <div className="card-body " >
                            <img src={current.condition.icon} className="card-img-top float-start " alt="" style={{width:'15%'}}/>
                            <h5 className="card-title ">{current.condition.text}</h5>
                        </div>

                    </div>
                </div>

                {/* col-2 */}
                <div className="col-3">

                    <div className="card bg-primary bg-opacity-50 border border-primary border-3" >

                        <div className="card-body" style={{height:'50%'}}>

                            <h5 className="card-title "> Temp in c: {current.temp_c}</h5>



                        </div>
                    </div>

                </div>
                {/* col-3 */}
                <div className="col-3">
                    <div className="card bg-primary bg-opacity-50 border border-primary border-3" >

                        <div className="card-body">

                            <h5 className="card-title "> Temp in f: {current.temp_f}</h5>



                        </div>
                    </div>
                </div>
                {/* col-4 */}
                <div className="col-3">
                    <div className="card bg-primary bg-opacity-50 border border-primary border-3" >

                        <div className="card-body">

                            <h5 className="card-title "> Humidity: {current.humidity}</h5>



                        </div>
                    </div>

                </div>


             {/* second row */}

            </div>

            <div className="row mt-5">
                {/* col-1*/}
                <div className="col-3">

                    <div className="card bg-primary bg-opacity-50 border border-primary border-3" >

                        <div className="card-body">

                            <h5 className="card-title "> Wind Degree: {current.wind_degree}</h5>



                        </div>
                    </div>

                </div>

                {/* col-2 */}
                <div className="col-3">

                    <div className="card bg-primary  bg-opacity-50 border border-primary  border-3" >

                        <div className="card-body">

                            <h5 className="card-title "> Wind Dir: {current.wind_dir}</h5>



                        </div>
                    </div>

                </div>
                {/* col-3 */}
                <div className="col-3">
                    <div className="card bg-primary bg-opacity-50 border border-primary border-3" >

                        <div className="card-body">

                            <h5 className="card-title "> Wind speed(kph): {current.wind_kph}</h5>



                        </div>
                    </div>
                </div>
                {/* col-4 */}
                <div className="col-3">
                    <div className="card bg-primary bg-opacity-50 border border-primary border-3" >

                        <div className="card-body">

                            <h5 className="card-title "> Wind speed(mph): {current.wind_mph}</h5>



                        </div>
                    </div>

                </div>




            </div>

        </div>

    )
}

export default Current;