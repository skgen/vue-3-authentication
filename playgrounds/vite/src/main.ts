import { createApp } from 'vue';
import { createPinia } from 'pinia';

import mkuiPlugin from '@/plugins/melkor';
import authenticationPlugin from '@/plugins/authentication';
import App from '@/TheApp.vue';

import '@/assets/scss/main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(mkuiPlugin());
app.use(authenticationPlugin());

app.mount('#app');
