import styled from "styled-components";

export const Header = styled.header
`    
    margin: 0 auto;
`;

export const Search = styled.div
`   
    margin-top: 20px;
    display: flex;
    justify-content: center;    

    a{
        border: 1px solid #C4C4C4;
        border-radius: 0 5px 5px 0;
        margin-right: 20px; 

        img{            
            position:relative;
            top:20%;
        }
    }
    
`;


export const Input = styled.input
`
    box-sizing: border-box;
    border: 1px solid #C4C4C4;    
    max-width: 540px;
    width: 100%;
    margin-left: 20px; 
    height: 54px;
    border-radius: 5px 0 0 5px;
    color: #635B5B;
    font-size: 16px;
    padding: 20px;
    outline: 0; 
    
`;

export const Text = styled.p
`   
    text-align: start;
    font-size: 14px;
    color: #635B5B;
    margin: 30px 20px;
`;
