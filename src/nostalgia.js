// nostalgia.js

const text = [
    "Exx shunday zamonlar o'tib kettiya...",
    "Qaysi zamonlar deysanmi?",
    "Bir hafta oldingi, kechagi kunlar...",
    "O'z yerimizda beg'am, betashvish yashab yurgan edik.",
    "Ha, o'sha kunlarni qadriga yetmapmiz..."
  ];
  
  // Harflarni bitta-bitta chiqaruvchi funksiya
  function typeLine(line, delay = 50) {
    return new Promise((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        process.stdout.write(line[i]);
        i++;
        if (i === line.length) {
          clearInterval(interval);
          process.stdout.write("\n");
          resolve();
        }
      }, delay);
    });
  }
  
  async function run() {
    for (const line of text) {
      await typeLine(line);
      await new Promise(r => setTimeout(r, 600)); // har satrdan keyin kutish
    }
  }
  
  run();
  