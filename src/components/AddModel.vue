<template>
  <div class="container-fluid">

    <div class="row">
      <div>

        <div class="well well_white">
          <!-- <img class="img-responsive" src="http://placehold.it/800x300" alt=""> -->
          <p class="lead">Add vehicle model</p>
          <hr>
          <div class="form">
          <div class=""> Brand     : </div>
          <input class="form-control" type="text" v-model="inputBrand" placeholder="Input Brand">
          <div class=""> Make : </div>
          <input class="form-control" type="text" v-model="inputMake" placeholder="Input Make">
        </div>
          <hr>
        </div>

      </div>

    </div>

    <button class="btn btn-primary btn-block" @click="clickAddModel(inputBrand,inputMake)">add model</button>

  </div>
  <!-- /.container -->
  <div class="container">
    <!-- Footer -->
    <footer>
      <div class="row">
        <div class="col-lg-12">
          <hr>
          <p>Tabien web database SKE project 2016</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text1:"",
      text2:"",
      msg:"",
      showText:""
    }
  },
  methods: {
    clickAddModel(text1,text2){
      var modelText = {brand:text1,make:text2}
      console.log("text1 = "+text1+"||"+"text2 = "+text2);
      console.log('click ได้ นะ');
        this.$http.post("http://localhost:7777/newmodel", modelText, (data) => {
          console.log('success')}).error((err) => {
        console.log('error วะ ต่อ');
      });
    }
  }
}
</script>
