import "./StepsContent.css";
import ContentHeader from "./ContentHeader";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";


export default function StepsContent({currentStep, isConfirmed}) {
    return (
        <div className="steps-content">
            <section className={currentStep === 1 && !isConfirmed ? "active" : ""}>
                <PersonalInfo />
            </section>
            <section className={currentStep === 2 && !isConfirmed ? "active" : ""}>
                <SelectPlan />
            </section>
            <section className={currentStep === 3 && !isConfirmed ? "active" : ""}>
                <ContentHeader header="Pick add-ons" paragraph="Add-ons help enhance your gaming experience."/>
            </section>
            <section className={currentStep === 4 && !isConfirmed ? "active" : ""}>
                <ContentHeader header="Finishing up" paragraph="Double-check everything looks OK before confirming."/>
            </section>
            <section className={`confirm ${isConfirmed ? "active" : ""}`}>
                <ContentHeader header="Thank you!" paragraph="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."/>
            </section>
        </div>
    );
}