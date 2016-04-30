<template>
  <div class="container">
    <div class ="col-md-8 col-md-offset-2">
  <div class="row">
    <div class="col-md-12">
      <p class="lead">Edit your Vehicle . . .</p>
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
      </div>
    </div>

  </div>

  <div class="col-md-3"></div>
  <div class="input-group col-md-6">
    <!-- <button class="btn btn-default btn-block" @click="clickAddModel(inputFirst,inputSecond,inputColor)">add vehicle</button> -->
    <button type="button" class="btn btn-info btn-block" data-toggle="modal" data-target="#myModal">Add Vehicle</button>
  <!-- end new-version -->

</div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {

      }
    },
    created () {


    },
    methods: {

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
