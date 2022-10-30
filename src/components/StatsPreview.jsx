import styled from "styled-components";
import SPCard from "./StatsPreview-styled-components/SPCard";

const Main = styled.main`
    height: 100vh;
    background-color: hsl(233, 47%, 7%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

function StatsPreview() {
    return (
        <Main>
            <SPCard />
        </Main>
    );
}

export default StatsPreview;