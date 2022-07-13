import { createApp } from 'solid-utils'
import { MetaProvider } from 'solid-meta'
import { App } from './app'
import 'tailwindcss/tailwind.css'
import './styles/index.css'

createApp(App).use(MetaProvider).mount('#root')
