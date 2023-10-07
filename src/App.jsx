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
    <form onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  )
}

export default App
