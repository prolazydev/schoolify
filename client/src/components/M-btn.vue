<template>
    <button :class="[handleBtnStyle(), {'disabled:bg-indigo-500 cursor-progress': props.isLoading}]" :disabled="props.isLoading" >
        <template v-if="!isLoading">
            {{ props.text }}
        </template>
        <template v-else>
            <div class="flex gap-1 items-center">
                <svg :class="handleLoadingStyle()" class="loading-icon text-slate-50 stroke-slate-50" viewBox="-2.4 -2.4 28.80 28.80" fill="none" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> 
                        <path d="M12 3V6M3 12H6M5.63607 5.63604L7.75739 7.75736M5.63604 18.3639L7.75736 16.2426M21 12.0005H18M18.364 5.63639L16.2427 7.75771M11.9998 21.0002V18.0002M18.3639 18.3642L16.2426 16.2429"  stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </g>
                </svg>
                <!-- <span>Loading</span> -->
            </div>
        </template>
    </button>
</template>

<script lang="ts" setup>
const props = defineProps(myProps,);

function handleBtnStyle() {
    return styles[props.btnStyle] + ' ' + sizes[props.btnSize];
}

function handleLoadingStyle() {
    if (props.btnSize === 'sm')
        return 'w-4 h-4';
    if (props.btnSize === 'md')
        return 'w-6 h-6';
    if (props.btnSize === 'lg')
        return 'w-7 h-7';
}

</script>

<script lang="ts">
const styles = {
    default: 'rounded-md font-semibold leading-6 text-white shadow-lg active:shadow-none bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all',
    primary: 'rounded-md font-semibold leading-6 text-white shadow-lg active:shadow-none bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all',
    secondary: 'rounded-md font-semibold leading-6 text-white shadow-lg active:shadow-none bg-slate-600 hover:bg-slate-500 active:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 transition-all',
    danger: 'rounded-md font-semibold leading-6 text-white shadow-lg active:shadow-none bg-red-600 hover:bg-red-500 active:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-all',
    warning: 'rounded-md font-semibold leading-6 text-white shadow-lg active:shadow-none bg-orange-600 hover:bg-orange-500 active:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all',
    info: 'rounded-md font-semibold leading-6 text-white shadow-lg active:shadow-none bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 transition-all',
    simple: 'rounded-md font-semibold leading-6 text-black shadow-md transition-all',
};
const sizes = {
    sm: 'px-4 py-1 text-sm',
    md: 'px-4 py-2 text-md',
    lg: 'px-5 py-3 text-xl',
};

const myProps = {
    text: {
        type: String,
        required: true,
    },
    btnStyle: {
        type: String,
        validator(value: string,) {
            return Object.keys(styles,).includes(value,);
        },
        default: 'default',
    },
    btnSize: {
        type: String,
        validator(value: string,) {
            return Object.keys(sizes,).includes(value,);
        },
        default: 'md',
    },
    isLoading: {
        type: Boolean,
        default: false,
    },
    // prefix: {

    // }
};
</script>

<style scoped>
.loading-icon {
    animation-name: loading;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    animation-play-state: running;
}

@keyframes loading {
    from {
        rotate: 0deg;
    } to {
        rotate: 180deg;
    }
}
</style>