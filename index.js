const resultsDiv = document.querySelector('#results')

function getIssues() {
  const repo = 'colesayer/javascript-fetch-lab'
  const token = getToken();

  fetch(`https://api.github.com/repos/${repo}/issues`, {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));

}

function showIssues(json) {
}

function createIssue() {
  const repo = 'colesayer/javascript-fetch-lab'
  const token = getToken();


  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: /post/,
    body: /test body/,
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => showIssues(res));
}

function getForkedRepo(repoUrl){
  const token = getToken()
  fetch(repoUrl, {
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json));
}

function showResults(res) {
  for(const ele in res){
    if(ele === "url"){ continue }
    resultsDiv.innerHTML += (`${ele}: ${res[ele]}</br>`)
  }
  const repoUrl = res.url
  resultsDiv.innerHTML += (`url: <a href = "${repoUrl}"> ${repoUrl} </a>`)
  return getForkedRepo(repoUrl)
}
//   // resultsDiv.innerHTML = (`<a href="${res.url}">${res.url}</a>`)


function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken();

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: /post/,
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => showResults(res));
  //use fetch to fork it!
}

function getToken() {
  const token = ''
  // return token
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ""
}
