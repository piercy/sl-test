async function getCountries(req, res) {
    res.json(countries);
}
// Would be best in a database but for time constraints..
const countries =
    [
        {
            "ID": 1,
            "Name": "Greece"
        },
        {
            "ID": 2,
            "Name": "England"
        },
        {
            "ID": 3,
            "Name": "Switzerland"
        },
        {
            "ID": 4,
            "Name": "France"
        },
        {
            "ID": 5,
            "Name": "Austria"
        },
        {
            "ID": 6,
            "Name": "Czech Republic"
        },
        {
            "ID": 7,
            "Name": "Germany"
        },
        {
            "ID": 8,
            "Name": "Scotland"
        },
        {
            "ID": 9,
            "Name": "Spain"
        },
        {
            "ID": 10,
            "Name": "Finland"
        },
        {
            "ID": 11,
            "Name": "Portugal"
        },
        {
            "ID": 12,
            "Name": "Romania"
        },
        {
            "ID": 13,
            "Name": "Turkey"
        },
        {
            "ID": 14,
            "Name": "Belgium"
        },
        {
            "ID": 15,
            "Name": "Cyprus"
        },
        {
            "ID": 16,
            "Name": "Republic of Ireland"
        },
        {
            "ID": 17,
            "Name": "Italy"
        },
        {
            "ID": 18,
            "Name": "Netherlands"
        },
        {
            "ID": 19,
            "Name": "Poland"
        },
        {
            "ID": 20,
            "Name": "Sweden"
        },
        {
            "ID": 21,
            "Name": "Ukraine"
        },
        {
            "ID": 22,
            "Name": "Serbia"
        },
        {
            "ID": 23,
            "Name": "Croatia"
        },
        {
            "ID": 24,
            "Name": "Iceland"
        },
        {
            "ID": 25,
            "Name": "Malta"
        },
        {
            "ID": 26,
            "Name": "Georgia"
        },
        {
            "ID": 27,
            "Name": "Denmark"
        },
        {
            "ID": 28,
            "Name": "Slovakia"
        },
        {
            "ID": 29,
            "Name": "Russia"
        },
        {
            "ID": 30,
            "Name": "Hungary"
        },
        {
            "ID": 31,
            "Name": "Northern Ireland"
        },
        {
            "ID": 32,
            "Name": "Israel"
        },
        {
            "ID": 33,
            "Name": "Norway"
        },
        {
            "ID": 34,
            "Name": "Slovenia"
        },
        {
            "ID": 35,
            "Name": "Faroe Islands"
        },
        {
            "ID": 36,
            "Name": "Luxembourg"
        },
        {
            "ID": 37,
            "Name": "Wales"
        },
        {
            "ID": 38,
            "Name": "Azerbaijan"
        },
        {
            "ID": 39,
            "Name": "Andorra"
        },
        {
            "ID": 40,
            "Name": "Albania"
        },
        {
            "ID": 41,
            "Name": "Latvia"
        },
        {
            "ID": 42,
            "Name": "San Marino"
        },
        {
            "ID": 43,
            "Name": "Belarus"
        },
        {
            "ID": 44,
            "Name": "FYR Macedonia"
        },
        {
            "ID": 45,
            "Name": "Moldova"
        },
        {
            "ID": 46,
            "Name": "Bosnia and Herzegovina"
        },
        {
            "ID": 47,
            "Name": "Montenegro"
        },
        {
            "ID": 48,
            "Name": "Estonia"
        },
        {
            "ID": 49,
            "Name": "Armenia"
        },
        {
            "ID": 50,
            "Name": "Kazakhstan"
        },
        {
            "ID": 51,
            "Name": "Lithuania"
        },
        {
            "ID": 52,
            "Name": "Bulgaria"
        },
        {
            "ID": 53,
            "Name": "Gibraltar"
        }
        ];


module.exports = {
    getCountries
}