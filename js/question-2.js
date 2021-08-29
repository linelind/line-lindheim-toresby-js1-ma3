const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=68d7d10d0aa343ebaf884efc89acb522";

const resultsContainer = document.querySelector(".results");

async function makeApiCall() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        const facts = results.results;

        resultsContainer.innerHTML = "";


        for (let i = 0; i < facts.length; i++) {

            if (i === 8) {
                break;
            }

            resultsContainer.innerHTML += `
            <div class="result">
                <h2>${facts[i].name}</h2>
                <p>Rating: ${facts[i].rating}</p>
                <p>Number of tags: ${facts[i].tags.length}</p>
            </div>`;
        }
    }
    catch(error) {
        resultsContainer.innerHTML = handleError("Urgh, an error occured 😕");
    }
}

makeApiCall();