<template>
  <div class="shadow-md w-screen rounded-xl p-4">
      <div class="relative mt-2">
          <div class="absolute top-1 left-1 flex items-center">
            <div id="dropdownMenu" class="min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 hidden w-full bg-white border border-slate-200 rounded-md shadow-lg z-10">
              <ul id="dropdownOptions">
                <li class="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="Europe">Europe</li>
                <li class="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="Australia">Australia</li>
                <li class="px-4 py-2 text-slate-600 hover:bg-slate-5- text-sm cursor-pointer" data-value="Africa">Africa</li>
              </ul>
            </div>
          </div>
          <input
            type="text"
            class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-12 pl-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Germany..." />

          <button class="absolute right-1 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd"></path>
            </svg>
          </button>
    </div>

    <!--<script>
      document.getElementById('dropdownButton').addEventListener('click', function() {
        var dropdownMenu = document.getElementById('dropdownMenu');
        if (dropdownMenu.classList.contains('hidden')) {
          dropdownMenu.classList.remove('hidden');
        } else {
          dropdownMenu.classList.add('hidden');
        }
      });

      document.getElementById('dropdownOptions').addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
          const dataValue = event.target.getAttribute('data-value');
          document.getElementById('dropdownSpan').textContent = dataValue;
          document.getElementById('dropdownMenu').classList.add('hidden');
        }
      });

      document.addEventListener('click', function(event) {
        var isClickInside = document.getElementById('dropdownButton').contains(event.target) || document.getElementById('dropdownMenu').contains(event.target);
        var dropdownMenu = document.getElementById('dropdownMenu');

        if (!isClickInside) {
          dropdownMenu.classList.add('hidden');
        }
      });
    </script>-->
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BoardPage'
})
</script>
