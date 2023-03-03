import styled from "styled-components";


export const List = styled.ul`
background: whitesmoke;
padding: 20px;
border: 1px solid black;
border-radius: 5px;
box-shadow: 1px 2px 9px 3px rgba(0,0,0,0.7);
`

export const ListItem = styled.li`
display: flex;
gap: 15px;
align-items: center;
`

export const Button = styled.button`
cursor: pointer;
display: inline-flex;
height: 30px;
padding: 5px 15px;
border-radius: 3px;
border: transparent;
background-color: darkgrey;
align-items: center;
:hover{
    background-color: green;
    color: white;
    transition: background-color color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`
