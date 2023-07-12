import React from "react";
import './style.css';
import { Link } from "react-router-dom";

type sidebarIconProps = {
    icon: any;
    href?: string;
    isOpen: boolean;
    text?: string;
}

export default function SidebarIcon(props: sidebarIconProps) {

    return (
        <Link to={`/${props.href}`}>
            <div className="SidebarIconContainer">
                <img src={props.icon} alt='sidebar icon' />
                {props.isOpen && (<p className="SidebarText">{props.text}</p>)}
            </div>
        </Link>
    )
}