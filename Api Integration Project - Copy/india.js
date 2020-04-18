    var result = [];
    result.push(['State', 'Confirmed']);

    var request = new XMLHttpRequest()
    request.open('GET', 'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise', true)
    request.onload = function() {
      // Begin accessing JSON data here
      var data1 = JSON.parse(this.response)
      if (request.status >= 200 && request.status < 400) {

        data1.data.statewise.forEach(movie => {
         result.push([movie['state'],movie['confirmed']]);
       })
        var bubble_map = new Datamap({
            element: document.getElementById('india'),
            scope: 'india',
            geographyConfig: {
                popupOnHover: true,
                highlightOnHover: true,
                borderColor: '#444',
                borderWidth: 0.5,
                dataUrl: 'https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json'
                //dataJson: topoJsonData
            },
            fills: {
                'MAJOR': '#ff637b',
                'MEDIUM': '#0fa0fa',
                'MINOR': '#bada55',
                defaultFill: '#40f76b'
            },
            data: {

            },
            setProjection: function (element) {
                var projection = d3.geo.mercator()
                    .center([78.9629, 23.5937]) // always in [East Latitude, North Longitude]
                    .scale(1000);
                var path = d3.geo.path().projection(projection);
                return { path: path, projection: projection };
            }
        });
        console.log(result);
        let bubbles = [
            {
                centered: "MH",
                fillKey: "MAJOR",
                radius: (result[1][1]/50),
                state: "Maharashtra"
            },
            {
                centered: "DL",
                fillKey: "MAJOR",
                radius: (result[2][1]/50),
                state: "Delhi"
            },
            {
                centered: "TN",
                fillKey: "MAJOR",
                radius: (result[3][1]/50),
                state: "Tamil Nadu"
            },
            {
                centered: "MP",
                fillKey: "MAJOR",
                radius: (result[4][1]/50),
                state: "Madhya Pradesh"
            },
            {
                centered: "RJ",
                fillKey: "MAJOR",
                radius: (result[5][1]/50),
                state: "Rajasthan"
            },
            {
                centered: "GJ",
                fillKey: "MAJOR",
                radius: (result[6][1]/50),
                state: "Gujarat"
            },
            {
                centered: "UP",
                fillKey: "MAJOR",
                radius: (result[7][1]/50),
                state: "Uttar Pradesh"
            },
            {
                centered: "TS",
                fillKey: "MAJOR",
                radius: (result[8][1]/50),
                state: "Telangana"
            },
            {
                centered: "AP",
                fillKey: "MAJOR",
                radius: (result[9][1]/50),
                state: "Andhra Pradesh"
            },
            {
                centered: "KL",
                fillKey: "MAJOR",
                radius: (result[10][1]/50),
                state: "Kerala"
            },
            {
                centered: "KA",
                fillKey: "MAJOR",
                radius: (result[11][1]/50),
                state: "Karnataka"
            },
            {
                centered: "JK",
                fillKey: "MAJOR",
                radius: (result[12][1]/50),
                state: "Jammu and Kashmir"
            },
            {
                centered: "WB",
                fillKey: "MAJOR",
                radius: (result[13][1]/50),
                state: "West Bengal"
            },
            {
                centered: "HR",
                fillKey: "MAJOR",
                radius: (result[14][1]/50),
                state: "Haryana"
            },
            {
                centered: "PB",
                fillKey: "MAJOR",
                radius: (result[15][1]/50),
                state: "Punjab"
            },
            {
                centered: "BR",
                fillKey: "MAJOR",
                radius: (result[16][1]/50),
                state: "Bihar"
            },
            {
                centered: "OD",
                fillKey: "MAJOR",
                radius: (result[17][1]/50),
                state: "Odisha"
            },
            {
                centered: "UK",
                fillKey: "MAJOR",
                radius: (result[18][1]/50),
                state: "Uttarakhand"
            },
            {
                centered: "HP",
                fillKey: "MAJOR",
                radius: (result[19][1]/50),
                state: "Himachal Pradesh"
            },
            {
                centered: "AS",
                fillKey: "MAJOR",
                radius: (result[20][1]/50),
                state: "Assam"
            },
            {
                centered: "CT",
                fillKey: "MAJOR",
                radius: (result[21][1]/50),
                state: "Chhattisgarh"
            },
            {
                centered: "JH",
                fillKey: "MAJOR",
                radius: (result[22][1]/50),
                state: "Jharkhand"
            },
            {
                centered: "CH",
                fillKey: "MAJOR",
                radius: (result[23][1]/50),
                state: "Chandigarh"
            },
            {
                centered: "LD",
                fillKey: "MAJOR",
                radius: (result[24][1]/50),
                state: "Ladakh"
            },
            {
                centered: "AN",
                fillKey: "MAJOR",
                radius: (result[25][1]/50),
                state: "Andaman and Nicobar Islands"
            },
            {
                centered: "GA",
                fillKey: "MAJOR",
                radius: (result[26][1]/50),
                state: "Goa"
            },
            {
                centered: "PY",
                fillKey: "MAJOR",
                radius: (result[27][1]/50),
                state: "Puducherry"
            },
            {
                centered: "ML",
                fillKey: "MAJOR",
                radius: (result[28][1]/50),
                state: "Meghalaya"
            },
            {
                centered: "MN",
                fillKey: "MAJOR",
                radius: (result[29][1]/50),
                state: "Manipur"
            },
            {
                centered: "TR",
                fillKey: "MAJOR",
                radius: (result[30][1]/50),
                state: "Tripura"
            },
            {
                centered: "MZ",
                fillKey: "MAJOR",
                radius: (result[31][1]/50),
                state: "Mizoram"
            },
            {
                centered: "AR",
                fillKey: "MAJOR",
                radius: (result[32][1]/50),
                state: "Arunachal Pradesh"
            },
            {
                centered: "DN",
                fillKey: "MAJOR",
                radius: (result[33][1]/50),
                state: "Dadra and Nagar Haveli"
            },
            {
                centered: "NL",
                fillKey: "MAJOR",
                radius: (result[34][1]/50),
                state: "Nagaland"
            },
            {
                centered: "DD",
                fillKey: "MAJOR",
                radius: (result[35][1]/50),
                state: "Daman and Diu"
            },
            {
                centered: "LD",
                fillKey: "MAJOR",
                radius: (result[36][1]/50),
                state: "Lakshwadeep"
            },
            {
                centered: "SK",
                fillKey: "MAJOR",
                radius: (result[37][1]/50),
                state: "Sikkim"
            },

  ]
        // // ISO ID code for city or <state></state>
        setTimeout(() => { // only start drawing bubbles on the map when map has rendered completely.
            bubble_map.bubbles(bubbles, {
                popupTemplate: function (geo, data) {
                    return `<div class="hoverinfo">State Name: ${data.state}, Confirmed Positive Cases: ${Math.round(data.radius*50)}</div>`;
                }
            });
        }, 1000);
      }
  }
request.send();
