<template>
    <div class="flex flex-col h-full">
        <header class="nav-bar px-8 py-6">
            <nav class="flex w-full items-center self-center justify-between">
                <div class="flex gap-3 items-center">
                    <div @click="scrollThrough" class="px-3 py-2 rounded-lg text-2xl cursor-pointer transition-colors select-none hover:bg-slate-200 active:bg-violet-200">
                        {{ logo }}
                    </div>
                    <h1 class="cursor-default text-3xl font-bold">Schoolify</h1>
                </div>
                <div>
                    
                </div>
                <div class="px-3 py-2 rounded-lg text-2xl cursor-pointer transition-colors select-none hover:bg-slate-200 active:bg-violet-200">
                    👩🏻‍🏫
                </div>
            </nav>
        </header>

        <slot />
    </div>
</template>

<script lang="ts" setup>
const logoMascots = [ '👩🏻‍🏫', '👨🏻‍🏫', '👩🏻‍🎓', '👨🏻‍🎓', ];
const randomLogo = selectRandomItem<string>(logoMascots);
const logo = ref('');

onMounted(() => {
    logo.value = randomLogo;
});

function scrollThrough() {
    logo.value = scrollArray<string[]>(logoMascots, logo.value);
}

</script>

<style scoped>
.nav-bar {
    width: 100%;

    display: flex;
    /* justify-content: center; */
}
</style>
