<template>
  <div class="col-sm-4 col-sm-offset-4">
    <input type="text" class="form-control" placeholder="Input something" v-model="msg" >
    {{msg}}
<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
      <span class="caret"></span></button>
      <ul class="dropdown-menu">
        <li><a href="#home">HTML</a></li>
        <li><a href="#home">CSS</a></li>
        <li><a href="#home">JavaScript</a></li>
      </ul>
    </div>

    <alert type="success" >
      <strong>Well Done!</strong>
      You successfully read this important alert message.
    </alert>
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
  methods: {
  }
}
</script>
