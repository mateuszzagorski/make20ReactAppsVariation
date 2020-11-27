import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SignupForm from "./components/SignupForm/SignupForm";
import "./multi_step_form.scss";

export default function MultiStepForm() {
    return (
        <Router>
            <div className="multi_step_form-app">
                <SignupForm />
            </div>
        </Router>
    );
}
