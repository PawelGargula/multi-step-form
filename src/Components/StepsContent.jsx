import "./StepsContent.css";
import ContentHeader from "./ContentHeader";

export default function StepsContent({currentStep, isConfirmed}) {
    return (
        <div className="steps-content">
            <section className={currentStep === 1 ? "active" : ""}>
                <ContentHeader header="Personal info" paragraph="Please provide your name, email address, and phone number."/>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="e.g. Stephen King" />
            </section>
            <section className={currentStep === 2 ? "active" : ""}>
                <ContentHeader header="Select your plan" paragraph="You have the option of monthly or yearly billing."/>
            </section>
            <section className={currentStep === 3 ? "active" : ""}>
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