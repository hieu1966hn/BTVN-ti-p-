
//bai 4:
let n = Number(prompt('Enter a number: '));
let a1 = 1, a2 = 1;

if (n == 1 || n == 2) {
    console.log(1);
} else {
    let i = 3, a;
    while (i <= n) {
        a = a1 + a2;
        a1 = a2; 
        a2 = a;
        i++;
    }
    console.log(`Phần tử thứ ${n} của dãy Fibonacci là: ${a}`);
}


