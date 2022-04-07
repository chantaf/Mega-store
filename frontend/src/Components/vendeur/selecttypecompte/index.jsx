import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useEffect } from "react";
import React from 'react'
import axios from "axios";


const selecttypecompte = ({ setIsOpen,isOpen }) => {
    
    const [typecomptes, settypecomptes] = useState([]);
    const data  = 
    useEffect(() => {
        axios 
        .get(`http://localhost:4000/api/typecomptes/`) .then(res=> settypecomptes(res.data))
    }, []);

  return (

            <div className="mt-4">
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Type compte
                </label>
    


            <Field
                    id="typecompte"
                    name="typecompte"
                    as="select"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                   
                    
                    <option value="" label="Select a typecompte">
                    Select a typecompte{" "}
                    </option>
                    {typecomptes.map((typecompte) => (
                        <option key={typecompte._id} value={typecompte._id}>
                            {typecompte.Name}
                        </option>
                    ))}
               
                </Field>
                {/* {errors.typecompte && touched.typecompte ? (
                    <div className="text-red-500 font-semibold dark:text-red-400">
                        {errors.typecompte}
                    </div>
                ) : null} */}
            </div>

   
  );
};
export default selecttypecompte;



