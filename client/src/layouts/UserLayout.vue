<template>
    <div class="user-layout" id="mainLayout">
        <header class="absolute inset-x-0 top-0 z-50">
            <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                    <a :href="item.href" class="text-sm font-semibold leading-6 text-gray-900" v-for="item in navigations" :key="item.name">{{ item.name }}</a>
                    <a href="#" class="text-sm font-semibold leading-6 text-gray-900" >test</a>
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
        </header>
        <!-- The <slot> element is a slot outlet that indicates where the "VIEW" content should be rendered.-->
        <slot />
    </div>
</template>


<script lang="ts" setup>
const navigations = [
    { name: 'Product', href: '#', },
    { name: 'Features', href: '#', },
    { name: 'Marketplace', href: '#', },
    { name: 'Company', href: '#', },
];

</script>

<style scoped>

</style>