

let a =''
let b =''

let soma=(valo1=0,valo2=0)=>{
    valo1=String(valo1).replace(",",".")
    valo2=String(valo2).replace(",",".")
    
    let soma1=Number(valo1)
    let soma2=Number(valo2)
    let res=soma1+soma2
    return res
}

let promese= new Promise((ok,erro)=>{
    if(soma(a,b)>200000000000000000000){
        erro( BigInt(soma(a,b)))
        }else{
            ok( soma(a,b))
        }
});

promese.then((i)=>{console.log(i)})
promese.catch((i)=>{console.log(i)})

