const sentence = "hello there from lighthouse labs\n";

let delay = 0
for (const val of sentence){
  setTimeout(() => { 
    process.stdout.write(val);
  }, delay);
  delay += 50
}
