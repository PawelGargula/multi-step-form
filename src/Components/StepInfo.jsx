import "./StepInfo.css"

export default function StepInfo({currentStep, stepsLength}) {
    const steps = Array.from({length: stepsLength}, (_, i) => i + 1);
    return (
        <div className="step-info">
            <div className="background-image"></div>
            <div className="steps">
                {steps.map(step => 
                    <div className="one-step" key={step}>
                        <div className={step === currentStep ? "step active" : "step"}>
                            <span>{step}</span>
                        </div>
                        <div className="step-text">
                            <span>
                                STEP {step}
                            </span>
                            <span>
                                {
                                    step === 1
                                    ? "YOUR INFO"
                                    : step === 2
                                    ? "SELECT PLAN"
                                    : step === 3
                                    ? "ADD-ONS"
                                    : "SUMMARY"
                                }
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>       
    );
}