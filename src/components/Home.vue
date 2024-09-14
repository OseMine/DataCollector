<!-- App.vue -->
<template>
  <div id="app">
    <router-view></router-view> <!-- Der gerenderte Routeninhalt wird hier angezeigt -->
    <div class="container">
      <h1>Your order Number is:</h1>
      <div class="number-display">
        <h2>{{ displayNumber }}</h2>
      </div>
      <h3>To confirm and place the order please press the button below</h3>
      <button @click="confirmOrder">Confirm</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      displayNumber: 'Please provide a valid order number'
    }
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const bParam = urlParams.get('b');
    if (bParam && !isNaN(bParam)) {
      this.displayNumber = bParam;
    }
  },
  methods: {
    confirmOrder() {
      // Weiterleitung zur URL /confirm?o=<displayNumber>
      if (this.displayNumber && !isNaN(this.displayNumber)) {
        const confirmUrl = `/confirm?o=${this.displayNumber}`;
        window.location.href = confirmUrl; // Weiterleitung zur neuen Seite
      } else {
        alert('Invalid order number!');
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #3498db;
}

.number-display {
  margin-top: 40px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 48px;
  color: #e74c3c;
  margin: 10px 0;
}

button {
  background-color: #111827;
  border: 1px solid transparent;
  border-radius: .75rem;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex: 0 0 auto;
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: .75rem 1.2rem;
  text-align: center;
  text-decoration: none #6B7280 solid;
  text-decoration-thickness: auto;
  transition-duration: .2s;
  transition-property: background-color,border-color,color,fill,stroke;
  transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
}

button:hover {
  background-color: #374151;
}

button:focus {
  box-shadow: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

@media (min-width: 768px) {
  button {
    padding: .75rem 1.5rem;
  }
}
</style>
