class ContactMe extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: "open"});
        this.render();
    }


    render() {
        this.shadowRoot.innerHTML = `
        <style>
            .teks{
                 font-size: 20px;
                 line-height: 50px;
                 color: #f1f2f3;font-weight: 600;
                 margin: 0;
                 margin-left: 20px
            }
        </style>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <section class="py-1">
            <div class="container">
                <h3 class="display-6 mb-3"> Ikuti saya di</h3>
                <div class="row mb-5">
                    <div class="col-md-4 mb-3">
                        <a href="https://www.instagram.com/andripriyandi" target="_blank" style="text-decoration: none;">
                            <div class="card" style="background: #ff1493; border-radius: 8px;">
                                <h3 class="teks"> Instagram</h3>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-4 mb-3">
                        <a href="https://twitter.com/andripriyandi" target="_blank" style="text-decoration: none;">
                            <div class="card" style="background: #00acee; border-radius: 8px;">
                                <h3 class="teks"> Twitter</h3>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-4 mb-3">
                        <a href="https://web.facebook.com/andri.priandi.3" target="_blank" style="text-decoration: none;">
                            <div class="card" style="background: #3b5596; border-radius: 8px;">
                                <h3 class="teks"> Facebook</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}


customElements.define("contact-me", ContactMe);
