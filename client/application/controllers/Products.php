<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Products extends CI_Controller {

    public function __construct()
    {
        parent::__construct();

            $this->load->library('form_validation', 'curl');
    }
   
    public function index() {
        $api_url = "http://3.222.207.32:5050/api/test_nutech/product/get_all";
        $products_json = file_get_contents($api_url);
        $products = json_decode($products_json, true);
        
        $data['products'] = $products['data']['products_details'];
        
        // search
        // if ($this->input->post('keyword')) {
        //     $data['products'] = $this->Mahasiswa_model->cariDataMahasiswa();
        // }
        
        // get title
        $data['title']= 'Inventori Barang';

        $this->load->view('templates/header', $data);
        $this->load->view('products/index', $data);
        $this->load->view('templates/footer');
    }

    public function add_product()
    {
        $data['title']= 'Tambah Barang';

        // Set rules untuk validasi form input
        $this->form_validation->set_rules('nama_barang', 'Nama Barang', 'required');
        $this->form_validation->set_rules('harga_beli', 'Harga Beli', 'required|numeric');
        $this->form_validation->set_rules('harga_jual', 'Harga Jual', 'required|numeric');
        $this->form_validation->set_rules('stok', 'Stok Barang', 'required|numeric');
        $this->form_validation->set_rules('gambar', 'Gambar');

        // jika form tidak sesuai
        if ($this->form_validation->run() == false) {
            $this->load->view('templates/header', $data);
            $this->load->view('products/add_product');
            $this->load->view('templates/footer');
        } else {
                        // Ambil data dari form input
                        $nama_barang = $this->input->post('nama_barang');
                        $harga_beli = $this->input->post('harga_beli');
                        $harga_jual = $this->input->post('harga_jual');
                        $stok = $this->input->post('stok');
                        $gambar = $this->input->post('gambar');
    
                        // Set URL API dan data yang akan dikirim ke API
                        $api_url = "http://3.222.207.32:5050/api/test_nutech/product/add";
                        $data = array(
                            'nama_barang' => $nama_barang,
                            'harga_beli' => $harga_beli,
                            'harga_jual' => $harga_jual,
                            'stok' => $stok,
                            'gambar' => $gambar
                        );

        // Jika form input telah diisi dengan benar, lakukan proses simpan data ke API
                        // Inisialisasi CURL
                        $ch = curl_init();
                
                        // Set opsi CURL
                        curl_setopt($ch, CURLOPT_URL, $api_url);
                        curl_setopt($ch, CURLOPT_POST, 1);
                        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
                        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                
                        // Eksekusi CURL
                        $result = curl_exec($ch);
                        // Tutup CURL
                        curl_close($ch);

                        $response = json_decode($result, true);
                             if ($response['status_text'] == 'OK') {
                                $this->session->set_flashdata('flash', 'ditambahkan!');
                                redirect('products');
                };
        };
    }

        
    public function update_product($id)
    {
        $data['title']= 'Update Barang';
        
        $api_url_get = "http://3.222.207.32:5050/api/test_nutech/product/{$id}";
        $products_json = file_get_contents($api_url_get);
        $products = json_decode($products_json, true);
        
        $data['products'] = $products['data']['products_details'];

        // Set rules untuk validasi form input
        $this->form_validation->set_rules('nama_barang', 'Nama Barang', 'required');
        $this->form_validation->set_rules('harga_beli', 'Harga Beli', 'required|numeric');
        $this->form_validation->set_rules('harga_jual', 'Harga Jual', 'required|numeric');
        $this->form_validation->set_rules('stok', 'Stok Barang', 'required|numeric');
        $this->form_validation->set_rules('gambar', 'Gambar');

        // jika form tidak sesuai
        if ($this->form_validation->run() == false) {
            $this->load->view('templates/header', $data);
            $this->load->view('products/update_product', $data);
            $this->load->view('templates/footer');
        } else {
                        // Ambil data dari form input
                        //$id = $this->input->post('id');
                        $nama_barang = $this->input->post('nama_barang');
                        $harga_beli = $this->input->post('harga_beli');
                        $harga_jual = $this->input->post('harga_jual');
                        $stok = $this->input->post('stok');
                        $gambar = $this->input->post('gambar');
    
                        // Set URL API dan data yang akan dikirim ke API
                        $api_url = "http://3.222.207.32:5050/api/test_nutech/product/update/{$id}";
                        $data = array(
                            'nama_barang' => $nama_barang,
                            'harga_beli' => $harga_beli,
                            'harga_jual' => $harga_jual,
                            'stok' => $stok,
                            'gambar' => $gambar
                        );

        // Jika form input telah diisi dengan benar, lakukan proses simpan data ke API
                        // Inisialisasi CURL
                        $ch = curl_init();
                
                        // Set opsi CURL
                        curl_setopt($ch, CURLOPT_URL, $api_url);
                        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
                        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
                        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                        
                        // Eksekusi CURL
                        $result = curl_exec($ch);
                        
                        // Tutup CURL
                        curl_close($ch);
                        
                        $response = json_decode($result, true);
                             if ($response['status_text'] == 'OK') {
                                $this->session->set_flashdata('flash', 'diupdate!');
                                redirect('products');
                };
        };
    }
    

        public function delete($id)
            {
                // Set URL endpoint API dan id produk yang ingin dihapus
                $api_url = "http://3.222.207.32:5050/api/test_nutech/product/delete/{$id}";

                // Buat koneksi curl
                $ch = curl_init();

                // Set opsi curl untuk mengirim permintaan HTTP DELETE
                curl_setopt($ch, CURLOPT_URL, $api_url);
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");

                // Jalankan curl dan tangkap respon
                $response = curl_exec($ch);

                // Tutup koneksi curl
                curl_close($ch);

                // Redirect ke halaman daftar produk
                $this->session->set_flashdata('flash', 'dihapus!');
                redirect('products');
            }
    };