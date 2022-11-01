import styled from "styled-components";
import SPDescription from "./SPDescription";
import SPStats from "./SPStats";
import stats from "../../stats";

const Card = styled.article`
    height: 435px;
    width: 77%;
    background-color: hsl(244, 38%, 16%);
    border-radius: 7px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 52% 48%;
    grid-template-rows: 60% 40%;
    grid-template-areas: 
        "description image"
        "stats image"
`;
const Stats = styled.article`

`;

function createStats(status, index) {
    return(
        <SPStats
         key={index}
         number={status.number}
         subject={status.subject}
        />
    );
}

function SPCard() {
    return (
        <Card>
            <SPDescription />
            <Stats>
                {stats.map(createStats)}
            </Stats>
        </Card>
    );
}

export default SPCard;