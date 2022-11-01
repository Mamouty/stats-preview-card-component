import styled from "styled-components";

const Status = styled.div`

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