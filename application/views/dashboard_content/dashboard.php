<style>
  .disabled{
      background-color: #ccc !important;
      color: #FFFFFF !important;
      cursor: default !important;
  }
  .fc-title,.fc-time{
    color:#fff !important;
  }
  .hidden{
    display:none;
  }
  .holiday {
      background: lightgray;
  }
</style>
<!-- Begin Page Content -->
<div class="container-fluid">

<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 class="h3 mb-0 text-gray-800">
    Scheduling System
    <button class="btn btn-primary btn-circle float-right" id="btn-add-schedule">
        <i class="fa fa-plus"></i>
    </button>
  </h1>
  <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-coffee shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a> -->
</div>

<!-- Content Row -->
<!-- <div class="row">

  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Suppliers</div>
            <div class="h5 mb-0 font-weight-bold text-gray-800" id="total-suppliers"></div>
          </div>
          <div class="col-auto">
            <i class="fas fa-calendar fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-success shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Upcomming Expired Products</div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
          </div>
          <div class="col-auto">
            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-info shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Transaction Made(Daily)</div>
            <div class="row no-gutters align-items-center">
              <div class="col-auto">
                <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
              </div>
              <div class="col">
                <div class="progress progress-sm mr-2">
                  <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-auto">
            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-warning shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Total Stores</div>
            <div class="h5 mb-0 font-weight-bold text-gray-800" id="total-stores">0</div>
          </div>
          <div class="col-auto">
            <i class="fas fa-comments fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> -->
<div class="row">

</div>
<!-- Content Row -->

<div class="row" id="calendar-container">
  <div class="col-lg-12 ml-auto text-center mb-5 mb-lg-0">
    <div id="note"></div>
  </div>
  <div class="col-lg-12 ml-auto text-center mb-5 mb-lg-0">
      <div id='calendar'></div>
  </div>
</div>

<!-- Content Row -->
<!-- <div class="row">
  <div class="col-lg-6 mb-4">

    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Store Daily Sales</h6>
      </div>
      <div class="card-body" id="store_list">
      
      </div>
    </div>


  </div>

  <div class="col-lg-6 mb-4">

    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">News Update</h6>
      </div>
      <div class="card-body">
          <div class="row">
              <div class="col-12">
                <div class="text-center">
                  <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;" src="img/undraw_posting_photo.svg" alt="">
                </div>
                <p>New menu has been added to the list under the coffe menu please be informed that this is a test</p>
                <a target="_blank" rel="nofollow" href="#">Menu list &rarr;</a>
              </div>
              <div class="col-12">
                <div class="text-center">
                  <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;" src="img/undraw_posting_photo.svg" alt="">
                </div>
                <p>New Store has been opened please be inform that we need staff if you reffer then the person you reffer will be approve you received the refferal fee</p>
                <a target="_blank" rel="nofollow" href="#">Referal Form &rarr;</a>
              </div>
          </div>
      </div>
    </div>

    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
      </div>
      <div class="card-body">
        <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
        <p class="mb-0">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
      </div>
    </div>

  </div>
</div> -->

</div>
<div class="modal" id="add-schedule-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add new schedule</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" style="max-height:400px;overflow:auto">
                <form class="" id="frm-add-schedule">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group row no-gutters">
                                <label for="name" class="col-sm-4 col-form-label">Full Name:</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control form-control-user" id="name" placeholder="Ex. Adiene Carre Llanos Amigable" readonly="readonly">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="form-group row no-gutters">
                                <label for="name" class="col-sm-4 col-form-label">District:</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control form-control-user" id="district" placeholder="Ex. Barili 1" readonly="readonly">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="form-group row no-gutters">
                                <label for="contact_number" class="col-sm-4 col-form-label">Meridiem:</label>
                                <div class="col-sm-8">
                                    <select id="meridiem" name="meridiem" class="form-control form-control-user">
                                        <option value="AM">AM</option>
                                        <option value="PM">PM</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="col-sm-12">
                            <div class="form-group row no-gutters">
                                <label for="contact_number" class="col-sm-4 col-form-label">Reason:</label>
                                <div class="col-sm-8">
                                  <select id="title" name="title" class="form-control form-control-user">
                                        <option value="">Select a reason</option>
                                        <option value="Sukli">Sukli</option>
                                        <option value="New Loan">New Loan</option>
                                        <option value="Info Update">Info Update</option>
                                        <option value="Add Capital">Add Capital</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                            </div>
                        </div> -->
                        <div class="col-sm-12">
                            <div class="form-group row no-gutters">
                                <label for="contact_number" class="col-sm-4 col-form-label">Purpose:</label>
                                <div class="col-sm-8">
                                    <textarea id="title" name="title" class="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="row mt-2">
                        <div class="col-sm-12">
                            <button type="submit" class="btn btn-primary float-right">Submit</button>
                        </div>
                    </div> -->
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Save changes</button>
          </div>
          </form>
        </div>
    </div>
</div>
<div class="modal" id="update-schedule-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add new schedule</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" style="max-height:400px;overflow:auto">
                <form class="" id="frm-update-schedule">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group row no-gutters">
                                <label for="name" class="col-sm-4 col-form-label">Full Name:</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control form-control-user" id="name" placeholder="Ex. Adiene Carre Llanos Amigable" readonly="readonly">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="form-group row no-gutters">
                                <label for="name" class="col-sm-4 col-form-label">District:</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control form-control-user" id="district" placeholder="Ex. Barili 1" readonly="readonly">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="form-group row no-gutters">
                                <label for="contact_number" class="col-sm-4 col-form-label">Meridiem:</label>
                                <div class="col-sm-8">
                                    <select id="meridiem" name="meridiem" class="form-control form-control-user">
                                        <option value="AM">AM</option>
                                        <option value="PM">PM</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="col-sm-12">
                            <div class="form-group row no-gutters">
                                <label for="contact_number" class="col-sm-4 col-form-label">Reason:</label>
                                <div class="col-sm-8">
                                  <select id="title" name="title" class="form-control form-control-user">
                                        <option value="">Select a reason</option>
                                        <option value="Sukli">Sukli</option>
                                        <option value="New Loan">New Loan</option>
                                        <option value="Info Update">Info Update</option>
                                        <option value="Add Capital">Add Capital</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                            </div>
                        </div> -->
                        <div class="col-sm-12">
                            <div class="form-group row no-gutters">
                                <label for="contact_number" class="col-sm-4 col-form-label">Purpose:</label>
                                <div class="col-sm-8">
                                    <textarea id="title" name="title" class="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="row mt-2">
                        <div class="col-sm-12">
                            <button type="submit" class="btn btn-primary float-right">Submit</button>
                        </div>
                    </div> -->
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Save changes</button>
          </div>
          </form>
        </div>
    </div>
</div>
<!-- /.container-fluid -->