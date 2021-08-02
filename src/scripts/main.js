function main() {

    const global = "https://coronavirus-19-api.herokuapp.com/countries";
    const baseUrl = "https://covid19.mathdro.id/api";

    const  getConfirmed = () => {
        const ajax = new XMLHttpRequest();
        ajax.open('GET', `${baseUrl}/countries/indonesia/confirmed`, true);
        ajax.onreadystatechange = function(){
            if(this.readyState ===4 && this.status ===200){
                let data = JSON.parse(this.responseText);
                for (let i = 0; i < data.length; i++) {
                  document.getElementById('confirmed').innerHTML +=  `${data[i].confirmed}`;
               }
            }
        }
        ajax.send();
    }
    
    const  getActive = () => {
        const ajax = new XMLHttpRequest();
        ajax.open('GET', `${baseUrl}/countries/indonesia/confirmed`, true);
        ajax.onreadystatechange = function(){
            if(this.readyState ===4 && this.status ===200){
                let data = JSON.parse(this.responseText);
                for (let i = 0; i < data.length; i++) {
                  document.getElementById('active').innerHTML +=  `${data[i].active}`;
               }
            }
        }
        ajax.send();
    }

    const  getRecovered = () => {
        const ajax = new XMLHttpRequest();
        ajax.open('GET', `${baseUrl}/countries/indonesia/confirmed`, true);
        ajax.onreadystatechange = function(){
            if(this.readyState ===4 && this.status ===200){
                let data = JSON.parse(this.responseText);
                for (let i = 0; i < data.length; i++) {
                  document.getElementById('recovered').innerHTML +=  `${data[i].recovered}`;
               }
            }
        }
        ajax.send();
    }

    const  getDeaths = () => {
        const ajax = new XMLHttpRequest();
        ajax.open('GET', `${baseUrl}/countries/indonesia/confirmed`, true);
        ajax.onreadystatechange = function(){
            if(this.readyState ===4 && this.status ===200){
                let data = JSON.parse(this.responseText);
                for (let i = 0; i < data.length; i++) {
                  document.getElementById('deaths').innerHTML +=  `${data[i].deaths}`;
               }
            }
        }
        ajax.send();
    }

    const  getGlobal = () => {
        const ajax = new XMLHttpRequest();
        ajax.open('GET', `${global}`, true);
        ajax.onreadystatechange = function(){
            if(this.readyState ===4 && this.status ===200){
                let data = JSON.parse(this.responseText);
                for (let i = 0; i < data.length; i++) {
                  document.getElementById('tblGlobal').innerHTML +=  ` 
                    <tr>
                        <td>${i+1}</td>
                        <td>${data[i].country}</td>
                        <td>${data[i].cases}</td>
                        <td>${data[i].recovered}</td>
                        <td>${data[i].deaths}</td>
                    </tr>`;
               }
            }
        }
        ajax.send();
    }

    getDeaths();
    getRecovered();
    getActive();
    getConfirmed();
    getGlobal();
}

export default main;