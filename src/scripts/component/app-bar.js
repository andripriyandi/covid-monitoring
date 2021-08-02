class AppBar extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: "open"});
        this.render();
    }


    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <div class="container">
            <a class="navbar-brand" href="#">Covid-19</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Beranda</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#tentang">Tentang</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#sebaran">Sebaran</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        `;
    }
}


customElements.define("app-bar", AppBar);
