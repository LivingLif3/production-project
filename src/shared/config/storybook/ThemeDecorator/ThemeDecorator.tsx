import { type Story } from '@storybook/react'
import { Theme } from '../../../../app/providers/ThemeProviders'
import ThemeProvider from '../../../../app/providers/ThemeProviders/ui/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    )
}
