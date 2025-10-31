<template>
  <section class="p-6 space-y-8 max-w-3xl mx-auto">
    <!-- Título principal -->
    <div>
      <h2 class="text-3xl font-bold text-sky-700 mb-2">Tema 6 · Fracciones</h2>
      <p class="text-slate-700 leading-relaxed">
        Las <strong>fracciones</strong> son una forma de representar partes iguales de un todo.
        Se usan para indicar “cuántas partes” tomamos de una cantidad dividida en partes iguales.
        En este tema aprenderás a <strong>leer, comparar y transformar</strong> fracciones,
        así como a reconocer cuándo dos fracciones representan la misma cantidad.
      </p>
    </div>

    <!-- Definición básica -->
    <div class="bg-white rounded-xl border p-5 shadow-sm">
      <h3 class="text-xl font-semibold mb-3 text-sky-600">¿Qué es una fracción?</h3>
      <p class="text-slate-700 mb-3">
        Una fracción tiene dos números:
      </p>
      <ul class="list-disc list-inside text-slate-700 mb-3">
        <li><strong>Número de arriba</strong> (<em>numerador</em>): indica cuántas partes tomamos.</li>
        <li><strong>Número de abajo</strong> (<em>denominador</em>): indica en cuántas partes se divide el todo.</li>
      </ul>

      <div class="p-3 bg-sky-50 rounded-lg text-center">
        <KatexBlock tex="\\dfrac{3}{4}" />
        <p class="text-sm text-slate-600 mt-2">
          “Tres cuartos”: el todo está dividido en 4 partes y tomamos 3.
        </p>
      </div>
    </div>

    <!-- Fracciones equivalentes -->
    <div class="bg-white rounded-xl border p-5 shadow-sm">
      <h3 class="text-xl font-semibold mb-3 text-sky-600">Fracciones equivalentes</h3>
      <p class="text-slate-700 mb-3">
        Dos fracciones son <strong>equivalentes</strong> cuando representan la misma cantidad,
        aunque usen números diferentes.  
        Por ejemplo, <KatexBlock :inline="true" tex="\\dfrac{1}{2}" /> y 
        <KatexBlock :inline="true" tex="\\dfrac{2}{4}" /> representan la misma parte del todo.
      </p>

      <div class="p-3 bg-sky-50 rounded-lg text-center">
        <KatexBlock tex="\\dfrac{1}{2} = \\dfrac{2}{4} = \\dfrac{3}{6}" />
      </div>

      <p class="text-slate-700 mt-3">
        Si multiplicamos o dividimos el numerador y el denominador por el mismo número,
        obtenemos una fracción equivalente.
      </p>
    </div>

    <!-- Reducción y común denominador -->
    <div class="bg-white rounded-xl border p-5 shadow-sm">
      <h3 class="text-xl font-semibold mb-3 text-sky-600">Reducción a común denominador</h3>
      <p class="text-slate-700 mb-3">
        Para comparar o sumar fracciones con distinto denominador, debemos encontrar un
        <strong>denominador común</strong>.  
        Ejemplo: <KatexBlock :inline="true" tex="\\dfrac{1}{3}" /> y 
        <KatexBlock :inline="true" tex="\\dfrac{1}{6}" /> se convierten a fracciones con denominador 6.
      </p>

      <div class="p-3 bg-sky-50 rounded-lg text-center">
        <KatexBlock tex="\\dfrac{1}{3} + \\dfrac{1}{6} = \\dfrac{2}{6} + \\dfrac{1}{6} = \\dfrac{3}{6} = \\dfrac{1}{2}" />
      </div>
    </div>

    <!-- Conversión a número mixto -->
    <div class="bg-white rounded-xl border p-5 shadow-sm">
      <h3 class="text-xl font-semibold mb-3 text-sky-600">Fracciones impropias y números mixtos</h3>
      <p class="text-slate-700 mb-3">
        Una fracción es <strong>impropia</strong> cuando el numerador es mayor que el denominador,
        por ejemplo <KatexBlock :inline="true" tex="\\dfrac{7}{4}" />.  
        Se puede convertir a un <strong>número mixto</strong>: 
        <KatexBlock :inline="true" tex="1\\dfrac{3}{4}" />.
      </p>

      <div class="p-3 bg-sky-50 rounded-lg text-center">
        <KatexBlock tex="\\dfrac{7}{4} = 1\\dfrac{3}{4}" />
      </div>
    </div>

    <!-- Objetivos -->
    <div>
      <h3 class="text-xl font-semibold mb-2">Objetivos de aprendizaje</h3>
      <ul class="list-disc list-inside text-slate-700 space-y-1">
        <li>Comprender el significado de las fracciones y los números mixtos.</li>
        <li>Identificar y construir fracciones equivalentes.</li>
        <li>Obtener fracciones equivalentes mediante multiplicación o división.</li>
        <li>Reducir fracciones a un denominador común.</li>
      </ul>
    </div>

    <!-- Botón hacia la actividad -->
    <div class="mt-8 text-center">
      <RouterLink
        to="/actividad/fracciones"
        class="inline-block rounded-lg bg-sky-500 px-6 py-2 text-white font-medium hover:bg-sky-600"
      >
        Practicar: Fracciones equivalentes →
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import KatexBlock from '../ui/KatexBlock.vue'
</script>
