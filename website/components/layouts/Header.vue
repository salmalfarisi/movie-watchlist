<template>
    <div class="sticky top-0 border-y-2 z-10 text-stone-700">
        <div class="bg-blue-vue-200 flex justify-between">
            <div class="p-5">
                <img src="/favicon.ico" alt="" class="float-left margin-fleche" quality="30"/>
            </div>
            <div class="hidden lg:block">
                <div class="flex flex-row p-5 gap-4 text-blue-600">
                    <div>
                        <a href="#home" @click="setMenu(true)">
                            Home
                        </a>
                    </div>
                    <div>
                        <a href="#feature" @click="setMenu(true)">
                            Feature
                        </a>
                    </div>
                    <div>
                        <a href="#contact" @click="setMenu(true)">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
            <div class="block lg:hidden">
                <div @click="setMenu(test)" class="bg-stone-50 m-4 rounded-md">
                    <img src="/burger-menu.svg" class="w-12 h-10">
                </div>
            </div>
        </div>
        <div v-if="(test.valueOf() == true) ? 'hidden':''" class="text-right bg-blue-vue-300">
            <div id="menu">
                <div class="p-3 border">
                    <a href="#home" @click="setMenu(true)">
                        Home
                    </a>
                </div>
                <div class="p-3 border">
                    <a href="#feature" @click="setMenu(true)">
                        Feature
                    </a>
                </div>
                <div class="p-3 border">
                    <a href="#contact" @click="setMenu(true)">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    let test = ref(true);

    function setMenu(target: boolean) 
    {
        if (target == false)
        {
            test.value = true;
        }
        else
        {
            test.value = false;
        }
    }
</script>