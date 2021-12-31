class ementa {
    constructor( Nome_do_prato,Preco,Regime,Ingredientes,Cod,catprato,tipo){
        this.Nome_do_prato=Nome_do_prato;
        this.Preco=Preco;
        this.Regime=Regime;
        this.Ingredientes=Ingredientes;
        this.Cod=Cod;
        this.catprato=catprato;
        this.tipo=tipo;
    };
    returnall() {
        return{
            Nome_do_prato:this.Nome_do_prato,
            Preco:this.Preco,
            Regime:this.Regime,
            Ingredientes:this.Ingredientes,
            Cod:this.Cod,
            catprato:this.catprato,
            tipo:this.tipo
        }
    }
}
module.exports.ementa=ementa;