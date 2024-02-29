import { BsBell } from "react-icons/bs";
import "../../styles/components/notifications.scss";
const Notifications = () => {
    return (
        <div className="notifications">
            <BsBell className="icon"/>
            <span className="badge">2</span>
        </div>
    )
}

export default Notifications;