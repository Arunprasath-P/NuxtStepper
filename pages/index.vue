<template>
    <div class="card flex justify-center">
      <div class="stepper-container">
        <div class="stepper">
          <div
            v-for="step in steps"
            :key="step.value"
            class="step"
            :class="{ active: currentStep === step.value, completed: step.value < currentStep }"
            @click="currentStep = step.value"
          ></div>
        </div>
        <div class="content">
          <div v-if="currentStep === 1" class="step-content">
            <p>Content I</p>
            <button class="custom-btn" @click="currentStep++">Next →</button>
          </div>
          <div v-if="currentStep === 2" class="step-content">
            <p>Content II</p>
            <button class="custom-btn" @click="currentStep--">← Back</button>
            <button class="custom-btn" @click="currentStep++">Next →</button>
          </div>
          <div v-if="currentStep === 3" class="step-content">
            <p>Content III</p>
            <button class="custom-btn" @click="currentStep--">← Back</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const currentStep = ref(1);
  const steps = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
  ];
  </script>
  
  <style scoped>
  /* Container for the stepper */
  .stepper-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  /* Stepper bar */
  .stepper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    margin-bottom: 1rem;
  }
  
  /* Individual steps */
  .step {
    flex: 1;
    height: 30px;
    border: 1px solid #007bff;
    border-radius: 0px 15px 15px 0px; /* Left side rounded, right side sharp */
    background-color: #e9ecef;
    margin-right: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
  
  /* Remove right margin for the last step */
  .step:last-child {
    margin-right: 0;
  }
  
  /* Active step */
  .step.active {
    background-color: #007bff;
  }
  
  /* Completed steps */
  .step.completed {
    background-color: #007bff;
  }
  
  /* Button styles for Next/Back */
  .custom-btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .custom-btn:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .custom-btn:active {
    background-color: #003f7f;
  }
  </style>
  