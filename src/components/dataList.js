import React, { useState, useEffect } from "react";
import DisplayDataList from "./displayDataList"
import axios from "axios"

export default function DataList() {
    const [space, setSpace] = useState([]);
    const [date, setDate] = useState("date=2019-11-06&")
    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?${date}api_key=NLnqAoxk5snepVV16IoeeOfCrIxfKbExy1XQln7P`)
            .then(response => {
                console.log(response.data);
                setSpace(response.data);
            })
            .catch(error => {
                console.log("The data was not returned", error)
            })
    }, [date]);
    return (
        <div className="space">
            <button onClick={() => setDate("date=2019-11-05&")}>2019-11-05</button>
            <button onClick={() => setDate("date=2019-11-06&")}>2019-11-06</button>
            <button onClick={() => setDate("date=2019-11-07&")}>2019-11-07</button>
            <DisplayDataList
                date={space.date}
                explanation={space.explanation}
                title={space.title}
                hdurl={space.hdurl}
                media_type={space.media_type}
                service_version={space.service_version}
                url={space.url}
            />

        </div>
    );
}