import styled from "styled-components";
import { Form as FormStyled, ErrorMessage as FormikError } from 'formik';


export const FormField = styled.label`
display: flex;
flex-direction: column;
padding-bottom: 25px;
max-width: 220px;
gap: 7px;
`;

export const Form = styled(FormStyled)`
background: whitesmoke;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-width: 300px;
padding: 20px;
margin-bottom: 20px;
border: 1px solid black;
border-radius: 5px;
box-shadow: 1px 2px 9px 3px rgba(0,0,0,0.7);

`;

export const ErrorMessage = styled(FormikError)`
color: red;
font-size: 16px;
`;

export const Button = styled.button`
cursor: pointer;
padding: 5px 15px;
border-radius: 3px;
border: 1px solid grey;
background-color: rgba(197, 182, 235, 0.8);
:hover{
    background-color: green;
    color: white;
    transition: background-color color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`

