<div class="container">

    <div class="row mt-3">
        <div class="col-md-6">

            <div class="card">
                <div class="card-header">
                    Form Update Data Barang
                </div>

                <div class="card-body shadow">

                    <!-- start -->
                    <form action="" method="post">
                        <input type="hidden" name="id" value="<?= $products['id']; ?>">
                        <div class="form-group">
                            <label for="nama_barang">Nama Barang</label>
                            <input type="text" class="form-control" id="nama_barang" name="nama_barang">
                            <!-- validations -->
                            <small class="form-text text-danger"><?= form_error('nama_barang'); ?></small>
                        </div>
                        <div class="form-group">
                            <label for="harga_beli">Harga Beli</label>
                            <input type="text" class="form-control" id="harga_beli" name="harga_beli">
                            <!-- validations -->
                            <small class="form-text text-danger"><?= form_error('harga_beli'); ?></small>
                        </div>
                        <div class="form-group">
                            <label for="harga_jual">Harga Jual</label>
                            <input type="text" class="form-control" id="harga_jual" name="harga_jual">
                            <!-- validations -->
                            <small class="form-text text-danger"><?= form_error('harga_jual'); ?></small>
                        </div>
                        <div class="form-group">
                            <label for="stok">Stok Barang</label>
                            <input type="text" class="form-control" id="stok" name="stok">
                            <!-- validations -->
                            <small class="form-text text-danger"><?= form_error('stok'); ?></small>
                        </div>
                        <div class="form-group">
                            <label for="gambar">Gambar</label>
                            <input type="text" class="form-control" id="gambar" name="gambar">
                            <!-- validations -->
                            <small class="form-text text-danger"><?= form_error('gambar'); ?></small>
                        </div>
                        <button type="submit" name="update_product" class="btn btn-primary float-right">Update</button>
                    </form>
                </div>
            </div>

        </div>
    </div>

</div>