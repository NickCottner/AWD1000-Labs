let region1 = [1540, 1130, 1580, 1105];
let region2 = [2010, 1168, 2305, 4102];
let region3 = [2450, 1847, 2710, 2391];
let region4 = [1845, 1491, 1284, 1575];
let region5 = [2120, 1767, 1599, 3888];

//Sums
let q1Sum = 0;
let q2Sum = 0;
let q3Sum = 0;
let q4Sum = 0;
let region1Sum = 0;
let region2Sum = 0;
let region3Sum = 0;
let region4Sum = 0;
let region5Sum = 0;
let total = 0;

//Calulating quarter sums
q1Sum = region1[0] + region2[0] + region3[0] + region4[0] + region5[0];

q2Sum = region1[1] + region2[1] + region3[1] + region4[1] + region5[1];

q3Sum = region1[2] + region2[2] + region3[2] + region4[2] + region5[2];

q4Sum = region1[3] + region2[3] + region3[3] + region4[3] + region5[3];

document.write(`<h2>Sales By Quarter</h2>`);
document.write(`Q1: $${q1Sum.toFixed(2)}<br> Q2: $${q2Sum.toFixed(2)}<br> Q3: $${q3Sum.toFixed(2)}<br> Q4: $${q4Sum.toFixed(2)}<br><br>`);

//Calculate Regional Sums
for(let i = 0; i < 4; i++)
{
    region1Sum = region1Sum + region1[i];
    region2Sum = region2Sum + region2[i];
    region3Sum = region3Sum + region3[i];
    region4Sum = region4Sum + region4[i];
    region5Sum = region5Sum + region5[i]; 
}
document.write(`<h2>Sales by Region</h2>`);
document.write(`Region 1: $${region1Sum.toFixed(2)}<br> Region 2: $${region2Sum.toFixed(2)}<br> Region 3: $${region3Sum.toFixed(2)}<br> Region 4: $${region4Sum.toFixed(2)}<br> Region 5: $${region5Sum.toFixed(2)}<br><br>`);

//Calculate Total Sales
total = region1Sum + region2Sum + region3Sum + region4Sum + region5Sum;
document.write(`<h2>Total Sales</h2>`);
document.write(`Total: $${total.toFixed(2)}`);


