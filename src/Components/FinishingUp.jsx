import ContentHeader from "./ContentHeader";
import "./FinishingUp.css";
import { WatchContext } from "../Contexts/WatchContext";
import { pricePlans } from "../data/plans";
import { useContext } from "react";

export default function FinishingUp({setCurrentStep}) {
    const watch = useContext(WatchContext);
    
    const planCost = watch("isYearly") ? pricePlans[watch("plan")].year : pricePlans[watch("plan")].month;
    const onlineServiceCost = watch("online-service") ? watch("isYearly") ? pricePlans.onlineService.year : pricePlans.onlineService.month : 0;
    const largerStorageCost = watch("larger-storage") ? watch("isYearly") ? pricePlans.largerStorage.year : pricePlans.largerStorage.month : 0;
    const customizableProfileCost = watch("customizable-profile") ? watch("isYearly") ? pricePlans.customizableProfile.year : pricePlans.customizableProfile.month : 0;
    const totalCost = planCost + onlineServiceCost + largerStorageCost + customizableProfileCost;

    return (
        <div className="finishing-up">
            <ContentHeader header="Finishing up" paragraph="Double-check everything looks OK before confirming."/>
            <div className="confirmation">
                <div className="plan space-between">
                    <div>
                        <span>
                            {capitalizeFirstLetter(watch("plan"))} ({watch("isYearly") ? "Yearly" : "Monthly"})
                        </span>
                        <button type="button" className="change" onClick={() => setCurrentStep(2)}>Change</button>
                    </div>
                    <span>${planCost}/{watch("isYearly") ? "yo" : "mo"}</span>
                </div>
                <div>
                    {
                        watch("online-service") && 
                        <div className="add-ons space-between">
                            <span className="name">Online service</span>
                            <span className="cost">+${watch("isYearly") ? `${pricePlans.onlineService.year}/yr` : `${pricePlans.onlineService.month}/mo`}</span>
                        </div>
                    }
                    {
                        watch("larger-storage") && 
                        <div className="add-ons space-between">
                            <span className="name">Larger storage</span>
                            <span className="cost">+${watch("isYearly") ? `${pricePlans.largerStorage.year}/yr` : `${pricePlans.largerStorage.month}/mo`}</span>
                        </div>
                    }
                    {
                        watch("customizable-profile") && 
                        <div className="add-ons space-between">
                            <span className="name">Customizable profile</span>
                            <span className="cost">+${watch("isYearly") ? `${pricePlans.customizableProfile.year}/yr` : `${pricePlans.customizableProfile.month}/mo`}</span>
                        </div>
                    }
                </div>
            </div>
            <div className="total space-between">
                <span className="total-tag">Total (per {watch("isYearly") ? "year" : "month"})</span>
                <span className="total-cost">+${totalCost}/{watch("isYearly") ? "yr" : "mo"}</span>
            </div>
        </div>
    );
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}