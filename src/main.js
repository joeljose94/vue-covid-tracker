import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount('#app')
