FROM mongo

COPY teams.json /teams.json
CMD mongoimport --host mongodb --db SLTest --collection teams --type json --file /teams.json --jsonArray