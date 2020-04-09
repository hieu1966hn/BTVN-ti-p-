//bai 1:

let n = Number(prompt(alert(`nhap vao so de tinh: `)));
let tongSoChan = 0;
let tongSoLe = 0;
console.log(`so da nhap la: `+n);

for(let i =1;i<=n;i++){
    if(i%2==0){
       tongSoChan+=i;
    }
}
console.log(`tong các số chan tu 1->n = `+ tongSoChan);

for(i=1;i<=n;i++){
    if(i%2 !=0){
    tongSoLe += i;
    }
}
console.log(`tong cac so le tu 1->n = `+tongSoLe);

