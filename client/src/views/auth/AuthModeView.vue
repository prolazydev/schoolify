<template>
    <div class="w-full h-screen flex justify-center self-center items-center">
        <div class="auth-form w-[28rem] rounded-xl bg-white relative overflow-hidden transition-all duration-300 hover:shadow-md focus-within:shadow-md">
            <div :class="{ 'translate-x-[-150%]': authMode === 'register', 'translate-x-[-50%]': authMode !== 'register' }" class="auth-from-component w-full min-h-full px-10 py-5 absolute translate-y-[-50%] flex flex-col gap-8 transition-all duration-300">
                <div id="loginForm" class="py-7 flex flex-col gap-7">
                    <div class="text-center">  
                        <h2 class="text-3xl font-bold">Login</h2>
                    </div>
                    <div class="flex flex-col gap-5">
                        <div class="flex flex-col gap-1">
                            <label for="username" class="text-mds">Username/Email</label>
                            <div class="relative">
                                <input v-model="loginData.username" class="py-1 pl-10 w-full rounded-md shadow-md focus:shadow-none transition-shadow" type="text" name="username" :placeholder="usernamePlaceholder" id="username" autofocus>
                                <template v-if="!loginData.username.includes('@')">
                                    <svg class="w-5 h-5 absolute top-[7px] left-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </template>
                                <template v-else>
                                    <svg class="w-5 h-5 absolute top-[8px] left-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </template>
                                <span class="h-5 w-[1px] absolute top-[7px] left-8 border-gray-500 z-10 bg-gray-600"></span>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <label for="password" class="text-mds">Password</label>
                            <div class="relative">
                                <input class="py-1 pl-10 w-full rounded-md shadow-md focus:shadow-none transition-shadow" type="password" name="password" :placeholder="passwordPlaceholder" id="password">
                                <svg class="w-5 h-5 absolute top-[7px] left-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                                <span class="h-5 w-[1px] absolute top-[7px] left-8 border-gray-500 z-10 bg-gray-600"></span>
                            </div>
                        </div>
                        <div class="flex gap-3 justify-center align-baseline items-center">
                            <M-btn @click="testFetch" text="Login" class="active:shadow-none transition-all" />
                        </div>
                        <div @click="toggleAuthMode" class="flex w-fit ml-auto cursor-pointer hover:underline">Create an Account</div>
                    </div>
                </div>
            </div>
            <div :class="{ 'translate-x-[-50%]': authMode === 'register', 'translate-x-[150%]': authMode !== 'register' }" class="auth-from-component w-full min-h-full px-10 py-7 absolute translate-y-[-50%] flex flex-col gap-8 transition-all duration-300">
                <div id="registerForm" class="py-7 flex-col gap-7">
                    <div class="text-center">  
                        <h2 class="text-3xl font-bold">Register</h2>
                    </div>
                    <div class="flex flex-col gap-5">
                        <div class="flex flex-col gap-1">
                            <label for="email" class="text-mds">Email</label>
                            <div class="relative">
                                <input class="py-1 pl-10 w-full rounded-md shadow-sm" type="email" name="email" :placeholder="emailPlaceholder" id="registerEmail">
                                <svg class="w-5 h-5 absolute top-[7px] left-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <span class="h-5 w-[1px] absolute top-[7px] left-8 border-gray-500 z-10 bg-gray-600"></span>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <label for="registerUsername" class="text-mds">Username</label>
                            <div class="relative">
                                <input class="py-1 pl-10 w-full rounded-md" type="text" name="username" :placeholder="usernamePlaceholder" id="registerUsername">
                                <svg class="w-5 h-5 absolute top-[7px] left-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                <span class="h-5 w-[1px] absolute top-[7px] left-8 border-gray-500 z-10 bg-gray-600"></span>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <label for="registerPassword" class="text-mds">Password</label>
                            <div class="relative">
                                <input class="py-1 pl-10 w-full rounded-md shadow-sm" type="password" name="password" :placeholder="passwordPlaceholder" id="registerPassword">
                                <svg class="w-5 h-5 absolute top-[7px] left-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                                <span class="h-5 w-[1px] absolute top-[7px] left-8 border-gray-500 z-10 bg-gray-600"></span>
                            </div>
                        </div>
                        
                        <div class="flex justify-center align-baseline items-center">
                            <M-btn text="Register" />
                        </div>
                        <div @click="toggleAuthMode" class="flex w-fit ml-auto cursor-pointer hover:underline">Have an account?</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>

