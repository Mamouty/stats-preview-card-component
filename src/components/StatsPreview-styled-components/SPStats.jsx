import styled from "styled-components";

const Status = styled.div`
    h1 {
        font-family: 'Inter', sans-serif;
        font-size: 1.42rem;
        color: hsl(0, 0%, 100%);
        margin-bottom: 0;
    }

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 0.78rem;
        color: hsla(0, 0%, 100%, 0.6);  
        margin-top: 5px;
    }

    @media (max-width: 889px) {
        margin-top: 35%;
        h1 {
            font-size: 1.2rem;
        }
        p {
            font-size: 0.6rem;
        }
    }

`;

function SPStats(props) {
    return(
        <Status>
            <h1>{props.number}</h1>
            <p>{props.subject}</p>
        </Status>
    );
}

export default SPStats;