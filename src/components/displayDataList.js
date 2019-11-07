import React from "react";
import styled from "styled-components"

const TypeHeader = styled.h4`
  text-align: right;
  margin: 0;
  width: 90%;l
`


const TitleProp = styled.h2`
background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
-webkit-background-clip: text;
color: transparent; 
border: 1px solid black;
width: 90%;
margin: 0 auto;
margin-top: 20px;
text-align: center;
`
const SpaceImage = styled.img`
border: 4px solid gray;
height: 400px;
width: 90%;
`
const ExplanationProp = styled.p`
border: 2px solid gold;
  width: 90%;
  margin: 0 auto;
  font-size: .6rem;
`
const DateProp = styled.h3`
width: 90%;
text-align: right;
margin: 0 auto;
`
const VersionProp = styled.h4`
text-align: right;
margin: 0;
width: 90%;
`

const DisplayDataList = props => {

    return (
        <div className="data-list">
          { props.hdurl ? (<div><TitleProp> {props.title}</TitleProp>
            <TypeHeader>Type: {props.media_type}</TypeHeader>
            <div>
                <a href={props.url}><SpaceImage src={props.hdurl} />
                </a>
                <VersionProp>{props.service_version}</VersionProp>
                <ExplanationProp> {props.explanation}</ExplanationProp>
                <DateProp>Date: {props.date} </DateProp>
            </div></div>): (<h3>Loading...</h3>)}
        </div>
    );
  };
  export default DisplayDataList;