const LinksSocialMedia = {
  github: 'pamlotusia',
  linkedin: 'in/pamelajlima/',
  facebook: 'pamela.lima.7165331',
  instagram: 'pam.lotusia',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    console.log(social)

    const socialMidiaUrl = `https://${social}.com/${LinksSocialMedia[social]}`
    console.log(socialMidiaUrl)
    li.children[0].href = socialMidiaUrl
  }
}


changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()


// Ser humano conta 12345678910
// a linguagem de programação conta 0123456789, ou seja, começa a contagem a partir do 0
