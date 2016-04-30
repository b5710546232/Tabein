<template>
  <div class="container-fluid">
    <div class ="col-md-8 col-md-offset-2">
      <div class="row">


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

        <div class="well well_white">
          <!-- <img class="img-responsive" src="http://placehold.it/800x300" alt=""> -->
          <p class="lead">Profile name</p>
          <hr>
        <div class="row">
          <div class="col-md-12 row">
                      <div class="col-md-12"> name     : {{firstname}}</div>
                      <div class="col-md-12">&nbsp;</div>
                      <div class="col-md-12"> lastname : {{lastname}}</div>
                      <div class="col-md-12">&nbsp;</div>
                      <div class="col-md-12"> e-mail : {{email}}</div>
                      <div class="col-md-12">&nbsp;</div>
                      <div class="col-md-12"> Number of cars : {{count}} cars</div>
                      <div class="col-md-12">&nbsp;</div>
                      <div class="col-md-10"></div>
                      <div class = "col-md-2"><button class="btn btn-default  btn-create" v-link="'/accountsetting'">Edit accout</button></div>
          </div>
        </div>
          <hr>
        </div>
        <div v-for="item in vehicles">
          <div class="well well_white">
            <p class="lead">Vehicle</p>
            <hr>
          <div class="row">
            <div class="col-md-12">
                <div class="col-md-12">License plate: {{item.first_block}}{{item.second_block}}</div>
                <div class="col-md-12">&nbsp;</div>
                          <div class="col-md-12"> province     : {{item.province}}</div>
                          <div class="col-md-12">&nbsp;</div>
                          <div class="col-md-12"> color     : {{item.color}}</div>
                          <div class="col-md-12">&nbsp;</div>
                          <div class="col-md-12"> Brand     : {{item.brand}}</div>
                          <div class="col-md-12">&nbsp;</div>
                          <div class="col-md-12"> model : {{item.make}}</div>
                          <div class="col-md-12">&nbsp;</div>
                          <div class="col-md-10"></div>
                          <div class="input-group col-md-2">
                <button type="button" class="btn btn-default" data-toggle="modal" data-target="#editModal">Edit Vehicle</button>
              </div>
            </div>
          </div>
          </div>
        </div>

        <!-- row -->
      </div>

    </div>
    <!-- col-md-8 col-md-offset-2 -->
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
      count:0,
      msg:"",
      time_since_post:"x day ago",
      vehicles:[
        {
          first_block:"xyz",
          second_block:"1150",
          color:"กูสีแดง",
          province:"กทมวะ",
          brand:"Toyoya",
          model:"V-โก้"
        },
        {
          first_block:"xyz",
          second_block:"1150",
          color:"กูสีแดง",
          province:"กทมวะ",
          brand:"Toyoya",
          model:"V-โก้"
        },
        {
          first_block:"xyz",
          second_block:"1150",
          color:"กูสีแดง",
          province:"กทมวะ",
          brand:"Toyoya",
          model:"V-โก้"
        },
        {
          first_block:"xyz",
          second_block:"1150",
          color:"กูสีแดง",
          province:"กทมวะ",
          brand:"Toyoya",
          model:"V-โก้"
        },

      ]
    }
  },
  created () {

    this.initUser();
    this.initVehicle();
    this.numVehicle();
    // this.initVehicleModel();

  },
  methods: {
    someMethod(){
      // add method here

    },
    initUser(){
      this.$http
      .get('http://localhost:7777/user/1', (data) => {
        console.log(data);
        console.log(data[0].id);
        this.firstname = data[0].firstname;
        this.lastname = data[0].lastname;
      });
    },
    initVehicle(){
      this.$http
      .get('http://localhost:7777/vehicle/1', (data) => {
        console.log(data);
        console.log("vehicle"+data[0].id);
        this.vehicles = data;
      });
    },
    numVehicle(){
      this.$http
      .get('http://localhost:7777/numvehicle/1', (data) => {
        console.log(data);
        console.log("count vec"+data[0].num);
        this.count = data[0].num;
      });
    }
  }
}

</script>

<style>
.well_white{
  background-color: rgb(255, 255, 255)
}
.pointer{
  cursor: pointer;
}
.caret {
  position: absolute;
  left: 90%;
  top: 45%;
}
.scrollable-menu{
  height:auto;
  max-height:200px;
  overflow-x: hidden;
}
</style>
