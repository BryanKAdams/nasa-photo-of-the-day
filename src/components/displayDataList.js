import React from "react";

const DisplayDataList = props => {
    return (
        <div className="data-list">
            <h2> {props.title}</h2>
            <h4>Type: {props.media_type}</h4>

            <div className="bottom">
                <a href={props.url}><img src={props.hdurl} />
                </a>
                <h4>{props.service_version}</h4>
                <p> {props.explanation}</p>
                <h3>Date: {props.date} </h3>

            </div>
        </div>
    );
};
export default DisplayDataList;
