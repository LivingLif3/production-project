// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
import './styles/index.scss'
import { useTheme } from './providers/ThemeProviders/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/routers'
import { Navbar } from 'widgets/NavBar'
import { Sidebar } from 'widgets/Sidebar'
import { type FC, Suspense } from 'react'

const App: FC = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', { hovered: true, selected: false }, [theme!])}>
            <Suspense fallback="">
                <Navbar />
                <div className={'content-page'}>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
