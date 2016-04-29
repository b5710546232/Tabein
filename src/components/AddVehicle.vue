<template>
  <div class="container">
    <div class ="col-md-8 col-md-offset-2">


  <!-- Trigger the modal with a button -->
  <!-- <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button> -->

  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Add new Vehicle</h4>
        </div>
        <div class="modal-body">
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
               {{province_text}}
              <span class = "caret"></span>
            </button>

            <ul class = "dropdown-menu pull-right scrollable-menu">
              <li class="pointer" v-for = "item in provinces"><a  @click = "clickGetLocation(provinces[$index].name)" >{{item.name}}</a></li>
            </ul>
          </div><!-- /btn-group -->

        </div><!-- /input-group -->

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

        <!-- model-select -->
        <div class = "input-group  col-md-8">
          <span class="input-group-addon "> Model&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          <div class = "input-group-btn">
            <button type = "button" class = "btn btn-default btn-block dropdown-toggle"
            data-toggle = "dropdown">
             {{model_text}}
            <span class = "caret"></span>
          </button>

          <ul class = "dropdown-menu pull-right scrollable-menu">
            <li v-for = "item in models"><a  @click = "clickGetModel([$index])" >Brand : {{item.brand}} Make : {{item.make}}</a></li>
          </ul>
        </div><!-- /btn-group -->

      </div><!-- /input-group -->
      <!-- end model-select -->
      <br>

      </div><!-- end body -->

        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" @click="clickAddModel(inputFirst,inputSecond,inputColor)" >Confirm</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        </div>
      </div>

      <!-- end modal -->




    </div>
  </div>
    <div class="row">
          <p class="lead">Profile . . .</p>
      <div>

        <div class="well well_white">
          <div class=""> Firstname: {{firstname}}</div>
          <div class=""> Lastname: {{lastname}}</div>
          <div class=""> Location: {{location}}</div>
          <div class=""> e-mail : {{email}}</div>
          <div class=""> Number of cars : {{count}} cars</div>
        </div>
        <p class="lead">My Vehicle</p>

        <div v-for="item in vehicles">
          <div class="well well_white">
            <p class="lead">Vehicle</p>
            <hr>
            <div class="">License plate: {{item.first_block}} - {{item.second_block}}</div>
            <div class=""> province     : {{item.province}}</div>
            <div class=""> color     : {{item.color}}</div>
            <div class=""> Model : </div>
            <div class="" style="text-indent: 3em;" > Brand     : {{item.brand}}  Make : {{item.make}}  </div>
          </div>
        </div>

      <!-- add vehicle old -->
      <!-- <div>
          <p class="lead">Add vehicle</p>
          <hr>
          <div class="form">
          <div class="">
            First Block    :
            <input class="" type="text" v-model="inputFirst" placeholder="Input first block" maxlength="3">
            Second Block    :
            <input class="" type="text" v-model="inputSecond" placeholder="Input second block" maxlength="4">
          </div>

          <div class="">
            Province :
      <div class="dropdown">
      <button class="dropdown-toggle" type="button" data-toggle="dropdown">
      {{province_text}}
      <span class="caret"></span></button>
      <ul class="dropdown-menu scrollable-menu">
        <li v-for = "item in provinces"><a  @click = "clickGetLocation(provinces[$index].name)" >{{item.name}}
      </a>
        </li>
      </ul>
    </div>

          </div>

          <div class="">
            Color :
            <input class="form-control" type="text" v-model="inputColor" placeholder="Input color">
          </div>


          <div class=""> Model     : </div>

          <div class="dropdown">
          <button class="dropdown-toggle" type="button" data-toggle="dropdown">
          {{model_text}}
          <span class="caret"></span></button>
          <ul class="dropdown-menu scrollable-menu">
             <li v-for = "item in models"><a  @click = "clickGetModel([$index])" >Brand : {{item.brand}} Make : {{item.make}}</a></li>
          </ul>
        </div>

        </div>
          <hr>
        </div> -->
        <!-- add vehicle old -->
      </div>

    </div>

  <!-- old-virsion -->
    <!-- <button class="btn btn-primary btn-block" @click="clickAddModel(inputFirst,inputSecond,inputColor)">add vehicle</button> -->
    <!-- end-old-virsion -->

