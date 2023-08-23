const scale = 0.01; // 0.01 recommended, the smaller you set this number, the longer it will take to run, but the search will be more accurate
const date = "2023-08"; // YYYY-MM, make sure you customize this
const key = ""; // you need a Google Maps API key to use this script

// bottom left
var lat1 = 0; // latitude
var long1 = 0; // longitude
// top right
const lat2 = 0;
const long2 = 0;

if (!key) {
  console.log("You need a Google Maps API key!");
  process.exit();
} else if (!scale || !date || lat1 === 0 || long1 === 0 || lat2 === 0 || long2 === 0) {
  console.log("You are missing required search data!");
  process.exit();
}

const initialLat1 = lat1;

console.log("Starting check...");
const timer = setInterval(() => {
//console.log(lat1.toString() + ', ' + long1.toString());
check(lat1, long1);
if (lat1 < lat2) {
  lat1 += scale;
} else if (lat1 >= lat2 && long1 < long2) {
  long1 += scale;
  lat1 = initialLat1;
} else {
  console.log("done");
  clearInterval(timer);
}
}, 500); // adjust this to speed up the script, but beware of rate limiting

async function check(a, b) {
  const req = await fetch(`https://maps.googleapis.com/maps/api/streetview/metadata?location=${a+','+b}&key=${key}`);
  const res = await req.json();
  //console.log(await res);
  if (await res.date === date) {
    console.log(await res);
  }
}

// Disclaimer:
// I, TurtleCode84, the creator of this script, am not responsible for the use of this open-source software for malicious or illegal purposes.
// This program is not meant to be used as a doxxing tool or as a means to obtain another person's personal information without their consent.
// By running this script, you take full responsibility for any repercussions and consequences of illegitimate activity you may automate with this tool.
// Seriously, please don't use this to dox anyone.
