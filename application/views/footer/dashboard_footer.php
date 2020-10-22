   </div>
    <!-- End of Main Content -->
<!-- Footer -->
<footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; <a href="https://meeow.doitcebu.com">Meeow</a> <?php echo date("Y")?></span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <!-- Logout Modal-->
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-coffee" href="login.html">Logout</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Bootstrap core JavaScript-->
  <script> var baseUrl = "<?php echo base_url(); ?>"; </script>
  <script src="<?php echo base_url().'vendor/jquery/jquery.min.js'?>"></script>
  <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.min.js"></script>
  <script src="<?php echo base_url().'assets/js/constant.js'?>"></script>
  <script src="<?php echo base_url().'vendor/bootstrap/js/bootstrap.bundle.min.js'?>"></script>

  <!-- Core plugin JavaScript-->
  <script src="<?php echo base_url().'vendor/jquery-easing/jquery.easing.min.js'?>"></script>

  <!-- Custom scripts for all pages-->
  <script src="<?php echo base_url().'assets/js/sb-admin-2.min.js'?>"></script>
  <script src="<?php echo base_url().'assets/js/jquery-validate.js'?>"></script>
  <script src="<?php echo base_url().'assets/js/sweetalert2@7.26.11.js'?>"></script>
  <script src="<?php echo base_url().'assets/js/js-addon.js'?>"></script>

 
  <script src="<?php echo base_url().'assets/js/api_constant.js'?>"></script>
  <script src="<?php echo base_url().'assets/js/dashboard.js'?>"></script>


  <!-- Page level plugins -->
  <script src="<?php echo base_url().'assets/vendor/chart.js/Chart.min.js'?>"></script>

  <!-- Page level custom scripts -->
  <script src="<?php echo base_url().'assets/js/demo/chart-area-demo.js'?>"></script>
  <script src="<?php echo base_url().'assets/js/demo/chart-pie-demo.js'?>"></script>

    <!-- Page level plugins -->
  <script src="<?php echo base_url().'vendor/datatables/jquery.dataTables.min.js'?>"></script>
  <script src="<?php echo base_url().'vendor/datatables/dataTables.bootstrap4.min.js'?>"></script>

  <!-- Page level custom scripts -->
  <script src="<?php echo base_url().'assets/js/demo/datatables-demo.js'?>"></script>


  <?php   
    if(!empty($extra_scripts)){
        foreach ($extra_scripts as $key => $value) {
            echo "<script type='text/javascript' src='".$value."'></script>";
        }
    }
?>

</body>

</html>
