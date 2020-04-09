
//bai 3:

function Snt(a){
    if(a<=1)
    return 0;
    let dem =0;
    for(let i =2;i<a;i++){
        if(a%i==0){
         dem ++;
        }
    }
    if(dem ==0 ){
        return 1;
    }
    else return 0;
 
 }
 
let n = prompt(`nhap vao so n:`);
console.log(`cac so nguyen to < = n la :`)
for(let i =1;i<=n;i++){
    if(Snt(i)==1)
        console.log(i+` `);
        
}

