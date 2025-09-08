import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StrictMode } from 'react'
import { PostHogProvider } from 'posthog-js/react'
import { POSTHOG_CONFIG } from './config/analytics.ts'
import { PostHogConfig } from 'posthog-js'

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
