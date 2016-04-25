<template>
  <div class="col-sm-4 col-sm-offset-4">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">About</h1>
            </div>
            <!-- /.col-lg-12 -->
        </div>
        <!-- /.row -->
    </div>
      <h2>{{ msg }}</h2>
      <h3>DB project make by </h3>
      <li>safe</li>
      <li>tem</li>
      <li>tor</li>
      <li>mikko</li>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      msg:"this is about us page"
    }
  },
  methods: {
  }
}
</script>
