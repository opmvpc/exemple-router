<script setup>
import { RouterLink } from "vue-router";
import httpStatuses from "../data/httpStatuses.json";
</script>

<template>
  <div>
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-white mb-4">Les codes de statut HTTP 📡</h1>
      <p class="text-slate-400 max-w-2xl mx-auto">
        Clique sur un code de statut pour découvrir tous les détails avec un chat mignon !
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <RouterLink
        v-for="status in httpStatuses"
        :key="status.id"
        :to="`/status/${status.id}`"
        class="group relative overflow-hidden bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-200 hover:scale-105"
      >
        <!-- Image en arrière-plan avec blur -->
        <div
          class="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300"
        >
          <img
            :src="`/images/${status.image}`"
            :alt="`Preview ${status.id}`"
            class="w-full h-full object-cover blur-sm scale-110"
            @error="$event.target.style.display = 'none'"
          />
          <div
            class="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-slate-900/20"
          ></div>
        </div>

        <!-- Contenu de la card -->
        <div class="relative z-10">
          <div class="mb-4">
            <div class="text-5xl font-bold text-purple-400">{{ status.id }}</div>
          </div>

          <h3 class="text-xl font-semibold text-white mb-2">{{ status.title }}</h3>
          <p class="text-slate-400 text-sm line-clamp-2">{{ status.description }}</p>

          <div
            class="mt-4 flex items-center text-purple-400 text-sm font-medium group-hover:gap-2 transition-all"
          >
            <span>Voir les détails</span>
            <span class="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
