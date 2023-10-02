import ContentHeader from "./ContentHeader";
import { useContext } from "react";
import { RegisterContext } from "../Contexts/RegisterContext";
import { ErrorsContext } from "../Contexts/ErrorsContext";

export default function PersonalInfo() {
    const register = useContext(RegisterContext);
    const errors = useContext(ErrorsContext);

    return (
        <>
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
        </>
    )
}