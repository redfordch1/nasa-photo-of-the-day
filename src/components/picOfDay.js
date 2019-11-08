import React from "react";
import styled from "styled-components";

function PicOfDay(props) {

  const BigContainer = styled.div`
    background-color: grey;
    height: 100%;
    width: 100%;
    margin: 0;
    padding-bottom: 40px;
  `;

  const Card = styled.div`
    background: lightgrey;
    width: 60%;
    margin: 40px auto 0px auto;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 20px 30px 5px rgba(0, 0, 0, 0.9);
    border: 1px solid slategrey;

    h3 {
      font-size: 40px;
    }

    p {
      line-height: 1.6;
      font-size: 20px;
    }
  `;

  const Container2 = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${props.url});
    height: 80vh;
    padding: 0;
    margin: 0;

    h1 { 
      color: black;
      padding: 40px;
      font-family: 'Bowlby One SC', regular;
      text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    }

    h2 {
      color: lightgrey;
      padding: 20px;
      font-family: 'Bowlby One SC', regular;
    }

    h3 {
      color: lightgrey;
      padding: 20px;
      font-family: 'Bowlby One SC', regular;
    }
  `;

  return (
    <BigContainer>
        <Container2>
            <h1>NASA IS AWESOME</h1>
            <h2>{props.title}</h2>
            <h3>Pic Date: {props.date}</h3>
        </Container2>
        <Card>
            <div className = "bottomInfo">
                <h3>About Photo</h3>
                <p>{props.explanation}</p>
            </div>
        </Card>  
    </BigContainer>
  );
}

export default PicOfDay;