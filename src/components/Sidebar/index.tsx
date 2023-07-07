import React, { useState } from "react";
import './style.css';
import SidebarIcon from "../SidebarIcon";
import PlusIcon from '../../assets/svg/plus.svg';
import ViewIcon from '../../assets/svg/view.svg'

export default function Siderbar() {

    const [isOpen, setOpen] = useState(false);

    const handleMouseEnter = () =>{
        setOpen(true);
    }
    const handleMouseLeave = () =>{
        setOpen(false);
    }

    return (
        <div className={`SideBarContainer ${isOpen ? 'open' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="Logo">
                <p>{isOpen ? 'FrameBot' : 'FB'}</p>
            </div>
            <div className="Icons">
                <SidebarIcon icon={PlusIcon} isOpen={isOpen} text={isOpen ? 'Add FrameData' : ''}/>
                <SidebarIcon icon={ViewIcon} isOpen={isOpen} text={isOpen ? 'View FrameData' : ''}/>
            </div>
        </div>

    )
}