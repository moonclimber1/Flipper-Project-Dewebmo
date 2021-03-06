export class HighscoreList{

    constructor(parent){

        // Create DOM-Element
        this.elem = document.createElement('DIV');
        this.elem.classList.add('highscore-list');

        // Append DOM-Element
        parent.appendChild(this.elem);

        this.addScore()
    }


    async addScore(name, score){
        function  renderHighScoreList(highscore){
            let out ="<p>High<br>Scores</p> <ol>";
            highscore.forEach((s) => out += "<li>" + s.name + "<br>" + s.score + " Points</li>");
            out += "</ol>";
            return out;
        }

        const sampleJSON = [{"score":99,"name":"Jonas"},{"score":88,"name":"Blub"},{"score":77,"name":"Chiara"},{"score":66,"name":"Salome"},{"score":55,"name":"Kevin"}];
        this.elem.innerHTML = renderHighScoreList(sampleJSON)


        
        // let url = ''
        // if(name && score){
        //     url = "http://127.0.0.1:8080/?score=" + score + "&name=" + name;
        // }else{
        //     url = "http://127.0.0.1:8080/"
        // }

        // fetch(url)
        // .then(response => response.json())
        // .then(data => {console.log("Data: ", data); this.elem.innerHTML = renderHighScoreList(data)})
        // .catch(error => this.elem.innerHTML = "Error: "+error);
    }
}