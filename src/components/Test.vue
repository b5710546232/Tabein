<!-- page for testing -->
<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h1>Tabien Testing Page</h1>
    <input type="text" class="form-control" placeholder="Input something" v-model="text1" >
    <input type="text" class="form-control" placeholder="Input something" v-model="text2" >
    <button class="btn btn-primary btn-block" @click="clickD(text1,text2)">somebutton</button>

    <h3>You can see text here.</h3>
    {{showText}}
    <br>
    <h4>this is text in input</h4>
    {{text1}}{{text2}}
  </div>
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
    clickD(text1,text2){
      var modelText = {brand:text1,make:text2}
      console.log("text1 = "+text1+"||"+"text2 = "+text2);
      console.log('click ได้ นะ');
        this.$http.post("http://localhost:7777/newmodel", modelText, (data) => {
          console.log('success')}).error((err) => {
        console.log('error วะ ต่อ');
      });
      // this.$http.get(
      //   "http://localhost:7777/",
      //   function (projects) {
      //      // $set sets a property even if it's not declared
      //   },
      //   {
      //     headers: {
      //       'Content-Type': 'application/json' ,
		  //               'Access-Control-Allow-Origin': '*',
		  //               'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
		  //               'Access-Control-Allow-Headers':'X-Requested-With'
      //     }
      //   }
      // );
        // this.$http
        // .post('http://localhost:7777/',text,{headers: {'Access-Control-Allow-Origin': '*'}}).then(function () {
        //   console.log('suc');
        // }, ()=>{console.log('error วะ ต่อ');});
    }

  }
}

</script>
