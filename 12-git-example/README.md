# Git

- local repository
3
- remote repository

## Grab the project to your computer

```
> git clone https://github.com/ywarezk/react-talent-apr21.git
2
> cd react-talent-apr21
1
> npm install
2
> code .
```

## Branch

```
// -----0-----0-----0------0-----0
> git checkout -b feature/login
> git add .
> git commit -m "login: added the server rest api"
> git push origin feature/login
> git checkout master
> git merge feature/login
> git pull origin master
// conflict
// kdiff3, p4merge
> git mergetool
> git push origin master

```