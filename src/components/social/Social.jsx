import { Icon } from '@iconify/react';

/**
 * Icône des réseaux sociaux
 * @param {{iconName:string}} props 
 * @returns des icônes
 */
export const Social = (props) => {
    return (
        <Icon icon={props.iconName} color="#FDB927"/>
    )
}