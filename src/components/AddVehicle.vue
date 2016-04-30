<template>
  <div class="container">
    <div class ="col-md-8 col-md-offset-2">




      <!-- Modal Edit -->
      <div class="modal fade" id="editModal" role="dialog">
        <div class="modal-dialog">

          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Edit Vehicle</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="col-md-1"></div>
                  <div class="input-group col-md-8">
                    <span class="input-group-addon"> First Block &nbsp;&nbsp;&nbsp;&nbsp;   </span>
                    <input class="form-control" type="text" v-model="inputFirst" placeholder="Input first block" maxlength="3">
                  </div>
                <br>
                <div class="col-md-1"></div>
                  <div class="input-group col-md-8">
                    <span class="input-group-addon"> Second Block </span>
                    <input class="form-control" type="text" v-model="inputSecond" placeholder="Input second block" maxlength="4">
                  </div>
                  <br>
  <div class="col-md-1"></div>
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
                <div class="col-md-1"></div>
                <div class="input-group col-md-8">
                  <span class="input-group-addon"> Color &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                  <input class="form-control" type="text" v-model="inputColor" placeholder="Input color">
                </div>
                <br>
<div class="col-md-1"></div>
                <div class="input-group col-md-8">
                  <span class="input-group-addon"> Image URL &nbsp;&nbsp;&nbsp; </span>
                  <input class="form-control" type="text" v-model="inputImageURL" placeholder="Input color">
                </div>

                <br>

                <div class="row">
                  <div class="col-md-12">
                    <div class="col-md-1"></div>
                    <div class="col-md-6"></div>
                    <button class="btn btn-default col-md-2" @click="method()" v-link = "'/addVehicle'" >upload</button>
                    <div class="col-md-4"></div>
                  </div>
                </div>
                <br>

                <!-- model-select -->
                <div class="col-md-1"></div>
                <div class = "input-group  col-md-8">
                  <span class="input-group-addon "> Model&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                  <div class = "input-group-btn">
                    <button type = "button" class = "btn btn-default btn-block dropdown-toggle"
                    data-toggle = "dropdown">
                    {{model_text}}
                    <span class = "caret"></span>
                  </button>

                  <ul class = "dropdown-menu pull-right scrollable-menu">
                    <li class ="pointer" v-for = "item in models"><a  @click = "clickGetModel([$index])" >Brand : {{item.brand}} Make : {{item.make}}</a></li>
                  </ul>
                </div><!-- /btn-group -->

              </div><!-- /input-group -->
              <!-- end model-select -->
              <br>
              <div class="col-md-1"></div>
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                add new model
              </button>
              <div class="collapse" id="collapseExample">
                <br>
                <!-- add new model -->
                <div class="well my-well">

                  <div class="input-group col-md-8">
                    <span class="input-group-addon"> Brand &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                    <input class="form-control" type="text" v-model="inputBrand" placeholder="Input color">
                  </div>
                  <br>
                  <div class="input-group col-md-8">
                    <span class="input-group-addon"> Make &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                    <input class="form-control" type="text" v-model="inputMake" placeholder="Input color">
                  </div>

                  <br>
                  <div class="input-group col-md-8">
                    <button type="button" class="btn btn-success col-md-4" data-toggle="collapse"  data-target="#collapseExample" @click="clickAddModel(inputBrand,inputMake)" >Add model</button>
                  </div>
                  <br>
                </div>
              </div>
            </div>
          </div>

        </div><!-- end body -->

        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-dismiss="modal" @click="clickAddVehicle(inputFirst,inputSecond,inputColor)" >Confirm</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
    </div>

      <!-- end modal -->


      <!-- Modal -->
      <div class="modal fade" id="addNewModal" role="dialog">
        <div class="modal-dialog">

          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Add new Vehicle</h4>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="col-md-1"></div>
                  <div class="input-group col-md-8">
                    <span class="input-group-addon"> First Block &nbsp;&nbsp;&nbsp;&nbsp;   </span>
                    <input class="form-control" type="text" v-model="inputFirst" placeholder="Input first block" maxlength="3">
                  </div>
                <br>
                <div class="col-md-1"></div>
                  <div class="input-group col-md-8">
                    <span class="input-group-addon"> Second Block </span>
                    <input class="form-control" type="text" v-model="inputSecond" placeholder="Input second block" maxlength="4">
                  </div>
                  <br>
  <div class="col-md-1"></div>
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
                <div class="col-md-1"></div>
                <div class="input-group col-md-8">
                  <span class="input-group-addon"> Color &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                  <input class="form-control" type="text" v-model="inputColor" placeholder="Input color">
                </div>
                <br>
