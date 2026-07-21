const username = process.argv[2];

if (!username) {
    console.error("error: Please provide a GitHub username");
    process.exit(1);
}

const url = `https://api.github.com/users/${encodeURIComponent(username)}`;

try {
    const response = await fetch(url);


    if(response.status === 404) {
        console.error(`error: Github user not found: ${username}`);
        process.exit(1);
    }

    const user = await response.json();

    console.log(`Name: ${user.name}`);
        console.log(`Username: ${user.login}`);
            console.log(`Profile: ${user.html_url}`);
                console.log(`Public repos: ${user.public_repos}`);
                    console.log(`Followers: ${user.followers}`);
} catch (err) {
    console.error("error:" , err.message);
    process.exit(1);
}

