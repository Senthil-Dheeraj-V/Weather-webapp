import React from "react";


const Forecast = ({ forecast, location }) => {
    return (
        <div className="container  mt-3">
            <h4 className="text-center">Forecast Weather of {location.name},{location.region}</h4>
            {forecast.forecastday.map((data, index) => {
                return (
                    <div className="accordion accordion-flush mt-3 " id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed"
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target={`#${index}`}
                                    aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    <div class="d-flex flex-row align-items-center mb-3 ">
                                        <div class="p-2">{data.date}</div>
                                        <div class="p-2"><img src={data.day.condition.icon} /></div>
                                        <div class="p-2 ">{data.day.condition.text}</div>
                                        <div class="p-2">Min Temp:{data.day.mintemp_c}</div>
                                        <div class="p-2">Max Temp:{data.day.maxtemp_c}</div>
                                    </div>
                                </button>
                            </h2>
                            <div id={`${index}`}
                                className="accordion-collapse collapse "
                                data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-center">
                                    {data.hour.map((data) => {
                                        return (
                                            <>
                                          <h6> {data.time}/Temp in C/{data.condition.text}</h6> 
                                            <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" style={{width:`${data.temp_c}%`}}>{data.temp_c}%
                                                
                                                </div>
                                            </div>
                                            </>

                                            
                                        );
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>


    )
}

export default Forecast;