<template>
  <div>
    <h1>HOdME</h1>
    <h2>{{ msg }}</h2>
    <button class="btn btn-primary btn-lg"  v-link="'/some link'">button</button>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      msg:"home page \n add some thing"
    }
  },
  methods: {
  }
}
</script>
