import "./StepsContent.css";
import ContentHeader from "./ContentHeader";

export default function StepsContent({currentStep, isConfirmed, register, errors}) {
    return (
        <div className="steps-content">
            <section className={currentStep === 1 && !isConfirmed ? "active" : ""}>
                <ContentHeader header="Personal info" paragraph="Please provide your name, email address, and phone number."/>
                <div className="label">
                    <label htmlFor="name">Name</label>
                    {errors?.name?.type === "required" && <span className="error">This field is required</span>}
                </div>
                <input className={errors?.name ? "invalid" : ""} type="text" id="name" name="name" placeholder="e.g. Stephen King" {...register("name", {
                    required: true
                })} />
                <div className="label">
                    <label htmlFor="email">Email Address</label>
                    <span className="error">
                        {
                            errors?.email?.type === "required" 
                            ? "This field is required"
                            : errors?.email?.type === "pattern"
                            ? "Invalid email adress"
                            : ""
                        }
                    </span> 
                </div>
                <input className={errors?.email ? "invalid" : ""} type="text" id="email" name="email" placeholder="e.g. stephenking@lorem.com" {...register("email", {
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                })} />
                <div className="label">
                    <label htmlFor="name">Phone Number</label>
                    {errors?.phoneNumber?.type === "required" && <span className="error">This field is required</span>}
                </div>
                <input className={errors?.phoneNumber ? "invalid" : ""} type="text" id="phoneNumber" name="phoneNumber" placeholder="e.g. +1 234 567 890" {...register("phoneNumber", {
                    required: true
                })} />
            </section>
            <section className={currentStep === 2 && !isConfirmed ? "active" : ""}>
                <ContentHeader header="Select your plan" paragraph="You have the option of monthly or yearly billing."/>
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