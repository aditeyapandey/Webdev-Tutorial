var randomQuotes = [
  [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Nelson Mandela"
  ],
  [
    "The way to get started is to quit talking and begin doing.",
    "Walt Disney"
  ],
  [
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",
    "Steve Jobs"
  ],  
  [
    "Whoever is happy will make others happy too.",
    "Anne Frank"
  ]
];

function handleClick() {

  var randomIndex = Math.floor(Math.random() * randomQuotes.length);
  console.log("Index:", randomIndex)

  var element = document.getElementById("quote");
  element.innerHTML = "``" + randomQuotes[randomIndex][0] + "''";
  var element = document.getElementById("quoteby");
  element.innerHTML =  randomQuotes[randomIndex][1]

}
