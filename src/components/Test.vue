<!-- page for testing -->
<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h1>Tabien Testing Page</h1>
    <input type="text" class="form-control" placeholder="Input something" v-model="msg" >
    <button class="btn btn-primary btn-block" @click="click()">somebutton</button>

    <h3>You can see text here.</h3>
    {{showText}}
    <br>
    <h4>this is text in input</h4>
    {{msg}}
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      msg:"",
      showText:""
    }
  },
  methods: {
    click(){
      //do something
      this.showText = "click";
      this.msg="";
    }
  }
}
</script>
