<template>
  <div class="col-sm-4 col-sm-offset-4">
    <input type="text" class="form-control" placeholder="Input something" v-model="msg" >
    {{getF}}
<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
      <span class="caret"></span></button>
      <ul class="dropdown-menu">
        <li><a class = "pointer">HTML</a></li>
        <li><a class = "pointer">CSS</a></li>
        <li><a class = "pointer">JavaScript</a></li>
      </ul>
    </div>
    <h1 >Wellcome to Tabein.</h1>
    <br>
    <h4>
      <p>Join the Community of Who the has Cars</p>
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
