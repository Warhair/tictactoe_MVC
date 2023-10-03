class ElemView{
    #index
    constructor(szuloElem, index){
    this.szuloElem = szuloElem
    this.#index = index
    this.kattinthato=true
    this.#htmlOsszerak()
    this.elem=$(".elem:last-child")
    this.pElem=this.elem.children("p")
    this.elem.on("click",()=>{
        if(this.kattinthato){
            this.#esemenyTrigger("kivalaszt")
            this.kattinthato = false;
        }
       
    })
    }
    #htmlOsszerak(){
        let txt=""
            txt+=`
            <div class="elem col-sm-4">
            <p></p>
            </div>    
        `
        txt+=""
        
        this.szuloElem.append(txt);
    }
    getIndex(){
        return this.#index;
    }
    setErtek(jel){
        this.pElem.html(jel)
    }
    #esemenyTrigger(esemenyNev) {
        const esemenyem = new CustomEvent(esemenyNev,{detail:this});
        window.dispatchEvent(esemenyem);
    }
}
export default ElemView;