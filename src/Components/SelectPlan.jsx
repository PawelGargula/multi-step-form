import ContentHeader from "./ContentHeader";
import { useContext } from "react";
import { RegisterContext } from "../Contexts/RegisterContext";
import { ErrorsContext } from "../Contexts/ErrorsContext";
import { WatchContext } from "../Contexts/WatchContext";
import "./SelectPlan.css";
import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import proIcon from '../assets/images/icon-pro.svg';
import { pricePlans } from "../data/plans";

export default function SelectPlan() {
    const register = useContext(RegisterContext);
    const errors = useContext(ErrorsContext);
    const watch = useContext(WatchContext);

    return (
        <>
            <ContentHeader header="Select your plan" paragraph="You have the option of monthly or yearly billing."/>
            <input type="radio" id="arcade" value="arcade" {...register("plan")} />
            <label className="radio-input" htmlFor="arcade">
                <img src={arcadeIcon} alt="arcade plan icon" />
                <div className="plan-info">
                    <span>Arcade</span>
                    {watch("isYearly") 
                    ? <p>{`$${pricePlans.arcade.year}/yr`}<span className="free-months"> (2 months free)</span></p> 
                    : <p>{`$${pricePlans.arcade.month}/mo`}</p>}
                </div>
            </label>
            <input type="radio" id="advanced" value="advanced" {...register("plan")} />
            <label className="radio-input" htmlFor="advanced">
                <img src={advancedIcon} alt="advanced plan icon" />
                <div className="plan-info">
                    <span>Advanced</span>
                    {watch("isYearly") 
                    ? <p>{`$${pricePlans.advanced.year}/yr`}<span className="free-months"> (2 months free)</span></p> 
                    : <p>{`$${pricePlans.advanced.month}/mo`}</p>}
                </div>
            </label>
            <input type="radio" id="pro" value="pro" {...register("plan")} />
            <label className="radio-input" htmlFor="pro">
                <img src={proIcon} alt="pro plan icon" />
                <div className="plan-info">
                    <span>Pro</span>
                    {watch("isYearly") 
                    ? <p>{`$${pricePlans.pro.year}/yr`}<span className="free-months"> (2 months free)</span></p> 
                    : <p>{`$${pricePlans.pro.month}/mo`}</p>}
                </div>
            </label>
            <div className="period">
                <span className={!watch("isYearly") ? "active" : ""}>Monthly</span>
                <label className="switch">
                    <input type="checkbox" {...register("isYearly")} />
                    <span className="slider round"></span>
                </label>
                <span className={watch("isYearly") ? "active" : ""}>Yearly</span>
            </div>
        </>
    )
}