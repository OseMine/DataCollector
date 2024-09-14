<template>
    <div>
      <h1>Order Confirmation</h1>
      <p>Your order number is: {{ orderNumber }}</p>
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
  