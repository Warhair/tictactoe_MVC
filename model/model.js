class Modell{
    #lista=[];
    #idex;
    #lepesszam;
    #adat
    #vege=[];
    constructor(){
        this.#adat="X";
        this.#lepesszam=0;
        this.#lista=[".",".",".",".",".",".",".",".","."];
        this.#vege=[".",".","."];
    }
    getAdat(){
        return this.#adat;
    }
    getVegeVanE(){
        this.vizszintesGyozelem();
        this.fuggolegesGyozelem();
        this.ferdeGyozelem();
        for (let index = 0; index < 3; index++) {
            console.log(this.#vege[index])
        if( this.#vege[index].indexOf("OOO")>-1){
            return "O nyert"
        }
        if(this.#vege[index].indexOf("XXX")>-1){
            return "X nyert"
        }
        if(this.#lepesszam === 9){
            return "Döntetlen"
        }

        return "Tovább";
    }
    console.log(this.#vege)
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
    vizszintesGyozelem(){
        let vEll="";
        for (let index = 0; index < 9; index++) {
           vEll+=this.#lista[index];
           if(index % 3 === 2){
            vEll+= "@";
           }
           vEll+= "@";

           console.log(vEll.indexOf("OOO"),vEll.indexOf("XXX"))
           this.#vege.push(vEll);
           console.log(vEll)
           return  this.#vege;
        }
    }
    fuggolegesGyozelem(){
        let vEll=this.#lista[0]+this.#lista[3]+this.#lista[6]+this.#lista[1]+this.#lista[4]+this.#lista[7]+this.#lista[2]+this.#lista[5]+this.#lista[8];
        this.#vege.push(vEll);
        console.log(vEll)
        return this.#vege;
    }
    ferdeGyozelem(){
        let vEll=this.#lista[0]+this.#lista[4]+this.#lista[8]+this.#lista[3]+this.#lista[4]+this.#lista[5];
        this.#vege.push(vEll);
        return this.#vege;
    }

}
export default Modell;