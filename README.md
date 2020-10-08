# sl-test
You'll need to run `npm install` in both the client and api folders if using docker compose. This is due to the volume mounts used for live updating while in development.
 You can also build and run the docker containers directly, without needing to run `npm install`.

If using docker-compose, after running the two `npm install` commands, you can run the below commands from the root directory to get started:
1. `docker-compose build`
2. `docker-compose up`

The api is accessible on localhost:3000 and the client is available on localhost:4200.