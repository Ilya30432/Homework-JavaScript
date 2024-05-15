class SuperMath {
    check(obj){
       const conf =  confirm("Хотите сделать дейстивие?");
        if(conf === true){
            let antwort = eval(`${obj.x} ${obj.znak} ${obj.y}`);
        alert(antwort)
        } else{
         this.input()
        }
    }
    input() {
        const x = +prompt("Для x")
        const y = +prompt("Для y")
        const znak = prompt("Для znak ")
        if(!isNaN(x) && !isNaN(y) && (znak === "-" || znak === "+" || znak === "*" || znak === "/" || znak === "%") ){
           this.check({x:x , y: y , znak: znak })
        } else{
        alert("Ошибка")
        this.check()
        }
    }
}

const math = new SuperMath()
math.check({x:12 , y: 7 , znak: "-" });