import styled from "styled-components";

const Desc = styled.section`
    padding: 7% 13% 5%;
    grid-area: description;

    h1 {
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: 2.2rem;
        margin: 20px 0;
        color: hsl(0, 0%, 100%);

    }

    p {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 0.9rem;
        line-height:  1.7; 
        padding-right: 7%;
        color: hsla(0, 0%, 100%, 0.75);

        
    }

    @media(max-width: 809px) {
        h1 {
            font-size: 1.9rem;
        }
        p {
            font-size: 0.8;
            line-height: 1.5;
        }
    }

`;

function SPDescription() {
    return(
        <Desc>
            <h1>Get <span style={{color: "hsl(277, 64%, 61%)"}}>insights</span> that help your business grow.</h1>
            <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer 
  experience, and overall efficiency.</p>
        </Desc>
    );
}

export default SPDescription;