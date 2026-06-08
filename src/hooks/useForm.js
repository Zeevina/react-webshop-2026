import { useState, useEffect } from "react";

//Manages form data from MyForm, "name" and "email"
export default function useForm(initiaValues) {
    const [values, setValues] = useState(initiaValues);

    //Handles data from input fields
    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

    //Saves data to Browser Storage(sessionStorage)
    useEffect(() => {
        sessionStorage.setItem(
            "formValues",
            JSON.stringify(values) //Converts objects to text for storage
        );
    }, [values]);

    return [values, handleChange];
}