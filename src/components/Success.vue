<template>
  <div class="col-sm-4 col-sm-offset-4">
    <div class="row">
      <div class="col-md-12">
        <div class="col-md-12">&nbsp;</div>
        <div class="col-md-12">
          <h3>created account succuess</h3>
        </div>
        <div class="col-md-12">&nbsp;</div>
        <div class="col-md-4"></div>
        <button class="btn btn-link" type="button" v-link ="'/home'">
          add new model
        </button>
        <div class="col-md-12">&nbsp;</div>
        <div class="col-md-12">&nbsp;</div>
      </div>
    </div>

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
  computed:{
  },
  methods: {
  }
}
</script>
<style>
.pointer{
    cursor: pointer;
}
</style>
