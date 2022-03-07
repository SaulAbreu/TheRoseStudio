<template>
  <div class="container">
    <Hero >
        <div slot="header">
          <p>hola</p>
          <h1 class="title">TÍTULO</h1>
        </div>
      </Hero>
    <section class="section">
      
      <RestaurantCard
        :name= restaurants[1].name
        description="Description......"
        slug="restaurant-slug"
        category="Burguer"
        :likes= "likes"
        v-on:myLikeButton="sumRestaurantLikes"
      />
    </section>
  </div>
</template>

<script>
import RestaurantCard from '~/components/RestaurantCard'
import Hero from '~/components/Hero'
export default {
  components: {
    RestaurantCard,
    Hero
  },
  methods:{
    sumRestaurantLikes() {
      this.likes = this.likes + 1
      // this.likes++
    }
  },
  data() {
  return {
    likes: 0,
    restaurants: [
      {
        name: 'Manairo',
        slug: 'manairo',
        category: 'Italian',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        name: 'Gorría Restaurant',
        slug: 'gorria-restaurant',
        category: 'Asian',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        name: 'Dans le Noir?',
        slug: 'dans-noir',
        category: 'Mediterranean',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      }
    ]
  }
}
}
</script>
<style></style>
