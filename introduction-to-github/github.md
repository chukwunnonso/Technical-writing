# Introduction to Github

Early in your programming career, even before learning version control, working on fascinating projects is usually enjoyable. However, there is a risk that you could lose your files if your storage drive fails or your machine crashes, both of which would be unpleasant experiences. Even if you have no prior experience or knowledge, this article aims to make version control with Git and GitHub more understandable.

## Table of content

- What is GitHub
- Why GitHub
- Git vs. GitHub
- Clone (Show how to do cloning)
- Pull request (Show how to do a pull request)
- Commit (Show how to do a commit)
- GitHub Desktop vs. Github CLI

## What is GitHub

GitHub is obviously made up of the keywords Git and Hub. Before continuing on to GitHub, we need to talk about Git since you might be curious what it is.

Linus Torvalds created the open source project Git in 2005. Git is a distributed version control system (DVCS), which means that the developer's local machine has a mirror copy of the full source code and history. It is the most widely adopted version control system globally in terms of popularity. This widespread adoption could be credited to the fact that it can be installed on Windows, MacOS, or Linux operating systems. Below is a walkthrough of the installation process using Windows Operating System. But first visit [here](https://git-scm.com/.) 

![Image](images\git_download.png)
![Image](images\github_sign_up.png)



GitHub is a platform for hosting Git repositories on a distant server or the internet. Just so you know, repository simply means folders. You may also hear some people  refer to them as "repos" but the meaning is the same. GItHub makes it simple to connect with other developers all over the world. In addition to this, it offers developers the chance to improve their skills by contributing to the open source projects of others.  Open source are projects that you can contribute to and modify. GitHub depends heavily on Git, so everytime you hear GitHub, know that git is in the background.

For you to be able to use GitHub, you need to create an account or sign up by visiting the GitHub website [here](https://github.com/) 




Git vs Github


Despite being combined, Git and GitHub have different features. We will list a handful of them here.

| Git      | GitHub |
| ----------- | ----------- |
| To protect your project from anywhere, Git does not require an online connection      | however, in order to save your work on GitHub, an internet connection is required.       |
|  Git is a software   | GitHub is a service        |
| GitHub is centralized     | Git is distributed.       |
| Git does not have a provision for managing user data.      | GitHub has a system for managing user data       |
| git was first introduced in 2005.      | GitHub was introduced in 2008.      |



### Clone (Show how to do cloning)

Git clone is used to copy a repository that already exists either on the cloud into your machine. It provides you with all the files and history of the codebase. You can clone easily using HTTPS or SSH code. Let me show you how. Let's say you found the project you want to clone, just follow the simple steps below. opening it and clicking on the code button located on the right side of the screen  just beside the "Go to file" and "add file". then copy th HTTPS or SSH url. In your terminal, create a folder you would like the desired repository to be in.

Move into the folder using cd js-syntax
Thirdly, type  git clone  and paste the url Its a very easy processs.


```
cd js-syntax
git clone  and paste the url Its a very easy processs
```

![Image](images/github_desktop_clone.png)

![Image](images/clone_in_terminal.png)

You can also clone using GitHub desktop by following the illustrations on the images below.

![Image](images/github_desktop_clone.png)

![Image](images/final_clone_desktop.png)

It is worth noting that you can only make changes to the file you have cloned only if you have write permissions to the repository. This restriction enables GitHub to protect the projects.

Commit (Show how to do a commit)

Git commit is always preceded by a very popular command known as the git add. Imagine the git add as a command used to bring all the files we want to take a snapshot of to the stage. The git commit is the command that takes the snapshot.  Any file that you have not staged will not be committed. Committed files represent a safe version of your project, that can be changed only when we ask Git to do so.

```
    git commit -m "This is how to commit"
    
    The flag m stands for message.
```

Errors in the commit message can be overwritten using 

```
 git commit --amend “This is the correct message”
```

Pull request (Show how to do a pull request):

Collaborating with others is fantastic. Effective collaboration necessitates communication, too. When a contributor submits a pull request, the project owner is given the opportunity to learn about the change that has been made, examine the changes, and either accept or reject the change. It helps with efficient communication. You can perform pull requests via GitHub, GitHub Desktop, GITHUB CLI, etc. After you submit a pull request, a page comparing the two branches will show up so you can view the differences. To briefly illustrate this

After cloning, Open the folder in your favorite Integrated Development Environment. I will be using Visual Studio Code.

```
    Enter git checkout -b “correct-spelling-error” in your terminal after cloning the project. This command 
 ```   
    creates a new branch. Go to the file where you want to make changes and perform the change.
    Type the following one after the other

 ```     
    “git status” to see the files you have modified
    “git diff” shows the differences between the branches
    “git add” the name of the file that you modified
    git commit -m “made spelling correction”
    git push origin correct-spelling-error
```

Then go back to github you will find a green button that says “compare and pull request” click it and give a descrription of the change you made and create a pull request. 


## GitHub Desktop vs. Github CLI

### GitHub Desktop
GitHub Desktop, in a nutshell, makes it simpler to work with both local and cloud-hosted repositories and simplifies your work. Eliminating any potential roadblocks and Increase your productivity are the two main objectives of GitHub desktop.

Visit [this link](https://desktop.github.com/) to get it installed on your local computer.

![Image](images/github_desktop.png)


### GitHub CLI

GitHub CLI stands for GitHub Command Line Interface. It helps you to connect with GitHub from your terminal without having to switch applications. 

Think of the GitHub CLI when you consider ease. It eliminates the need for switching from the terminal to the browser or the GitHub desktop application while trying to access or host a repository. Another advantage of GitHub CLI is that it makes you become accustomed to working with the terminal, which is a crucial skill for engineers. Who doesn't enjoy the feeling of being a hacker, after all?


To install GitHub CLI is very easy just visit [this link](https://cli.github.com/). Then
```
    gh auth login
```

![Image](images/github_cli_terminal.png)


| GitHub CLI      | GitHub Desktop |
| ----------- | ----------- |
| GitHub CLI is an interface in your terminal      | GitHub desktop uses GUI       |
|  GitHub CLI is a command line tool   | GitHub desktop is an application.        |
| GitHub CLI uses commands     | GitHub desktop does not use commands.       |
| Downloading GitHub CLI takes smaller memory.       | GitHub desktop requires more memory space.      |




With this that we have covered so far, you will be able to keep track of the projects that you are working on and also be able to contribute to other open source projects that are freely available without been afraid of losing any of your files and projects. Keep building!

