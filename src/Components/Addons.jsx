import ContentHeader from "./ContentHeader";
import { useContext } from "react";
import { RegisterContext } from "../Contexts/RegisterContext";
import { WatchContext } from "../Contexts/WatchContext";
import "./Addons.css"
import { pricePlans } from "../data/plans";

export default function Addons() {
    const register = useContext(RegisterContext);
    const watch = useContext(WatchContext);

    return (
        <>
            <ContentHeader header="Pick add-ons" paragraph="Add-ons help enhance your gaming experience."/>
            <input type="checkbox" name="online-service" id="online-service" {...register("online-service")} />
            <label className="checkbox-input" htmlFor="online-service">
                <div className="checkbox"></div>
                <div>
                    <span className="checkbox-label">Online service</span>
                    <p>Access to multiplayer games</p>
                </div>
                <span className="price">{watch("isYearly") ? `+$${pricePlans.onlineService.year}/yr`: `+$${pricePlans.onlineService.month}/mo`}</span>
            </label>
            <input type="checkbox" name="larger-storage" id="larger-storage" {...register("larger-storage")} />
            <label className="checkbox-input" htmlFor="larger-storage">
                <div className="checkbox"></div>
                <div>
                    <span className="checkbox-label">Larger storage</span>
                    <p>Extra 1TB of cloud save</p>
                </div>
                <span className="price">{watch("isYearly") ? `+$${pricePlans.largerStorage.year}/yr`: `+$${pricePlans.largerStorage.month}/mo`}</span>
            </label>
            <input type="checkbox" name="customizable-profile" id="customizable-profile" {...register("customizable-profile")} />
            <label className="checkbox-input" htmlFor="customizable-profile">
                <div className="checkbox"></div>
                <div>
                    <span className="checkbox-label">Customizable profile</span>
                    <p>Custom theme on your profile</p>
                </div>
                <span className="price">{watch("isYearly") ? `+$${pricePlans.customizableProfile.year}/yr`: `+$${pricePlans.customizableProfile.month}/mo`}</span>
            </label>
        </>
    )
}