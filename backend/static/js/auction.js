let selectedTeam = "CSK";

function selectTeam(team, purse) {

    selectedTeam = team;

    document.getElementById(
        'team-details'
    ).innerHTML = `

        <h2>${team}</h2>

        <p>Remaining Purse:</p>

        <h3>₹ ${purse}</h3>

        <p>Bought Players:</p>

        <ul>
            <li>MS Dhoni</li>
            <li>Jadeja</li>
            <li>Ruturaj</li>
        </ul>
    `;
}

function placeBid(amount) {

    const liveBid =
        document.getElementById(
            'live-bid'
        );

    let current =
        parseInt(
            liveBid.innerText
            .replace('₹', '')
            .replace(/,/g, '')
        );

    current += amount;

    liveBid.innerText =
        `₹ ${current}`;

    document.getElementById(
        'highest-team'
    ).innerText =
        selectedTeam;
}
