import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { type FC, memo } from 'react'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',

    RED = 'red'
}

interface AppLinkProps extends LinkProps {
    className?: string
    children: string | JSX.Element | JSX.Element[]
    theme?: AppLinkTheme
}
export const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className!, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
})
