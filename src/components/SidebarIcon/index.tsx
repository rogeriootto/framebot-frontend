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
        <>
        {!props.isOpen ? (
            <a href={props.href}>
                <div className="SidebarIconContainer">
                    <img src={props.icon} alt='sidebar icon' />
                </div>
            </a>
        ) : (
            <a href={props.href}>
                <div className="SidebarIconContainer">
                    <img src={props.icon} alt='sidebar icon' />
                    <p className="SidebarText">{props.text}</p>
                </div>
            </a>
        )}
        </>
        
    )
}