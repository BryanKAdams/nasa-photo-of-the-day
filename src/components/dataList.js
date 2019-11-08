import React, { useState, useEffect } from "react";
import DisplayDataList from "./displayDataList"
import axios from "axios"
import styled from "styled-components"

const Button = styled.button`
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

const CurrentButton = styled(Button)`
color: orange;
border: 2px solid orange;
`

const SpaceDiv = styled.div`
border: 1px solid black;
width: 500px;
margin: 0 auto;
background-color: #BF6D47;
@media (max-width: 400px) {
    width: 400px;
}
`;
export default function Apod() {
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [space, setSpace] = useState({});
     
    useEffect(() => {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?date=${date}&api_key=N4MpQjQ0tUkib6KcvHGIMTd2736496guxIZuV994`,
        )
        .then(response => setSpace(response.data));
    }, [date]);
  

    return (
        <SpaceDiv className="space">
            <Button onClick={() => setDate("date=2019-11-04&")}>2019-11-04</Button>
            <Button onClick={() => setDate("date=2019-11-05&")}>2019-11-05</Button>
            <Button onClick={() => setDate("date=2019-11-06&")}>2019-11-06</Button>
            <CurrentButton onClick={() => setDate("")}>Today!</CurrentButton>
            <DisplayDataList
                date={space.date}
                explanation={space.explanation}
                title={space.title}
                hdurl={space.hdurl}
                media_type={space.media_type}
                service_version={space.service_version}
                url={space.url}
            />

        </SpaceDiv>
    );
}