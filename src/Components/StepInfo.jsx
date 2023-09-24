import "./StepInfo.css"

export default function StepInfo({currentStep, stepsLength}) {
    const steps = Array.from({length: stepsLength}, (_, i) => i + 1);
    return (
        <div className="step-info">
            <div className="background-image"></div>
            <div className="steps">
                {steps.map(step => 
                    <div className={step === currentStep ? "step active" : "step"} key={step}>
                        <span>{step}</span>
                    </div>)}
            </div>
        </div>       
    );
}