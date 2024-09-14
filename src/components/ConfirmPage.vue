<template>
    <div>
      <h1>Order placed</h1>
      <p>Your number with number with number {{ orderNumber }} has been successfully placed.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        orderNumber: null
      }
    },
    mounted() {
      const urlParams = new URLSearchParams(window.location.search);
      this.orderNumber = urlParams.get('o');
    }
  }
  </script>
  