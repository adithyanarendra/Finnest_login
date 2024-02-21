import "./ContentHeader.css";
import BellIcon from "../../assets/icons/bell.svg";

const ContentHeader = () => {
    return (
        <div className="headerContainer d-flex flex-row justify-content-between align-items-center">
            <div className="d-flex flex-column align-items-start m-0 px-5">
                <span className="fw-bold fs-5">User Management</span>
                <span className="fw-light fs-6">Manage Permissions</span>
            </div>
            <div className="d-flex flex-row m-0 px-5">
                <img className="icon-styles" src={BellIcon} alt="" />
                <div className="px-3">
                    <img src="" alt="" />
                    <span>John Smith</span>
                </div>
            </div>
        </div>
    );
};

export default ContentHeader;
