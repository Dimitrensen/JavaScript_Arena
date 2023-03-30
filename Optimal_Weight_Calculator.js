//optimal weight for men and women. Equal to their height for men (minus 100), -5 kilos of their height for women

let gender = prompt('What is your sex? (m/f)');

if (gender !== "m" && gender !== "f") {
    console.log("Invalid parameter");
    process.exit(0);
}