// import { User } from '../../types/User';
const props = defineProps({
    mode: String,
});
const authMode = ref(props.mode);
let loginForm: HTMLElement;
let registerForm: HTMLElement;

const test = ref(window.innerWidth);
console.log(test);

const authFormHeight = ref(28);

const usernameQuotes = [
    // 'Make it classy :>',
    // 'Be your username :)',
    // 'Enter your secret code name here...',
    // 'What name do your friends call you in your dreams',
    // 'Pick a username that will make your mom proud',
    // 'Enter a name that reflects your inner unicorn',
    'DaringDaisy87',
    'SneakySquirrel99',
    'ElectricEagle123',
    'WanderingWolf007',
    'PiratePenguin444',
    'NinjaNoodle666',
    'FunkyFlamingo42',
    'GlamorousGiraffe555',
    'WittyWalrus777',
    'SillySalamander88',
];
const emailQuotes = [
    // 'Enter your electronic pigeon address here',
    // 'Where should we send your virtual carrier pigeons?',
    // 'Your e-owl address, please',
    // 'What\'s your go-to electronic mailbox?',
    // 'Please provide your digital messenger address',
    // 'We need your e-bat signal to get in touch',
    // 'Where do you want to receive your virtual smoke signals?',
    // 'Your e-homing pigeon location',
    'captainhook@neverland.com',
    'princesspeach@mushroomkingdom.com',
    'harrypotter@hogwarts.edu',
    'spiderman@marvel.com',
    'lukeskywalker@jediorder.com',
    'wonderwoman@dc.com',
    'tigger@hundorangeacrewoods.com',
    'mufasa@pridelands.com',
    'hermione@wizardingworld.com',
    'thor@asgard.com',
];
const passwordQuotes = [
    // 'Enter your secret code here',
    // 'Make it hard to guess, like a riddle',
    // 'Choose something that only you would know',
    // 'Think of a passphrase, not just a password',
    // 'What\'s your favorite fictional character\'s catchphrase?',
    // 'Think of a song lyric that you love and use it as your password',
    // 'Make it long and strong, like a Viking warrior',
    // 'Use a combination of random words to make a passphrase',
    'SuperSecret123!',
    'NeverForgetMe#',
    'HakunaMatata!',
    'TheCakeIsALie42',
    'MayTheForceBeWithYou!',
    'ToInfinityAndBeyond123',
    'IWillSurvive2022!',
    'WinterIsComing#',
    'CarpeDiem2023!',
    'LiveLaughLove<3',
];

// TODO: use https://randomuser.me/api/?inc=login,email,name&noinfo&password=upper,lower,number,8-16
const usernamePlaceholder = selectRandomItem([ ...usernameQuotes, ...emailQuotes, ]);
const passwordPlaceholder = selectRandomItem(passwordQuotes);
const emailPlaceholder = selectRandomItem(emailQuotes);

const loginData = ref({
    username: '',
    password: '',    
});

onMounted(() => {
    loginForm = document.getElementById('loginForm');
    registerForm = document.getElementById('registerForm');
    
    if (props.mode === 'login') authFormHeight.value = loginForm.offsetHeight;
    else authFormHeight.value = registerForm.offsetHeight;
});

// function startInputAnimation(e: Event,) {
//     debugger;
//     console.log(e,);
//     const el = e.target as HTMLElement;
//     setTimeout(() => {
//         inputPosition;
//     },1500,);
// }

function toggleAuthMode() {
    if (authMode.value === 'login') {
        authFormHeight.value = registerForm.offsetHeight;
        authMode.value = 'register';
    } else {
        authFormHeight.value = loginForm.offsetHeight;
        authMode.value = 'login';  
    } 
}

async function testFetch() {
    const test = await useFetch('/');
    console.log(test);
}

</script>

<style scoped>
.auth-form {
    height: v-bind(authFormHeight + 'px');
}

.auth-from-component {
    position: absolute;
    top: 50%;
    left: 50%;
}
.auth-login {
    position: absolute;
    top: 50%;
    left: 50%;
}

.auth-form input::placeholder {
    position: absolute;
    top: 5px;
    left: 40.5px;
}

/* RESPONSIVENESS */

@media screen and (max-width: 425px) {
    .auth-form {
        width: 90%;
    }
}

</style>