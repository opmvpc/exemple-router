<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 flex flex-col">
    <!-- Navigation -->
    <nav class="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <div class="max-w-6xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span class="text-3xl">🐱</span>
            <h1 class="text-xl font-bold text-white">HTTP Status Cats</h1>
          </RouterLink>

          <div class="flex gap-1">
            <RouterLink
              to="/"
              class="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-200"
              active-class="bg-slate-800 text-white"
            >
              Accueil
            </RouterLink>
            <RouterLink
              to="/status"
              class="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-200"
              active-class="bg-slate-800 text-white"
            >
              Codes HTTP
            </RouterLink>
            <RouterLink
              to="/about"
              class="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-200"
              active-class="bg-slate-800 text-white"
            >
              À propos
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="grow max-w-6xl w-full mx-auto px-6 py-12">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="border-t border-slate-800 mt-auto">
      <div class="max-w-6xl mx-auto px-6 py-8 text-center text-slate-400 text-sm">
        <p>Créé avec Vue Router 🚀 | Pour apprendre les routes dynamiques</p>
      </div>
    </footer>
  </div>
</template>
