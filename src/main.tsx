import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StrictMode } from 'react'
import { PostHogProvider } from 'posthog-js/react'
import { POSTHOG_CONFIG } from './config/analytics.ts'
import { PostHogConfig } from 'posthog-js'
import ReactPixel from 'react-facebook-pixel'

// Initialize Facebook Pixel
ReactPixel.init('1498530354084781', undefined, {
    autoConfig: true,
    debug: false,
})
ReactPixel.pageView()

const options = {
    api_host: POSTHOG_CONFIG.VITE_PUBLIC_POSTHOG_HOST,
    defaults: {
        // Add any default configuration properties here
    },
} as PostHogConfig

createRoot(document.getElementById("root")!).render(
<StrictMode>
    <PostHogProvider apiKey={POSTHOG_CONFIG.VITE_PUBLIC_POSTHOG_KEY} options={options}>
        <App />
    </PostHogProvider>
</StrictMode>,
);
