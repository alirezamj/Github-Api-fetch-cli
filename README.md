# GitHub Profile CLI

A simple Node.js command-line tool that fetches and displays public GitHub profile information.

## Features

- Fetch public GitHub user details
- Handle missing usernames
- Handle users that don't exist
- Uses the GitHub REST API
- Built with Node.js and the Fetch API

## Requirements

- Node.js 18 or later

## Usage

```bash
node index.js alirezamj
```

Example output:

```text
Name:  alirezamj
Username: alirezamj
Profile: https://github.com/alirezamj
Public repos: 5
Followers: 1
```

Missing username:

```bash
node index.js
```

Output:

```text
error: please provide a GitHub username
```

Unknown user:

```bash
node github-profile.js some-random-user
```

Output:

```text
error: GitHub user not found: some-random-user
```

## Technologies

- JavaScript
- Node.js
- GitHub REST API
