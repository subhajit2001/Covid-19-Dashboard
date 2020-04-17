const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://api.covid19india.org/data.json', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {

    var node = document.createElement("h3");
    sub.description4 = data.statewise[0].lastupdatedtime
    var textnode = document.createTextNode(`${sub.description4}`);
    node.appendChild(textnode);
    document.getElementById("glowingbutton").appendChild(node);


    var node = document.createElement("h2");
    sub.description4 = data.statewise[0].confirmed
    sub.description8 = data.statewise[0].deltaconfirmed
    var textnode = document.createTextNode(`${sub.description4}`+`\uD83D\uDD3A`+`${sub.description8}`);
    node.appendChild(textnode);
    document.getElementById("cp").appendChild(node);

    var node = document.createElement("h2");
    sub.description4 = data.statewise[0].active
    var textnode = document.createTextNode(`${sub.description4}`);
    node.appendChild(textnode);
    document.getElementById("ta").appendChild(node);

    var node = document.createElement("h2");
    sub.description4 = data.statewise[0].deaths
    sub.description8 = data.statewise[0].deltadeaths
    var textnode = document.createTextNode(`${sub.description4}`+`\uD83D\uDD3A`+`${sub.description8}`);
    node.appendChild(textnode);
    document.getElementById("td").appendChild(node);

    var node = document.createElement("h2");
    sub.description4 = data.statewise[0].recovered
    sub.description8 = data.statewise[0].deltarecovered
    var charac = `\u25b2`;
    var textnode = document.createTextNode(`${sub.description4}`+charac+`${sub.description8}`);
    node.appendChild(textnode);
    document.getElementById("tr").appendChild(node);


     data.statewise.slice(1,38).forEach(movie => {

      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.state

      const p = document.createElement('p')
			var newline = "\r\n";
			movie.description = movie.active
			movie.description1 = movie.confirmed
      movie.description4 = movie.deltaconfirmed
			movie.description2 = movie.deaths
      movie.description5 = movie.deltadeaths
			movie.description3 = movie.recovered
      movie.description6 = movie.deltarecovered
      p.textContent = `No. of Confirmed Positive Cases: ${movie.description1}\uD83D\uDD3A${movie.description4}`+newline+
			`No. of Active Cases: ${movie.description}`+newline+`No. of Deaths: ${movie.description2}\uD83D\uDD3A${movie.description5}`+newline+
			`No. of Recovered Persons: ${movie.description3}\u25b2${movie.description6}`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()
