const reader = require("xlsx");

const file = reader.readFile("../../JobStatus.xlsx");
let data = [];
let rowCount = 0;
const sheets = file.SheetNames;

try {
  for (let i = 0; i < sheets.length; i++) {
    if (sheets[i] === "Sign-off") {
      const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
      temp.forEach((res) => {
        console.log(res.MPS);

        if (res.MPS === "Ready for Sign-off") data.push(res);
      });

      console.log(`Remote database updated on ${new Date()}`);
      console.log(data);
    }
  }
} catch (error) {
  console.log(`Error ${error} - ${new Date()}`);
}
