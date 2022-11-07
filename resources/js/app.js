import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Icons from '@/Components/Icons.vue';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {

        const Vueapp = createApp({ render: () => h(app, props) })
        Vueapp.config.globalProperties.$filters = {
            formatCurrency(value){
                value = (value/100)
                  return value.toLocaleString('en-US',{
                    style: 'currency',
                    currency: 'USD'
                  })
            }
        }
        Vueapp
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .component('icon', Icons)
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
