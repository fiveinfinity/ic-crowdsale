# IC-CROWDSALE

## Building

    docker login registry.imconvenienced.com
    # Ask Soren for the password and then bug him about setting up real authentication

    npm run publish

## Deploying

    ssh root@$BOX -p $PORT # replace with actual location and port
    docker pull registry.imconvenienced.com/ic-crowdsale
    cd stack
    docker stack deploy -c docker-stack.yml ic