import { ThemeProvider } from './app/providers/ThemeProviders'
import { createRoot, type Root } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import 'app/styles/index.scss'

import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

const domNode = document.getElementById('root')!
const root: Root = createRoot(domNode)

root.render(
    <BrowserRouter >
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
)
