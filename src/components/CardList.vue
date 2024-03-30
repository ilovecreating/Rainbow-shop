<script setup>
import Card from './Card.vue'
defineProps({
  items: Array,
  isFavorites: Boolean
})
const emit = defineEmits(['addToFavorite', 'addToCart'])
</script>

<template>
  <div class="md:grid md:grid-cols-4 md:gap-5" v-auto-animate>
    <Card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :image-url="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :isFavorite="item.isFavorite"
      :onClickFavorite="isFavorites ? null : () => emit('addToFavorite', item)"
      :onClickAdd="isFavorites ? null : () => emit('addToCart', item)"
      :isAdded="item.isAdded"
    />
  </div>
</template>
