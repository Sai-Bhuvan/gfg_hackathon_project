import CompoundIntrestCal from "./CompoundIntrestCal";
import EmiCalculater from "./EmiCalculater";
import SimpleIntrestCal from "./SimpleInterestCal";

export default function InvestPage() {
    return (
        <div className="grid grid-cols-3 justify-center">
            <SimpleIntrestCal />
            <CompoundIntrestCal />
            <EmiCalculater />
        </div>
    )
}
