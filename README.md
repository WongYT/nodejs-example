# nodejs-example

This is a example for nodejs + gitlab ci

### Set up gitlab-ci docker runner
```
docker run -d --name gitlab-runner --restart always \
  -v /srv/gitlab-runner/config:/etc/gitlab-runner \
  -v /var/run/docker.sock:/var/run/docker.sock \
  gitlab/gitlab-runner:latest

```

### Register gitlab-ci runner
```
docker exec -it gitlab-runner gitlab-runner register
```

### Modify gitlab-ci runner config
```
sudo vim /srv/gitlab-runner/config/config.toml
```
