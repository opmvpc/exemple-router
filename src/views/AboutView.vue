<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-4xl font-bold text-white mb-6">À propos 🎓</h1>

    <div class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8 space-y-6">
      <div>
        <h2 class="text-2xl font-semibold text-white mb-3">Le Projet</h2>
        <p class="text-slate-300 leading-relaxed">
          Ce site est un exemple pédagogique pour apprendre <strong class="text-purple-400">Vue Router</strong>.
          Il démontre les concepts de base du routing dans Vue.js, notamment les routes dynamiques avec paramètres.
        </p>
      </div>

      <div>
        <h2 class="text-2xl font-semibold text-white mb-3">Concepts abordés</h2>
        <ul class="space-y-2 text-slate-300">
          <li class="flex items-start gap-2">
            <span class="text-green-400">✓</span>
            <span>Navigation avec <code class="px-2 py-1 bg-slate-900 rounded text-pink-400">RouterLink</code></span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-400">✓</span>
            <span>Routes dynamiques avec paramètres (<code class="px-2 py-1 bg-slate-900 rounded text-pink-400">:id</code>)</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-400">✓</span>
            <span>Affichage des composants avec <code class="px-2 py-1 bg-slate-900 rounded text-pink-400">RouterView</code></span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-400">✓</span>
            <span>Gestion des données JSON</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-400">✓</span>
            <span>Navigation active avec classes conditionnelles</span>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="text-2xl font-semibold text-white mb-3">Stack technique</h2>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">Vue 3</span>
          <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">Vue Router 4</span>
          <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">Tailwind CSS 4</span>
          <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">Vite</span>
        </div>
      </div>

      <div class="pt-4 border-t border-slate-700">
        <p class="text-slate-400 text-sm">
          💡 Astuce : Regarde le code source pour comprendre comment tout fonctionne !
        </p>
      </div>
    </div>
  </div>
</template>
