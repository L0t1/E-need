<template>
    <app-layout title="Welcome">

    </app-layout>
</template>

<script>
import { defineComponent} from 'vue';
import { Link } from '@inertiajs/inertia-vue3';
import AppLayout from '../Layouts/AppLayout.vue'


export default defineComponent({
    props:['products'],
    components: {
    Link,
    AppLayout,
},
})
</script>