<!-- new-version -->
    <div class="col-md-3"></div>
    <div class="input-group col-md-6">
      <!-- <button class="btn btn-default btn-block" @click="clickAddModel(inputFirst,inputSecond,inputColor)">add vehicle</button> -->
      <button type="button" class="btn btn-default btn-block" data-toggle="modal" data-target="#myModal">Add Vehicle</button>
    </div>
    <div class="col-md-3"></div>
    <!-- end new-version -->

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
      userId: 41,
      firstname:"no connection",
      lastname:"no connection",
      location:"no connection",
      text1:"",
      text2:"",
      msg:"",
      province_text:"Province",
      model_text: "Model",
      showText:"",
      count: 0,
      vehiclemodel_id: null,
      provinces:null,
      models: null,
   vehicles:[
     {
       first_block:"no information",
       second_block:"",
       color:"กo information",
       province:"no information",
       brand:"no information",
       make:"no information",
     }]
    }
  },
  created () {
    var user_id = this.userId;
    this.firstname = 0;
    this.getUser(user_id);
    this.initProvince();
    this.initVehicleModel();
    this.initVehicle(user_id);
    this.numVehicle(user_id);
  },
  methods: {
    clickAddModel(first,second,color){
      console.log(" add model");
      if( this.model_text != "Model" && this.province_text != "Province"
          && first != "" && second != "" && color != ""){
        console.log("will add");
        var b = this.model_text.split(" ")[1];
        var m = this.model_text.split(" ")[3];
        console.log("Brand"+b);
        console.log("Make"+m);
        console.log("Province"+this.province_text);
        console.log("First"+first);
        console.log("Second"+second);
        console.log("Color"+color);
        console.log("Firstname"+this.firstname);
        console.log("Lastname"+this.lastname);
        console.log("Location"+this.location);
        console.log("VID"+this.vehiclemodel_id);
        var newModel = {
          vehiclemodel_id: this.vehiclemodel_id,
          user_id: this.userId,
          location: this.location,
          first_block: first,
          second_block: second,
          color: color,
          province: this.province_text,
        };
        this.$http.post("http://localhost:7777/newvehicle", newModel, (data) => {
          console.log('success')}).error((err) => {
        console.log('error วะ ต่อ'+err);
      });
      }
      // var newModel = {firstname:this.firstname,lastname:this.lastname,location:this.location,
      //                 brand:text1,make:text2}
      // console.log("text1 = "+text1+"||"+"text2 = "+text2);
      // console.log('click ได้ นะ');
      //   this.$http.post("http://localhost:7777/newvehicle", modelText, (data) => {
      //     console.log('success')}).error((err) => {
      //   console.log('error วะ ต่อ');
      // });
      // this.getUser(text3);
    },
    clickGetLocation(location){
      this.province_text = location;
    },
    clickGetModel(index){
      this.vehiclemodel_id = this.models[index].id;
      var brand = this.models[index].brand;
      var make = this.models[index].make;
      this.model_text = "Brand: "+brand+" Make: "+make;
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
      this.provinces = data;
    });
  },
  initVehicleModel(){
    this.firstname = 80;
    this.$http
    .get('http://localhost:7777/vehiclemodel', (data) => {
      console.log(data);
      // this.firstname = 2;
      this.models = data;
      // this.provinces = data;
    });
  },
  initVehicle(id){
    this.$http
    .get('http://localhost:7777/vehicle/'+id, (data) => {
      console.log(data);
      console.log("vehicle"+data[0].id);
      this.vehicles = data;
    });
  },
  numVehicle(id){
    this.$http
    .get('http://localhost:7777/numvehicle/'+id, (data) => {
      console.log(data);
      console.log("count vec"+data[0].num);
      this.count = data[0].num;
    });
  }
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
