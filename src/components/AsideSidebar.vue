<script setup>
</script>

<template>
    <div class="w-96 bg-gray-900">
        <div class="mx-8">
            <div class="mt-6 mb-4">
                <h2 class="text-sm font-semibold flex justify-between mb-1  text-white">Recent Repositories
                    <router-link class="flex items-center text-xs py-1 px-2 rounded-md bg-green-700 hover:bg-green-600"
                        :to="{ name: 'New' }">
                        <ShareIcon class="h-4 w-4 pb-1 -rotate-90 text-white" />
                        <p>
                            New
                        </p>
                    </router-link>
                </h2>

                <div class="mt-2 mb-3">
                    <BaseSearch class="" placeholder="Find a repository" />
                </div>
                <ul>
                    <li v-for="repo in repos" :key="repo.id" class="text-gray-200">
                        <div class="flex w-full items-center mt-2">
                            <span class="rounded-full bg-gray-600 mr-2 p-0.5">
                                <UserIcon class="h-3 w-3   text-white" />
                            </span>

                            <a class="text-sm" :href="username + '/' + repo.name">
                                {{ username }}/{{ repo.name }}
                            </a>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="border-t border-gray-600">
                <h2 class="text-sm font-semibold mt-3  text-white">Recent activity</h2>
                <div>
                    <p class="mt-2 mb-3 text-gray-400 text-xs">
                        When you take actions across Pensieve, we’ll provide links to that activity here.
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>