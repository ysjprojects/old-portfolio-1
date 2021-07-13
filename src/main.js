import { createApp } from "vue"
import App from "./App.vue"
import vClickOutside from 'v-click-outside'

var app = createApp(App)

app.use(vClickOutside)

app.mount("#app")

