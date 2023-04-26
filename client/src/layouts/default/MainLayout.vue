<template>
    <component :is="layout"> 
        <router-view />
    </component>
</template>

<script setup lang="ts">
import EmptyLayout from '../DefaultLayout.vue';

const layout = shallowRef();
const route = useRoute();

watch(
    computed(() => route.path), async () => {
        let metaLayout = route.meta?.layout;

        try {
            const metaLayoutComponent = metaLayout && await import(`../${metaLayout}.vue`);

            layout.value = markRaw(metaLayoutComponent?.default || EmptyLayout);
        } catch (error) {
            layout.value = markRaw(EmptyLayout);
        }
    }
);

</script>