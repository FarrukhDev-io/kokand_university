

const text = [
    "Exx shunday zamonlar o'tib kettiya...",
    "Qaysi zamonlar?",
    "Misol uchun bir hafta oldingi, kechagi kunlar...",
    "O'z yerimizda beg'am, betashvish yashab yurgandik.",
    "Haa, o'sha kunlarni, qadriga yetmapmiz...",
  ];
  
  function typeLine(line, delay = 55) {
    return new Promise((resolve) => {
      let i = 0;
  
      const printNext = () => {
        if (i >= line.length) {
          process.stdout.write("\n");
          resolve();
          return;
        }
  
        const char = line[i];
        process.stdout.write(char);
        i++;
        const extraDelay = char === "," ? 500 : 0;
  
        setTimeout(printNext, delay + extraDelay);
      };
  
      printNext();
    });
  }
  
  async function run() {
    for (const line of text) {
      await typeLine(line);
      await new Promise((r) => setTimeout(r, 600));
    }
  }
  
  run();
  