class TentangCorona extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: "open"});
        this.render();
    }


    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <section class="py-4" id="tentang">
            <div class="container">
                <h1 class="display-6 mb-4">Tentang Corona</h1>
            <div class="row">
                <div class="col-md-6">
                    <div class="card text-white bg-primary mb-3">
                        <a href="https://www.unicef.org/indonesia/id/coronavirus" style="text-decoration: none; color: aliceblue;">
                            <div class="card-body">
                                <h6 class="card-title mb-4">Novel coronavirus (COVID-19): Hal-hal yang perlu diketahui</h6>
                                <small class="card-text">unicef indonesia</small>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card text-white bg-warning mb-3">
                        <a href="https://www.kompas.com/tren/read/2020/03/03/183500265/infografik-daftar-100-rumah-sakit-rujukan-penanganan-virus-corona" style="text-decoration: none; color: aliceblue;">
                            <div class="card-body">
                                <h6 class="card-title mb-4">Daftar 100 Rumah Sakit Rujukan Penanganan Virus Corona</h6>
                                <small class="card-text">unicef indonesia</small>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card text-white bg-danger mb-3">
                        <a href="https://infeksiemerging.kemkes.go.id/" style="text-decoration: none; color: aliceblue;">
                            <div class="card-body">
                                <h6 class="card-title mb-4">Media Informasi Resmi Penyakit Infeksi</h6>
                                <small class="card-text">Kementrian Kesehatan</small>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card text-white bg-success mb-3">
                        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" style="text-decoration: none; color: aliceblue;">
                            <div class="card-body">
                                <h6 class="card-title mb-4">Coronavirus disease (COVID-19) advice for the public</h6>
                                <small class="card-text">WHO</small>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </section>
        `;
    }
}


customElements.define("tentang-corona", TentangCorona);
