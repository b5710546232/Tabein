<template>
  <div class="container-fluid col-md-8 col-md-offset-2">
    <div class="row">
      <div class="well well_white">
        <p class="lead">Add vehicle</p>
        <hr>
        <br>
        <div class=""> Firstname &nbsp;: {{firstname}}</div>
        <div class=""> Lastname &nbsp;: {{lastname}}</div>
        <div class=""> Location&nbsp;&nbsp;&nbsp; : {{location}}</div>
        <br>
        <br>
        <div class="input-group col-md-8">
          <span class="input-group-addon"> First Block &nbsp;&nbsp;&nbsp;&nbsp;   </span>
          <input class="form-control" type="text" v-model="inputFirst" placeholder="Input first block">
        </div>

        <br>
        <div class="input-group col-md-8">
          <span class="input-group-addon"> Second Block </span>
          <input class="form-control" type="text" v-model="inputSecond" placeholder="Input Second Block block">
        </div>
        <br>

        <div class = "input-group  col-md-8">
            <span class="input-group-addon "> Province&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          <!-- <input type = "text" class = "form-control"> -->
          <div class = "input-group-btn">

            <button type = "button" class = "btn btn-default btn-block dropdown-toggle"
            data-toggle = "dropdown">
            {{provnince_text}}
            <span class = "caret"></span>
          </button>

          <ul class = "dropdown-menu pull-right scrollable-menu">
            <li class="pointer" v-for = "item in provinces"><a  @click = "clickGetLocation(provinces[$index].name)" >{{item.name}}</a></li>
          </ul>
        </div><!-- /btn-group -->

      </div><!-- /input-group -->


      <!-- <div class="form-group"> -->
        <!-- Province : -->
        <!-- <input class="form-control" type="text" v-model="inputProvince" placeholder="Input province"> -->
        <!-- <div class="dropdown">
          <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
            {{provnince_text}}
            <span class="caret"></span></button>
            <ul class="dropdown-menu scrollable-menu">
              <li class="pointer" v-for = "item in provinces"><a  @click = "clickGetLocation(provinces[$index].name)" >{{item.name}}</a></li>
            </ul>
          </div>

        </div> -->


        <br>
        <div class="input-group col-md-8">
          <span class="input-group-addon"> Color &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          <input class="form-control" type="text" v-model="inputColor" placeholder="Input color">
        </div>
        <br>

        <div class="input-group col-md-8">
          <span class="input-group-addon"> Model&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </span>
          <input class="form-control" type="text" v-model="inputBrand" placeholder="Input brand">
        </div>
        <br>

        <div class="input-group col-md-8">
          <span class="input-group-addon"> Make&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </span>
          <input class="form-control" type="text" v-model="inputMake" placeholder="Input make">
        </div>
        <br>
  <div class="col-md-3"></div>
<div class="input-group col-md-6">
        <button class="btn btn-default btn-block" @click="clickAddModel(inputBrand,inputMake,inputI)">add vehicle</button>
        </div>
        <div class="col-md-3"></div>

      </div>
    </div><!-- well well_white -->


  </div>
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
      firstname:"no connection",
      lastname:"no connection",
      location:"no connection",
      inputFirst:"",
      inputSecond:"",
      text1:"",
      text2:"",
      msg:"",
      provnince_text:"Province",
      showText:"",
      provinces:[{name:"no1"},{name:"no2"}],
      selectOptions: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female'}
      ]
    }
  },
  created () {
    var user_id = 1;
    this.firstname = 0;
    this.getUser(user_id);
    this.initProvince();
  },
  methods: {
    clickAddModel(text1,text2,text3){
      var newModel = {firstname:this.firstname,lastname:this.lastname,location:this.location,
        brand:text1,make:text2}
        console.log("text1 = "+text1+"||"+"text2 = "+text2);
        console.log('click ได้ นะ');
        this.$http.post("http://localhost:7777/newvehicle", modelText, (data) => {
          console.log('success')}).error((err) => {
            console.log('error วะ ต่อ');
          });
          // this.getUser(text3);
        },
        clickGetLocation(location){
          // console.log('call');
          // console.log(location);
          // this.location = location;
          this.provnince_text = location;
        },
        getUser(id){
          console.log(id);
          this.firstname = id;
          this.$http
          .get('http://localhost:7777/user/'+id, (data) => {
            console.log(data);
            this.firstname = data;
            console.log(data[0].id);
            this.firstname = data[0].firstname;
            this.lastname = data[0].lastname;
            this.location = data[0].location;
          });
        },
        initProvince(){
          this.firstname = 90;
          this.$http
          .get('http://localhost:7777/province', (data) => {
            console.log(data);
            this.firstname = 1;
            this.provinces = data;
          });
        },
      }
    }
    </script>
    <style>
    .scrollable-menu{
      height:auto;
      max-height:200px;
      overflow-x: hidden;
    }
    .pointer{
      cursor: pointer;
    }
    .caret {
    position: absolute;
    left: 90%;
    top: 45%;
}

    </style>
