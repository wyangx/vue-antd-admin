import { createApp } from 'vue'
import { setupAssets } from './plugins'
import { setupStore } from './store'
import { setupRouter } from './router'
import App from './App.vue'

async function setupApp() {
  setupAssets()

  const app = createApp(App)

  // pinia
  setupStore(app)

  // vue router
  await setupRouter(app)

  // mount app
  app.mount('#app')
}

setupApp()
