import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiPencil, HiTrash } from "oh-vue-icons/icons";

addIcons(HiPencil, HiTrash);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");


