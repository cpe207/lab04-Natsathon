function primeNumber(a) {
  if (a <= 1) {
    return "NO";
}
if (a === 2) {
    return "YES";
}
if (a % 2 === 0) {
    return "NO";
}
for (var i = 3; i <= Math.sqrt(a); i += 2) {
    if (a % i === 0) {
        return "NO";
    }
}
return "YES";
}
const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;

// ชื่อ-สกุล: ณัฐสธน พันธุ์อำพัน, รหัสนักศึกษา: 660612145