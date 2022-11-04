import styled from "styled-components";
import SPDescription from "./SPDescription";
import SPStats from "./SPStats";
import stats from "../../stats";
import desktopImage from "../../images/image-header-desktop.jpg";
import mobileImage from "../../images/image-header-mobile.jpg"

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
            <picture>
                <source srcset={desktopImage} media="(min-width: 700px)" />
                <img src={mobileImage} alt={"People working in the office."} />
            </picture>
            <Layer />
            <SPDescription />
            <Stats>
                {stats.map(createStats)}
            </Stats>
        </Card>
    );
}

export default SPCard;

/* ------------------------------Styles------------------------------ */

const Card = styled.article`
    height: 440px;
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
    ;

    picture {
        grid-area: image;
    }  

    img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 700px) {
        height: 700px;
        grid-template-columns: 100%;
        grid-template-rows: 30% 35% 35%;
        grid-template-areas:
            "image"
            "description"
            "stats"
        ;
        text-align: center;
    }

`;

const Layer = styled.div`
        grid-area: image;
        height: 100%;
        width: 100%;
        background-color: hsl(277, 80%, 30%);
        opacity: 0.6;
`;

const Stats = styled.section`
    padding: 5% 27% 5% 13%;
    grid-area: stats;
    display: flex;
    justify-content: space-between;

    @media (max-width: 700px) {
        padding: 0;
        flex-direction: column;
        justify-content: center;
        justify-self: center;
        
        div {
            margin: 0;
        }

    }


`;