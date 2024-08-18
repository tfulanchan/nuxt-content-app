<template>
  <NuxtLayout>
    <!-- <NuxtLayout name="content"> -->
    <div class="mb-12">
      <h3>{{ serialNumber }}. {{ question }}</h3>
      <div class="flex flex-col space-y-2 mt-4">
        <label v-for="(answer, index) in orderedAnswers" :key="answer"
          class="rounded-md py-3 px-5 border transition-colors duration-150" :class="{
        'border-gray-300': !showResults && selected !== index,
        'border-gray-500 bg-gray-100': !showResults && selected === index,
        'border-green-500': showResults && index === correctAnswerIndex,
        'bg-green-100':
          showResults && selected === index && index === correctAnswerIndex,
        'border-red-500 bg-red-100':
          showResults && selected === index && index !== correctAnswerIndex,
        'cursor-not-allowed': showResults,
        'cursor-pointer hover:bg-gray-100 hover:border-gray-500':
          !showResults,
      }">
          <input type="radio" name="answer" class="hidden" :disabled="showResults" :value="index" v-model="selected" />
          {{ answer }}
        </label>
      </div>
    </div>

    <!-- explanation -->
    <div class="">
      <div class="">
        <div class="flex flex-row justify-between items-end">
          <h3 class="text-xl font-bold quiz-header mb-4">Explanation</h3>
          <button class="rounded-md bg-blue-500 text-white p-2" @click="showExplanation = !showExplanation">
            {{ showExplanation ? "Hide" : "Show" }}
          </button>
        </div>
        <div v-if="showExplanation" class="flex justify-between mt-3">
          <span class="py-3 px-5">{{ explanation }}</span>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<style scoped>
.container {
  /* max-width: 580px; */
  margin: 0 auto;
}

.content {
  padding: 1rem;
  margin-bottom: 10px;
}
</style>
<script setup>
import { defineProps } from "vue";
import useQuiz from "./useQuiz";

const props = defineProps({
  question: String,
  answers: Array,
  serialNumber: Number,
  explanation: String,
  answerKey: Array,
});

const { addQuestion, showResults, showExplanation } = useQuiz();
const { id, selected, orderedAnswers, correctAnswerIndex } = addQuestion(
  props.question,
  props.answers,
  props.serialNumber,
  props.explanation,
  props.answerKey
);
</script>
