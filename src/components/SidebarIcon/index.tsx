import React from "react";
import './style.css';

type sidebarIconProps = {
    icon: any;
    href?: string;
    isOpen: boolean;
    text?: string;
}

export default function SidebarIcon(props: sidebarIconProps) {

    return (
        <a href={props.href}>
            <div className="SidebarIconContainer">
                <img src={props.icon} alt='sidebar icon' />
                {props.isOpen && (<p className="SidebarText">{props.text}</p>)}
            </div>
        </a>
    )
}