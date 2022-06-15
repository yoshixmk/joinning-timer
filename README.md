# Joinning Timer

## Join zoom meeting automatically when it's time

### Dependency

- [zoom-cli](https://github.com/tmonfre/zoom-cli)
- [at](https://eng-entrance.com/linux-command-at)

## Install

```sh
deno install -f --name jt --allow-run main.ts

# execute
jt

# execute with parm
jt -n <meeting index number on zoom cli> -t <timer>
```

## Setting

```sh
zoom save --name <name> --url <url>

# check
zoom ls
```

## Remove Timer Job

```sh
# check job
atq

# remove
at -r <job id>
```
