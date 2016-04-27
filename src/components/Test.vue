<!-- page for testing -->
<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h1>Tabien Testing Page</h1>
    <input type="text" class="form-control" placeholder="Input something" v-model="msg" >
    <button class="btn btn-primary btn-block" @click="clickD(msg)">somebutton</button>

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
    clickD(text){
      var t = {x:text}
      console.log("text = "+text);
      console.log('click ได้ นะ');
        this.$http.post("http://localhost:7777/", t, (data) => {
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
