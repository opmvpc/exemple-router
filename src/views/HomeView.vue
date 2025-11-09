<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="text-center">
    <div class="mb-8">
      <h1 class="text-6xl font-bold text-white mb-4">
        HTTP Status Cats
      </h1>
      <p class="text-xl text-slate-400 max-w-2xl mx-auto">
        Découvre les codes de statut HTTP de manière fun avec des chats adorables !
        Apprendre c'est mieux quand c'est mignon.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
      <div class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-200">
        <div class="text-4xl mb-4">📚</div>
        <h3 class="text-xl font-semibold text-white mb-2">Éducatif</h3>
        <p class="text-slate-400 text-sm">
          Apprends les codes HTTP les plus importants avec des explications simples
        </p>
      </div>

      <div class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-200">
        <div class="text-4xl mb-4">😹</div>
        <h3 class="text-xl font-semibold text-white mb-2">Fun</h3>
        <p class="text-slate-400 text-sm">
          Des chats adorables en style Pixar et des anecdotes intéressantes pour chaque code
        </p>
      </div>

      <div class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-200">
        <div class="text-4xl mb-4">🎯</div>
        <h3 class="text-xl font-semibold text-white mb-2">Pratique</h3>
        <p class="text-slate-400 text-sm">
          Exemples d'utilisation réels et erreurs courantes à éviter
        </p>
      </div>
    </div>

    <div class="mt-16">
      <RouterLink
        to="/status"
        class="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
      >
        Explorer les codes de statut 🚀
      </RouterLink>
    </div>
  </div>
</template>
