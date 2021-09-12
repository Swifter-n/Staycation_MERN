import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function PageDetailDescription({data}){
    return(
        <main>
            <h4>About The Place</h4>
            {ReactHtmlParser(data.description)}
            <div className="row" style={{marginTop: 30}}>
                {data.featureId === 0 ? "Tidak ada data feature" :
                data.featureId.map((feature, index) =>{
                    return(
                        <div key={`feature-${index}`} className="col-3" style={{marginBottom: 20}}>
                            <img className="d-block mb-2" width="38" src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`} alt={feature.name}/>{" "}
                    <span>{feature.qty}</span>{" "}
                    <span className="text-gray-500 font-weight-light">
                        {feature.name}
                    </span>

                            </div>
                    )
                })}
                
            </div>
        </main>
    );
}
