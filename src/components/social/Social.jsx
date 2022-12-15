import { Icon } from '@iconify/react';
import './Social.css';


/**
 * Icône des réseaux sociaux
 * @param {{iconName:string}} props 
 * @returns des icônes
 */
export const Social = (props) => {
    return (
        <Icon className= "social" icon={"entypo-social:" + props.iconName + "-with-circle"} color="#FDB927"  width="25" height="25"/>
    )
}