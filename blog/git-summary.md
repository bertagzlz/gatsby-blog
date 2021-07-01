---
path: /blog/git-summary
date: 2020-02-18T15:44:02.080Z
title: git summary
---
### Local rep is composed by three trees:

![Merge branches](assets/index-head.png)

`git add .` Para meter todos al index
git add <filename>
git commit -m “commit message” to include in HEAD dir
**We do not have any file in our remote rep so far.😃**

Push to remote
From our local copy to remote:

If you have not cloned an existing rep and you want to connect your local rep to a remote one:
`git remote add origin <server>` fe https://github.com/bertagzlz/gatsby-netlify-okta

`git push origin master/main` depends on the branch you are using

### Branches

They are used to develop isolated tasks or activities each other. Master is the default branch. You can merge diferent branches at the end:

##### New branch

fe create new branch “feature_x” and change to it:
git checkout -b feature_x
Return to the main branch: git checkout master
Delete feature_x: git branch -d feature_x
Any new branch won’t be available to the remaining users if you don’t push it to your remote rep.
git push origin <branch>

##### Update and merge

git pull to update your local rep from the most recent commit
git merge <branch> to download and merge the remote changes
![Merge branches](assets/branches.png)

![](assets/branches.png)


It may produce conflicts, but they depends on you.
Git diff <source branch> <target_branch> to review

Replace local changes
git checkout – <filename>
This replaces tha changes in your working directory with the latest HEAD content. New files won’t be changed.