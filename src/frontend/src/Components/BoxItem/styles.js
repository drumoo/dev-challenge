import styled from "styled-components";

export const BoxTitle = styled.div
`
    max-width: 600px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    border: 1px solid #C4C4C4;
    margin: 0 20px;    
    border-radius: 5px 5px 0px 0px;

    h3{
        padding-left: 20px;
    }
    p{
        padding-right: 20px;
    }
`;

export const BoxItems = styled.div
`
    min-height: 65px;
    max-width: 600px;
    width: 90%;
    display: flex;        
    flex-direction: column;
    border: 1px solid #C4C4C4;
    margin: 0 20px 40px 20px;   
    border-radius: 0px 0px 5px 5px;

`;