<div class="col-md-1"></div>
                <div class="input-group col-md-8">
                  <span class="input-group-addon"> Image URL &nbsp;&nbsp;&nbsp; </span>
                  <input class="form-control" type="text" v-model="inputImageURL" placeholder="Input color">
                </div>

                <br>

                <div class="row">
                  <div class="col-md-12">
                    <div class="col-md-1"></div>
                    <div class="col-md-6"></div>
                    <button class="btn btn-default col-md-2" @click="method()" v-link = "'/addVehicle'" >upload</button>
                    <div class="col-md-4"></div>
                  </div>
                </div>
                <br>

                <!-- model-select -->
                <div class="col-md-1"></div>
                <div class = "input-group  col-md-8">
                  <span class="input-group-addon "> Model&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                  <div class = "input-group-btn">
                    <button type = "button" class = "btn btn-default btn-block dropdown-toggle"
                    data-toggle = "dropdown">
                    {{model_text}}
                    <span class = "caret"></span>
                  </button>

                  <ul class = "dropdown-menu pull-right scrollable-menu">
                    <li class ="pointer" v-for = "item in models"><a  @click = "clickGetModel([$index])" >Brand : {{item.brand}} Make : {{item.make}}</a></li>
                  </ul>
                </div><!-- /btn-group -->

              </div><!-- /input-group -->
              <!-- end model-select -->
              <br>
              <div class="col-md-1"></div>
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                add new model
              </button>
              <div class="collapse" id="collapseExample">
                <br>
                <!-- add new model -->
                <div class="well my-well">

                  <div class="input-group col-md-8">
                    <span class="input-group-addon"> Brand &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                    <input class="form-control" type="text" v-model="inputBrand" placeholder="Input color">
                  </div>
                  <br>
                  <div class="input-group col-md-8">
                    <span class="input-group-addon"> Make &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                    <input class="form-control" type="text" v-model="inputMake" placeholder="Input color">
                  </div>

                  <br>
                  <div class="input-group col-md-8">
                    <button type="button" class="btn btn-success col-md-4" data-toggle="collapse"  data-target="#collapseExample" @click="clickAddModel(inputBrand,inputMake)" >Add model</button>
                  </div>
                  <br>
                </div>
              </div>
            </div>
          </div>

        </div><!-- end body -->

        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-dismiss="modal" @click="clickAddVehicle(inputFirst,inputSecond,inputColor)" >Confirm</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
        </div>
      </div>

      <!-- end modal -->




    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <p class="lead">Profile . . .</p>
      <div>

        <div class="well well_white">
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-12"> Firstname: {{firstname}}</div>
              <div class="col-md-12"> Lastname: {{lastname}}</div>
              <div class="col-md-12"> Location: {{location}}</div>
              <div class="col-md-12"> e-mail : {{email}}</div>
              <div class="col-md-12"> Number of cars : {{count}} cars</div>
              <div class="col-md-12"></div>
              <div class="col-md-12"></div>
              <div class="col-md-12"></div>
              <div class = "col-md-10"></div>
              <div class = "col-md-2"><button class="btn btn-default  btn-create" v-link="'/accountsetting'">Edit accout</button></div>
            </div>
          </div>
        </div>
        <p class="lead">My Vehicle</p>

        <div v-for="item in vehicles">
          <div class="well well_white">
            <div class="row">
              <div class="col-md-12">
                <p class="lead">Vehicle</p>
                <hr>
                <div class="col-md-12">License plate: {{item.first_block}} - {{item.second_block}}</div>
                <div class="col-md-12">province     : {{item.province}}</div>
                <div class="col-md-12"> color     : {{item.color}}</div>
                <div class="col-md-12"> Model : </div>
                <div class="col-md-12"> Brand     : {{item.brand}}  Make : {{item.make}}  </div>
                <div class = "col-md-10"></div>
                <div class="input-group col-md-2">
                    <button type="button" class="btn btn-default" data-toggle="modal" data-target="#editModal">Edit Vehicle</button>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="col-md-3"></div>
  <div class="input-group col-md-6">
    <!-- <button class="btn btn-default btn-block" @click="clickAddModel(inputFirst,inputSecond,inputColor)">add vehicle</button> -->
    <button type="button" class="btn btn-info btn-block" data-toggle="modal" data-target="#addNewModal">Add Vehicle</button>
  </div>
  <div class="col-md-3"></div>
  <!-- end new-version -->

</div>
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
      inputBrand:"",
      inputMake:"",
      inputFirst:"",
      inputSecond:"",
      inputColor:"",
      count: 0,
      vehiclemodel_id: null,
      provinces:null,
      models: null,
      vehicles:[
        {
          first_block:"-",
          second_block:"",
          color:"-",
          province:"-",
          brand:"-",
          make:"-",
        }]
      }
    },
    created () {
      this.refresh();
      this.firstname = 0;

    },
    methods: {
      clickAddVehicle(first,second,color){
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
          this.vehicles.push(newModel);
          this.$http.post("http://localhost:7777/newvehicle", newModel, (data) => {
            console.log('success')
          }
        ).error((err) => {
          console.log('error วะ ต่อ'+err);
        });
      }
      this.inputFirst = "";
      this.inputSecond = "";
      this.inputColor = "";
      this.province_text = "Province";
      this.model_text = "Model";
      this.count = this.vehicles.length;
    },
    clickAddModel(b,m){
      var model = {
        brand: b,
        make: m
      };
      this.inputBrand = "";
      this.inputMake = "";
      this.models.push(model);
      this.$http.post("http://localhost:7777/newmodel", model, (data) => {
        console.log('success')
      }
    ).error((err) => {
      console.log('error วะ ต่อ'+err);
    });
  },
  refresh(){
    console.log('refesh');
    var user_id = this.userId;
    this.getUser(user_id);
    this.initProvince();
    this.initVehicleModel();
    this.initVehicle(user_id);
    this.numVehicle(user_id);
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
    console.log('in id = '+id);
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
.my-well {
  background-color: #f7f7f7
}
</style>
