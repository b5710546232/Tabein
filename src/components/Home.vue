<template>
  <div class="col-sm-4 col-sm-offset-4">
    <!-- <input type="text" class="form-control" placeholder="Input something" v-model="msg" > -->
    <!-- {{getF}} -->
    <h1 >Welcome to Tabein.</h1>
    <br>
    <h4>
      <p>Join the Community of Who the has Cars</p>
      <p>And love DATABASE</p>
    </h4>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      msg:""
    }
  },
  computed:{
    getF(){
      var x = this.msg
      return x;
    }
  },
  methods: {
  }
}
</script>
<style>
.pointer{
    cursor: pointer;
}
</style>
