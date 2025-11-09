<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import httpStatuses from '../data/httpStatuses.json'

const route = useRoute()

// Trouver le status code correspondant à l'ID dans l'URL
const status = computed(() => {
  const id = Number(route.params.id)
  return httpStatuses.find(s => s.id === id)
})

// Trouver l'index du status code actuel dans le tableau
const currentIndex = computed(() => {
  return httpStatuses.findIndex(s => s.id === status.value?.id)
})

// Status code précédent (s'il existe)
const previousStatus = computed(() => {
  if (currentIndex.value > 0) {
    return httpStatuses[currentIndex.value - 1]
  }
  return null
})

// Status code suivant (s'il existe)
const nextStatus = computed(() => {
  if (currentIndex.value < httpStatuses.length - 1) {
    return httpStatuses[currentIndex.value + 1]
  }
  return null
})
</script>

<template>
  <div>
    <!-- Bouton retour -->
    <RouterLink
      to="/status"
      class="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
    >
      <span>←</span>
      <span>Retour aux codes de statut</span>
    </RouterLink>

    <!-- Si le code de statut n'existe pas -->
    <div v-if="!status" class="text-center py-20">
      <div class="text-6xl mb-4">😿</div>
      <h2 class="text-3xl font-bold text-white mb-2">Code de statut introuvable</h2>
      <p class="text-slate-400 mb-8">Ce code HTTP n'existe pas dans notre collection.</p>
      <RouterLink
        to="/status"
        class="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        Retour à la liste
      </RouterLink>
    </div>

    <!-- Contenu du code de statut -->
    <div v-else class="max-w-4xl mx-auto">
      <!-- En-tête -->
      <div class="text-center mb-12">
        <div class="text-7xl font-bold text-purple-400 mb-4">{{ status.id }}</div>
        <h1 class="text-4xl font-bold text-white mb-4">{{ status.title }}</h1>
        <p class="text-xl text-slate-300">{{ status.description }}</p>
      </div>

      <!-- Image du chat -->
      <div class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8 mb-8">
        <div class="aspect-video bg-slate-900 rounded-lg flex items-center justify-center">
          <img
            :src="`/images/${status.image}`"
            :alt="`Chat pour le code ${status.id}`"
            class="max-h-full rounded-lg object-cover"
            @error="$event.target.style.display = 'none'"
          />
          <!-- Placeholder si l'image n'est pas encore ajoutée -->
          <div class="text-8xl" v-show="false">🐱</div>
        </div>
      </div>

      <!-- Détails -->
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <span>💡</span>
            <span>Utilisation</span>
          </h3>
          <p class="text-slate-300 leading-relaxed">{{ status.usage }}</p>
        </div>

        <div class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <span>⚠️</span>
            <span>Erreur courante</span>
          </h3>
          <p class="text-slate-300 leading-relaxed">{{ status.commonError }}</p>
        </div>
      </div>

      <!-- Anecdote -->
      <div class="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur border border-purple-700 rounded-xl p-6">
        <h3 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
          <span>🎉</span>
          <span>Le savais-tu ?</span>
        </h3>
        <p class="text-slate-200 leading-relaxed">{{ status.funFact }}</p>
      </div>

      <!-- Navigation entre codes de statut -->
      <div class="mt-12 flex justify-between items-center">
        <!-- Bouton Précédent (si on n'est pas sur le premier) -->
        <RouterLink
          v-if="previousStatus"
          :to="`/status/${previousStatus.id}`"
          class="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
        >
          <span>←</span>
          <span>{{ previousStatus.id }} - {{ previousStatus.title }}</span>
        </RouterLink>
        <div v-else></div>

        <!-- Bouton Suivant (si on n'est pas sur le dernier) -->
        <RouterLink
          v-if="nextStatus"
          :to="`/status/${nextStatus.id}`"
          class="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
        >
          <span>{{ nextStatus.id }} - {{ nextStatus.title }}</span>
          <span>→</span>
        </RouterLink>
        <div v-else></div>
      </div>
    </div>
  </div>
</template>
