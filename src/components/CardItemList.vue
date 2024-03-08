<script setup>
import CardItem from './CardItem.vue'
import { inject } from 'vue'
const { cart, removeFromCart } = inject('cart')
</script>

<template>
  <div class="flex flex-col gap-4 flex-1 justify-between" v-auto-animate>
    <CardItem
      v-for="item in cart"
      :key="item.id"
      :title="item.title"
      :image-url="item.imageUrl"
      :price="item.price"
      @on-click-remove="() => removeFromCart(item)"
    />
  </div>
</template>
