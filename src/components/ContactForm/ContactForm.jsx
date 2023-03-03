import React from 'react';
import { Formik, Field } from 'formik';
import { FormField, Form, ErrorMessage, Button } from './ContactForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';


const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const nameRegError = "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const phoneRegError = "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +";

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .trim()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
        .required('Required')
        .matches( nameRegExp, nameRegError),
    number: Yup.string()
        .matches(phoneRegExp, phoneRegError)
        .required('Required'),
 });


export const ContactForm = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, actions) => {
                onSubmit({
                    ...values,
                    id: nanoid(),
                });
                actions.resetForm();
            }}
        >
            <Form>
                <FormField>
                    Name
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" component="span" />
                    Number
                    <Field name="number" type="tel" />
                    <ErrorMessage name="number" component="span" />
                </FormField>
                <Button type="submit">Add contact</Button>
            </Form>
        </Formik>)
    
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

