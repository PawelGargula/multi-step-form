import "./StepNavigation.css";

export default function StepNavigation({currentStep, setCurrentStep, stepsLength, isConfirmed, isStepValid}) {
    return (
        !isConfirmed &&
        <div className="step-navigation">
            {currentStep > 1 && !(currentStep > stepsLength) && <button className="back" onClick={() => setCurrentStep(currentStep - 1)} type="button">Go back</button>}
            {currentStep < stepsLength && <button className="next" onClick={async () => 
                await isStepValid() && setCurrentStep(currentStep + 1)
            } type="button">Next Step</button>}
            {currentStep === stepsLength && <button className="confirm" type="submit">Confirm</button>}
        </div>
    );
}