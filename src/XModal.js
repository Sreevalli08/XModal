import React, {useState} from "react";
import "./App.css";


function XModal(){

    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        dob: "",
        phone: "",
    });

    //Handle input change

    const handleChange = (e) => {
        const {id, value} = e.target;

        setFormData({...formData, [id]: value});

    };

    //form submit 

    const handleSubmit =(e) => {
        e.preventDefault();


        const {username, email, dob, phone}  = formData;
        

        //check empty fields

        if(!username){
            alert("Please fill out the Username field.")
            return;
        }

        if (!email) {
            alert("Please fill out the Email field");

            return;
        }

        if (!dob){
              alert("Please fill out the Date of Birth field");

            return;
        }
        if(!phone){

          alert("Please fill out the phone field");

            return;
        }

        if(!email.includes("@")){
              alert("Invalid email. Please check your email address.");

            return;
        }

        //Phone validation

        if(!/^\d{10}$/.test(phone)){

            alert("Invalid phone number. Please enter a 10-digit phone number");

            return;
        }

        //DOB validation
        const dobDate = new Date(dob);
            const today = new Date();

            if(dobDate > today) {
                alert("Invalid date of Birth. Please select a valid past date.");

                return;
            }

            //reset form and close modal

            setIsOpen(false);
            setFormData({username: "", email: "", dob: "", phone: "" });

        };

        // close modal if clicked outside

        const handleOutSideClick = (e) => {

            if (e.target.className === "modal") {
                setIsOpen(false);
            }
        };

        return (

            <div className="App">
                <h1>User Details Modal</h1>

                {!isOpen && (
                    <button onClick = { () => setIsOpen(true)} className="open-form">Open Form</button>
                )}

                {isOpen && (
                    <div className="modal" onClick ={handleOutSideClick} > 

                    <div className="modal-content">
                        <h2>Fill Details</h2>
                        <form onSubmit = {handleSubmit}>

                            <div className="form-group">

                                <label className="lable">Username: </label>

                                <input className="input"

                                type = "text"
                                id = "username"
                                value = {formData.username}
                                onChange = {handleChange}
                                    />
                            </div>

                            <div className="form-group">

                                <label className="lable">Email Address: </label>

                                <input className="input"

                                type = "email"
                                id = "email"
                                value = {formData.email}
                                onChange = {handleChange}
                                    />
                                </div>

                                 <div className="form-group">

                                <label className="lable">Phone Number: </label>

                                <input className="input"

                                type = "number"
                                id = "phone"
                                value = {formData.phone}
                                onChange = {handleChange}
                                    />
                                </div>

                               <div className="form-group">

                                <label className="lable">Date of Birth: </label>

                                <input className="input"

                                type = "date"
                                id = "dob"
                                value = {formData.dob}
                                onChange = {handleChange}
                                placeholder="dd-mm-yyyy"
                                    />
                                </div>

                                <button type = "submit" className = "submit-button">

                                    Submit
                                </button>
                               
                        </form>
                    </div>
                    </div>
                )}
            </div>
        );
    
    }

    export default XModal;
