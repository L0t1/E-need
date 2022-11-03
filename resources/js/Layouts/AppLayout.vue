<script>
import { defineComponent, ref } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-vue3';
import Banner from '@/Components/Banner.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';

export default defineComponent({
    props:{
    title: String,
    },
    components:{
        Head,
        Link,
        Dropdown,
        DropdownLink,
        ResponsiveNavLink,
    }
});

const showingNavigationDropdown = ref(false);

const logout = () => {
    Inertia.post(route('logout'));
};
</script>

<template>
    <div>
        <Head :title="title" />

        <Banner />

        <div class="min-h-screen bg-gray-100">
            <nav class="bg-white border-b border-gray-100">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="shrink-0 flex items-center">
                                <Link :href="route('welcome')">
                                        E-Need
                                </Link>
                            </div>

                           
                        </div>

                        <div class="hidden sm:flex sm:items-center sm:ml-6">
                            <div class="ml-3 relative">                          
                            </div>

                            <!-- Settings Dropdown -->
                            <div class="ml-3 relative">
                                <div class="flex items-center space-x-3 relative">
                                    <Link :href="route('dashboard')"
                                    class="hover:text-yellow-500
                                    transition" v-if="$page.props.user">
                                        Dashboard
                                    </Link>
                                    <template v-else>
                                        <Link :href="route('register')"
                                    class="hover:text-yellow-500
                                    transition">
                                        Register
                                    </Link>
                                        
                                    <Link :href="route('login')"
                                    class="hover:text-yellow-500
                                    transition">
                                        Login
                                    </Link>

                                    </template>
                                    <Link href="#"
                                    class="hover:text-yellow-500
                                    transition">
                                        Shop
                                    </Link>
                                    <form method="POST" @submit.
                                    prevent="logout" v-if="$page.props.user">
                                    <button type="submit"
                                    class="hover:text-yellow-500
                                    transition">
                                    Log Out
                                </button>
                                    </form>
                                    <Link href="#"
                                    class="hover:text-red-700
                                    transition">
                                        <span class="bg-red-600 text-white text xs rounded-md p-1 absolute"
                                        style="top: -15px; right: -12px;">
                                            3
                                        </span>
                                        <svg aria-hidden="true"
                                        data-prefix="fas"
                                        data-icon="shoping-cart"
                                        class="w-4 h-4 fill-current svg-inline--fa fa-shoping-cart fa-w-18" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                         </svg>

                                    </Link>
                                </div>
                            </div>
                        </div>

                        <!-- Hamburger -->
                        <div class="-mr-2 flex items-center sm:hidden">
                            <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition" @click="showingNavigationDropdown = ! showingNavigationDropdown">
                                <svg
                                    class="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}" class="sm:hidden">
                    <template v-if="$page.props.user">
                        <div class="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                            Dashboard
                        </ResponsiveNavLink>
                    </div>
                    </template>
                    <template v-else>
                        <div class="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink :href="route('register')">
                            Register
                        </ResponsiveNavLink>
                    </div>
                    <div class="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink :href="route('login')">
                            Login
                        </ResponsiveNavLink>
                    </div>
                    </template>
                    <div class="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href="#">
                            Shop
                        </ResponsiveNavLink>
                    </div>
                    <div class="pt-2 pb-3 space-y-1">
                       <Link href="#" class="flex items-center pl-3 pr-4
                       py-2 border-1-4 border-transparent text-base
                       font-medium text-gray-600 hover:text-red-700
                       hover:border-red-700 focus:outline-none
                       focus:text-gray-800 focus:bg-gray-50
                       focus:border-gray-300 transition">

                            <svg aria-hidden="true"
                            data-prefix="fas"
                            data-icon="shoping-cart"
                            class="w-4 h-4 text-red-700 fill-current svg-inline--fa fa-shoping-cart fa-w-18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                            </svg>
                            <span class="ml-2">
                                3 item(s) in cart
                            </span>
                    </Link>
                    </div>
                 

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200"
                    v-if="$page.props.user">
                        <div class="mt-3 space-y-1">                       
                            <!-- Authentication -->
                            <form method="POST" @submit.prevent="logout">
                                <ResponsiveNavLink as="button">
                                    Log Out
                                </ResponsiveNavLink>
                            </form>                  
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header v-if="$slots.header" class="bg-gray-700 shadow">
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
