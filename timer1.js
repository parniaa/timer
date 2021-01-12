const args = process.argv;
let result = args.slice(2,args.length);
// console.log(result);
for (const [index, char] of result.entries()) {
  setTimeout(() => {
    console.log(`${char} second timer`);
  }, 1000 * char);
}
