<template>
  <div class="container-fluid">

    <div class="row">
      <div>

        <div class="well well_white">
          <!-- <img class="img-responsive" src="http://placehold.it/800x300" alt=""> -->
          <p class="lead">Profile name</p>
          <hr>
          <div class=""> name     : {{firstname}}</div>
          <div class=""> lastname : {{lastname}}</div>
          <div class=""> e-mail : {{email}}</div>
          <div class=""> Number of cars : 5 cars</div>
          <hr>
        </div>
        <div v-for="item in vehicles">
          <div class="well well_white">
            <p class="lead">Vehicle</p>
            <hr>
            <div class="">License plate: {{item.first_block}}{{item.second_block}}</div>
            <div class=""> province     : {{item.provice}}</div>
            <div class=""> color     : {{item.color}}</div>
            <div class=""> Brand     : {{item.brand}}</div>
            <div class=""> model : {{item.model}}</div>
          </div>
        </div>


      </div>

    </div>

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
      username:"Anonymous" + " : ",
      firstname:"tor",
      text:"start",
      lastname:"worakan",
      email:"test@xmail.com",
      msg:"",
      time_since_post:"x day ago",
      vehicles:[
        {
          first_block:"xyz",
          second_block:"1150",
          color:"กูสีแดง",
          provice:"กทมวะ",
          brand:"Toyoya",
          model:"V-โก้"
        },
        {
          first_block:"xyz",
          second_block:"1150",
          color:"กูสีแดง",
          provice:"กทมวะ",
          brand:"Toyoya",
          model:"V-โก้"
        },
        {
          first_block:"xyz",
          second_block:"1150",
          color:"กูสีแดง",
          provice:"กทมวะ",
          brand:"Toyoya",
          model:"V-โก้"
        },
        {
          first_block:"xyz",
          second_block:"1150",
          color:"กูสีแดง",
          provice:"กทมวะ",
          brand:"Toyoya",
          model:"V-โก้"
        },

      ]
    }
  },
  created () {
    this.$http
    .get('http://localhost:7777/text', (data) => {
      this.text = data;
    })

    this.getText();

  },
  methods: {
    someMethod(){
      // add method here

    },
    getText(){
      this.$http
      .get('http://localhost:7777/user', (data) => {
        this.vehicles = data;
      })
    }
  }
}
</script>

<style>
.well_white{
  background-color: rgb(255, 255, 255)
}
</style>
