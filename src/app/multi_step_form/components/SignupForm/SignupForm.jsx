import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import ProfileForm from './1ProfileForm';
import SocialForm from './2SocialForm';
import Review from './3Review';
import { SignupFormProvider } from './SignupFormContext';
import StepLinks from './StepLinks';
import { AnimatePresence } from 'framer-motion';

export default function SignupForm() {
  const location = useLocation();

  return (
    <SignupFormProvider>
      <div className="signup-form">
        {/* show the steps and links */}
        <StepLinks />
        {/* show the forms */}
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={ProfileForm} />
            <Route path="/social" exact component={SocialForm} />
            <Route path="/review" exact component={Review} />
          </Switch>
        </AnimatePresence>
      </div>
    </SignupFormProvider>
  );
}
