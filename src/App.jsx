import './App.css'
import StepInfo from './Components/StepInfo';
import StepsContent from './Components/StepsContent';
import StepNavigation from './Components/StepNavigation';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { RegisterContext } from './Contexts/RegisterContext';
import { ErrorsContext } from './Contexts/ErrorsContext';
import { WatchContext } from './Contexts/WatchContext';

function App() {
  const stepsLength = 4;
  const [currentStep, setCurrentStep] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      plan: "arcade",
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    setIsConfirmed(true);
  };

  const isStepValid = async () => {
    switch(currentStep) {
      case 1:
        return await trigger(["name", "email", "phoneNumber"]);
      default:
        return true;
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}>
      <StepInfo stepsLength={stepsLength} currentStep={currentStep} />
      <RegisterContext.Provider value={register}>
        <ErrorsContext.Provider value={errors}>
          <WatchContext.Provider value={watch}>
            <StepsContent 
              currentStep={currentStep} 
              isConfirmed={isConfirmed} 
              setCurrentStep={setCurrentStep}
            /> 
          </WatchContext.Provider>
        </ErrorsContext.Provider>
      </RegisterContext.Provider>
      <StepNavigation 
        stepsLength={stepsLength} 
        currentStep={currentStep} 
        setCurrentStep={setCurrentStep} 
        isConfirmed={isConfirmed} 
        isStepValid={isStepValid}
      />

      {/* <!-- Sidebar start -->

      Step 1
      Your info

      Step 2
      Select plan

      Step 3
      Add-ons

      Step 4
      Summary

      <!-- Sidebar end --> 

      <!-- Step 1 start --> 

      Personal info
      Please provide your name, email address, and phone number.

      Name
      e.g. Stephen King

      Email Address
      e.g. stephenking@lorem.com

      Phone Number
      e.g. +1 234 567 890

      Next Step

      <!-- Step 1 end --> 

      <!-- Step 2 start --> 

      Select your plan
      You have the option of monthly or yearly billing.

      Arcade
      $9/mo

      Advanced
      $12/mo

      Pro
      $15/mo

      Monthly
      Yearly

      Go Back
      Next Step

      <!-- Step 2 end --> 

      <!-- Step 3 start --> 

      Pick add-ons
      Add-ons help enhance your gaming experience.

      Online service
      Access to multiplayer games
      +$1/mo

      Larger storage
      Extra 1TB of cloud save
      +$2/mo

      Customizable Profile
      Custom theme on your profile
      +$2/mo

      Go Back
      Next Step

      <!-- Step 3 end --> 

      <!-- Step 4 start --> 

      Finishing up
      Double-check everything looks OK before confirming.

      <!-- Dynamically add subscription and add-on selections here --> 

      Total (per month/year)

      Go Back
      Confirm

      <!-- Step 4 end --> 

      <!-- Step 5 start --> 

      Thank you!

      Thanks for confirming your subscription! We hope you have fun 
      using our platform. If you ever need support, please feel free 
      to email us at support@loremgaming.com.

      <!-- Step 5 end --> 

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </form>
  )
}

export default App
