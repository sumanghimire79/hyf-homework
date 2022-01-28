
async function getAllApiTogether() {

  try {
    const apis = await Promise.all([
      fetch('https://api.github.com/search/repositories?q=user:sumanghimire79'),
      fetch('https://api.github.com/search/repositories?q=user:chunmeishui'),
      fetch('https://api.github.com/search/repositories?q=user:asmafassy'),
    ]);

    const promiseJson = apis.map((api) => api.json());
    const result = await Promise.all(promiseJson);
    result.map((val) => {
      val.items.map((val1) => {
        console.log(val1);
        console.log(val1.owner.login);

        const promiseSection = document.querySelector('#promiseSection');
        const promiseSectionUL = document.createElement('ul');

        const owner = document.createElement('h2')
        owner.innerHTML = `Owner: ${val1.owner.login}`;

        const RepoName = document.createElement('li')
        RepoName.innerHTML = ` Repo Name: ${val1.full_name}`;

        const URL = document.createElement('li')
        URL.innerHTML = ` Repo Name: ${val1.owner.url}`;


        promiseSectionUL.appendChild(owner)
        promiseSectionUL.appendChild(RepoName)
        promiseSectionUL.appendChild(URL)

        promiseSection.appendChild(promiseSectionUL)


      });

    });

  } catch (error) {
    console.log(error);
  }

}

const repoInfo = getAllApiTogether();
console.log(repoInfo);

