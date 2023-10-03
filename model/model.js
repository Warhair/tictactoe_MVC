class Modell{
    #lista=[];
    #idex;
    #lepesszam;
    #adat
    constructor(){
        this.#adat="X";
        this.#lepesszam=0;
        this.#lista=[".",".",".",".",".",".",".",".","."];
       
    }
    getAdat(){
        return this.#adat;
    }
    getVegeVanE(){
        let vEll = this.#vizszintesGyozelem();
        if(vEll.indexOf("OOO")>-1){
            return "O nyert"
        }
        if(vEll.indexOf("XXX")>-1){
            return "X nyert"
        }
        if(this.#lepesszam === 9){
            return "Döntetlen"
        }
        return "Tovább";
    }
    allapotAllitas(index){
      
        if(this.#adat == "X"){
            this.#adat ="O"
            console.log(this.#adat)
        }
        else {
            this.#adat = "X"
            console.log(this.#adat)
        }
        this.#lista[index]=this.#adat;
        console.log(this.#lista)
        this.#lepesszam++;
    }
    #vizszintesGyozelem(){
        let vEll="";
        for (let index = 0; index < 9; index++) {
           vEll+=this.#lista[index];
           if(index % 3 === 2){
            vEll+= "@";
           }
           vEll+= "@";

           console.log(vEll.indexOf("OOO"),vEll.indexOf("XXX"))
           return vEll
        }
    }

}
export default Modell;