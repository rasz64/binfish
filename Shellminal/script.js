let key = document.getElementById("input");
key.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    run();
  }
});

let ip = [
    '192.168.45.23',
    '203.0.113.56',
    '45.67.89.123',
    '172.16.78.9',
    '10.45.67.89',
    '198.51.100.25',
    '220.13.145.78',
    '156.42.89.200',
    '37.98.112.150',
    '154.68.73.19',
    '190.34.22.89',
    '77.123.45.67',
    '66.249.79.121',
    '102.54.199.2',
    '11.23.89.200',
    '88.77.66.55',
    '205.176.48.31',
    '149.202.33.44',
    '212.150.98.72',
    '91.45.33.18',
    '107.190.123.98',
    '203.45.77.109',
    '122.157.45.231',
    '192.210.155.66',
    '176.58.100.23',
    '65.32.44.155',
    '98.100.200.99',
    '158.75.34.123',
    '193.200.145.50',
    '179.67.190.210',
    '202.123.77.188',
    '101.56.33.150',
    '55.234.78.1',
    '134.76.198.220',
    '88.144.233.77',
    '190.56.23.80',
    '103.29.111.40',
    '178.56.78.201',
    '159.99.44.188',
    '185.90.32.76',
    '210.45.60.172',
    '45.120.99.140',
    '92.34.78.23',
    '121.202.56.78',
    '185.44.203.190',
    '137.89.45.11',
    '212.36.78.45',
    '201.56.77.101',
    '108.45.123.200',
    '182.123.67.99',
    '120.98.100.200',
    '209.190.45.88',
    '157.66.44.172',
    '67.23.198.101',
    '143.200.190.18',
    '94.56.189.77',
    '104.22.45.39',
    '221.89.56.128',
    '192.245.99.12',
    '88.204.178.33',
    '99.47.203.55',
    '123.159.78.220',
    '177.34.222.99',
    '208.110.66.11',
    '150.99.44.98',
    '200.77.32.189',
    '55.200.78.101',
    '196.122.44.50',
    '83.120.190.65',
    '220.145.167.209',
    '195.123.45.130',
    '170.220.89.56',
    '110.67.190.77',
    '144.250.44.20',
    '178.99.56.78',
    '94.67.190.34',
    '209.134.56.11',
    '183.90.44.199',
    '217.56.89.75',
    '202.120.77.88',
    '122.190.44.37',
    '143.76.55.200',
    '198.75.123.88',
    '176.55.90.102',
    '222.134.33.99',
    '169.45.200.190',
    '103.56.78.120',
    '210.88.77.99',
    '154.67.99.222',
    '192.11.45.78',
    '99.230.89.56',
    '136.78.200.88',
    '67.200.56.190',
    '183.145.44.12',
    '219.99.88.77',
    '144.90.56.102',
    '178.123.200.50',
    '203.190.78.66',
    '195.88.55.222',
    '111.77.90.56',
    '212.145.66.200'
]

let randomIP = ip[Math.floor(Math.random() * ip.length)];
let ipMsg = "IPv4 Address " + randomIP;

function run() {
    input = document.getElementById("input").value;
    if(input === "list") {
        document.getElementById("input").value = "";
        document.getElementById("text").innerHTML = "Avalible commands:<br><br>cls - clears the screen<br>ipconfig - gives you your IPv4 address<br>vm - opens a virtual machine off the terminal<br>exit- exits the terminal<br>dir - lists the directories<br>boot dir - displays the avalible Operating Systems you can install<br>boot \"operating-system\" - boots the chosen Operating System";
    } else if(input === "cls") {
        document.getElementById("input").value = "";
        document.getElementById("text").innerHTML = "";
    } else if(input === "ipconfig") {
        document.getElementById("input").value = "";
        document.getElementById("text").innerHTML = ipMsg;
    } else if(input === "vm") {
        document.getElementById("input").value = "";
        window.open("index.html", "_blank", "width=800,height=600");
    } else if(input === "exit") {
        window.close();
        location.href = "https://google.com";
    } else if(input === "dir") {
        document.getElementById("input").value = "";
        document.getElementById("text").innerHTML = "Directories of C Drive | C:\\Users\\root><br><br>Documents<br>Pictures";
    } else if(input === "boot dir") {
        document.getElementById("input").value = "";
        document.getElementById("text").innerHTML = "List of Operating Systems you can install:<br><br>unixium<br><br>To boot, type boot \"operating-system\"";
    } else if(input === "boot unixium") {
        document.getElementById("input").value = "";
        document.getElementById("text").innerHTML = "Booting";
        location.href = "unixiumBoot.html";
    } else {
        document.getElementById("input").value = "";
        document.getElementById("text").innerHTML = "Error: that is not a command.";
    }
}
