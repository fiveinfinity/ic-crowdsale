## Notes

	background: #252d36 (dark)
	logo: #27e0e5 (blue)
	line color: #c1c2c3 (gray)

## Docker
Create Digital Ocean server:
docker-machine create --driver digitalocean --digitalocean-access-token 49574c6c518e5a56289f2309665ea975b197a35e01bd14224b1881af9c717811 crowdsale-v1

## Deploying
ssh root@67.205.131.49

docker container ls (get running container id)
docker container kill <id> (kill container)
docker run -it -p 8080:8080 fiveinfinity/ic-crowdsale:latest