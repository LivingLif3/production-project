// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
import { useTheme } from './providers/ThemeProviders/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/routers'
import { Navbar } from 'widgets/NavBar'
import { Sidebar } from 'widgets/Sidebar'
import { type FC, Suspense, useEffect, useState } from 'react'
import { Modal } from '../shared/ui/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInited, userActions } from '../entities/User'

const App: FC = () => {
    const { theme } = useTheme()
    const dispatch = useDispatch()
    const inited = useSelector(getUserInited)

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', { hovered: true, selected: false }, [theme!])}>
            <Suspense fallback="">
                <Navbar />
                <div className={'content-page'}>
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    )
}

export default App
