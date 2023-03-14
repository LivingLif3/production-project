import { ReactNode } from 'react'
import { create } from 'domain'
import { createPortal } from 'react-dom'

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}
export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.body
    } = props
    return createPortal(children, element!)
};
