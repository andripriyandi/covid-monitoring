class FootApp extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
           * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
           }
           :host {
              display: block;
              width: 100%;
              background-color: #343a40;
              color: white;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           }
           h5 {
               padding: 16px;
               color: #6c757d;
               text-align: center;
           }
       </style>
       <h5>Copyright &copy; Andri Priyandi</h5>
        `;
    }
}

customElements.define("foot-app", FootApp);