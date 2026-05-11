from flask import Flask, render_template

app = Flask(__name__)

players = [

    {
        "name": "Virat Kohli",
        "image": "virat.png",
        "role": "Batter",
        "matches": 252,
        "runs": 8004,
        "base_price": 20000000
    }
]

teams = {

    "CSK": 450000000,
    "MI": 520000000,
    "RCB": 480000000,
    "KKR": 430000000,
    "SRH": 410000000,
    "GT": 390000000,
    "RR": 400000000,
    "DC": 420000000,
    "LSG": 380000000,
    "PBKS": 460000000
}

@app.route('/')
def home():

    return render_template(
        'auction.html',
        player=players[0],
        teams=teams,
        current_bid=20000000,
        current_team="CSK"
    )

if __name__ == '__main__':

    app.run(debug=True)
