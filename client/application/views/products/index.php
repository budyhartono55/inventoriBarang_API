<div class="container">

    <!-- flasher -->
    <?php if($this->session->flashdata()) : ?>
    <div class="row mt-3">
        <div class="col-md-6">
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                Data barang <strong>berhasil</strong> <?= $this->session->flashdata('flash'); ?>.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    </div>
    <?php endif; ?>

    <!-- AddProduct -->
    <div class="row mt-3">
        <div class="col-md-6">
            <a href="<?= base_url() ?>products/add_product" class="btn btn-primary">Tambah Data barang</a>
        </div>

    </div>

    <!-- SEARCH -->
    <div class="row mt-3">
        <div class="col-md-6">
            <form action="" method="post">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Cari data barang..." name="keyword">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">Cari</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <hr>
    <!-- deleteMahasiswa -->
    <div class="row mt-3">
        <div class="col-md-6">
            <h3>Daftar Produk</h3>

            <!-- check Mahasiswa -->
            <?php if(empty($products)) : ?>
            <div class="alert alert-danger" role="alert">
                Data barang tidak ditemukan!
            </div>
            <?php endif ?>

            <ul class="list-group">
                <?php foreach ($products as $prd) :?>
                <li class="list-group-item">
                    <?= $prd['nama_barang']; ?>
                    <a href="<?= base_url(); ?>products/delete/<?= $prd['id']; ?>"
                        class="badge badge-danger float-right"
                        onclick="return confirm('Yakin? Data tidak dapat dikembalikan!');">Hapus</a>
                    <a href="<?= base_url(); ?>products/update_product/<?= $prd['id']; ?>"
                        class="badge badge-success float-right">Ubah</a>
                    <!-- <a href="<?= base_url(); ?>mahasiswa/detail/<?= $prd['id']; ?>"
                        class="badge badge-primary float-right">Detail</a> -->
                </li>
                <?php endforeach ?>
            </ul>
        </div>
    </div>

</div>