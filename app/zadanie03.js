let a = process.argv[2];
let b = process.argv[3];

function add(a, b) {
    let result = Number(a) + Number(b);
    console.log(result);
}

add(a, b);