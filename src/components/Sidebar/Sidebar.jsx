import { FaDiscord } from 'react-icons/fa';

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
            <SideBarIcon icon={<FaDiscord size="28" />} />
            <SideBarIcon icon={<FaDiscord size="28" />} />
            <SideBarIcon icon={<FaDiscord size="28" />} />
            <SideBarIcon icon={<FaDiscord size="28" />} />
            <SideBarIcon icon={<FaDiscord size="28" />} />
        </div>
    );
};

export const SideBarRight = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
            <SideBarUser icon={<FaDiscord size="28" />} />
            <SideBarUser icon={<FaDiscord size="28" />} />
            <SideBarUser icon={<FaDiscord size="28" />} />
            <SideBarUser icon={<FaDiscord size="28" />} />
            <SideBarUser icon={<FaDiscord size="28" />} />
        </div>
    );
};

export const SideBarIcon = ({ icon, text = 'tooltip' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
    </div>
);

export const SideBarUser = ({ icon }) => (
    <div className="sidebar-icon group">
        {icon}
    </div>
);


export const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
