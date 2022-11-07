<template>
    {{ products }}
</template>


<script>
    import { defineComponent } from 'vue'
    export default defineComponent({
        props: ['products'],
    })
</script>