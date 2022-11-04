<script>
import { defineComponent, ref } from 'vue';
import { Head } from '@inertiajs/inertia-vue3';
import  Nav  from '@/Components/Nav.vue'

export default defineComponent({
    props:{
    title: String,
    },
    components:{
        Head,
        Nav,
    }
});
</script>

<template>
    <div>
        <Head :title="title" />
        <div class="min-h-screen bg-gray-100">
           <Nav />
            <!-- Page Heading -->
            <header class="bg-gray-700 shadow">
                <div class="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
                    <h2 class="text-white text-center leading-tight">  
                        Lorem ipsum dolor sit amet.   
                    </h2>
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot></slot>
            </main>
            <footer class="text-center text-white bg-gray-700 px-4 py-4">
                <div>
                    <p>     
                        Lorem ipsum dolor sit amet.                
                    </p>
                </div>
            </footer>
        </div>
    </div>
</template>
