process.argv.slice(2, process.argv.length).forEach(element => {
    setTimeout(() => { console.log(element); }, element * 1000);
});