class Hero {

    modeAtack;

    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
        this.modeAtack = " "

        if(this.type === "mago"){
            this.modeAtack = "magia"
        }else if(this.type === "guerreiro"){
            this.modeAtack = "espada"
        }else if(this.type === "monge"){
            this.modeAtack = "artes marciais"
        }else if(this.type === "ninja"){
            this.modeAtack = "shuriken"
        }
    }

        
    atack(){
        console.log(" ")
        console.log(`O ${this.type} atacou usando ${this.modeAtack}!`)
    }
}



let mago = new Hero("Ronaldo", 17, "mago")
let guerreiro = new Hero("Manolo", 21, "guerreiro")
let ninja = new Hero("Amanda", 15, "ninja")
let monge = new Hero("Isadora", 23, "monge")

console.log(" ")

mago.atack()
guerreiro.atack()
ninja.atack()
monge.atack()

console.log(" ")