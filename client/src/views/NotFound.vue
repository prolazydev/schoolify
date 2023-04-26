<template>
    <div class="w-full h-screen flex flex-col relative">
        <!-- TODO: NOT FOUND :/ -->
        <div class="not-found w-fit mt-16 mx-auto rounded-md flex text-7xl cursor-default max-sm:text-5xl max-sm:mt-12">
            <span class="not-found-word-1 p-3 rounded-md border-4 border-transparent hover:border-slate-700 hover:bg-slate-200 hover:shadow-xl">Not</span>
            <span class="not-found-word-2 p-3 rounded-md border-4 border-transparent hover:border-slate-700 hover:bg-slate-200 hover:shadow-xl">found</span>
            <span class="not-found-word-3 p-3 rounded-md border-4 border-transparent hover:border-slate-700 hover:bg-slate-200 hover:shadow-xl">:/</span>
        </div>
        <div class="w-4/5 h-full mx-auto mb-48 flex flex-col justify-center relative max-sm:mb-[55%]">
            <div class="w-full relative">
                <svg @click="ghostJump" id="ghosty" :class="{ 'ghost-jump': ghostClicked === true }" class="w-32 h-32 absolute" viewBox="0 0 400 400" fill="none">
                    <g> 
                        <path d="M208.966 110.117C254.405 154.438 251.905 240.684 230.919 288.101C201.051 355.593 209.978 250.359 184.602 277.117C177.704 284.391 181.81 317.719 156.516 320.269C138.085 322.126 154.096 266.606 141.635 277.117C127.283 289.224 121.293 331.099 103.61 320.269C96.98 288.749 95.6539 205.826 103.61 164.619" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M334.001 205.901C300.792 236.16 270.173 269.031 239.891 302.247C231.256 311.719 217.546 319.675 207.086 324.435" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M240.001 310.082C261.705 300.029 259.1 324.324 252.155 325.999C233.056 330.607 236.719 314.627 238.123 312.595" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M318.739 227.487C333.322 228.815 333.932 239.822 328.721 245.562C322.396 252.532 303.881 248.558 312.768 230.427" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M67 154.417C74.2958 151.934 94.2222 144.012 102.587 140.456M102.587 140.456C132.714 127.648 168.181 109.352 197.507 96.1835C186.549 83.4764 160.167 66.0223 132.221 75.9106C98.42 87.8702 101.97 124.204 102.587 140.456Z" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M212.18 168.071C211.362 164.294 211.429 160.869 210.359 156.308" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M189.816 170.532C190.383 167.512 189.063 162.444 188.656 159.594" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                </svg>
                <div id="road"></div>
            </div>
        </div>
        <div class="flex flex-col gap-3 justify-center absolute bottom-[10%] left-2/4 translate-x-[-50%] max-sm:bottom-[15%]">
            <router-link to="/home" class="text-center p-3 rounded-md hover:underline bg-emerald-200 text-emerald-700">Let's start from the beggining, shall we?</router-link>
            <router-link to="/auth/login" class="text-center p-3 rounded-md hover:underline bg-emerald-200 text-emerald-700">Let's start from the beggining, shall we?</router-link>
        </div>
    </div> 
</template>

<script lang="ts" setup>
const ghostClicked = ref(false);

function ghostJump() {
    if (!ghostClicked.value) {
        ghostClicked.value = true;
        setTimeout(() => {
            ghostClicked.value = false;
        }, 250);
    }
}

onMounted(() => {
    document.addEventListener("keydown", function(event) {
        if (event.code === "Space")
            ghostJump();
    });
});

onUnmounted(() => {
    document.removeEventListener("keydown", this);
});

</script>

<style scoped>
.not-found {
	font-weight: 600;
}

#ghosty {
    opacity: 0;

    top: 46.75%;
    left: 50%;
    transform: translate(-175%, -50%);

	transition-property: top;
	transition-duration: 250ms;
	transition-timing-function: cubic-bezier(0.34, 0.41, 0.61, 1);

    animation-name: skeet;
    animation-duration: 1.25s;
    animation-timing-function: cubic-bezier(0.25, 0.1, 0, 1);
    animation-delay: 0.5s;
    animation-iteration-count: 1;
    animation-play-state: running;
    animation-fill-mode: forwards;
}

.ghost-jump {
	top: -150px !important;

	transition-duration: 275ms !important;
	transition-timing-function: cubic-bezier(0.15, 0.54, 0.44, 0.97) !important;
}

@keyframes skeet {
    from { 
        opacity: 0;
        transform: translate(-175%, -50%);
    } to {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
}

@keyframes ghostJump {
	
}

#road {
    width: 0%;
    height: 2px;

    background-color: black;

    position: absolute;
    transform-origin: 0 0;
    top: 40px;
    /* left: 0; */

    animation-name: showRoad;
    animation-duration: 1.25s;
    animation-timing-function: cubic-bezier(0.25, 0.1, 0, 1);
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-play-state: running;
    animation-fill-mode: forwards;
}

@keyframes showRoad {
    from { 
        width: 0;
    } to {
        width: 100%;
        transform: scaleX(1);
    }
}

.not-found-word-1 {
    display: inline-block;
    animation: fadeIn 0.25s ease-in-out forwards;
	animation-delay: 0.3s;
    opacity: 0;
}
.not-found-word-2 {
    display: inline-block;
    animation: fadeIn 0.25s ease-in-out forwards;
	animation-delay: 0.6s;
    opacity: 0;
}
.not-found-word-3 {
    display: inline-block;
    animation: fadeIn 0.25s ease-in-out forwards;
	animation-delay: 0.9s;
    opacity: 0;
}

@keyframes fadeIn {
    0% {
        transform: translateX(-10px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
.not-found span {
	transition: all !important;
	transition-duration: 150ms !important;
	transition-timing-function: ease !important;

	line-height: 0.90 !important;

	transform: scale(1) !important;
}

.not-found span:last-child {
	line-height: 0.7 !important;

}

.not-found span:hover {
	font-size: 5rem;
}

/* RESPONSIVENESS */
@media screen and (max-width: 425px) {
	#road {
		height: 5px;
	}
	.not-found {
		font-weight: 600;
	}

	.ghost-jump {
		top: -125px !important;
	}

	.not-found span:hover {
		font-size: 3.5rem;
	}
}

</style>