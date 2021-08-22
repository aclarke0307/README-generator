//generate the markdown for README
function generateMarkdown(data){
  return `# ${date.title}

  ## Contact 
  [${data.github}](https://github.com/${data.github}/)
  ${data.email}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
    *[Description](#decription)
    *[Installation](#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Contributing](#contributing)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ##License

  ## Contributing
  ${data.contributing}
  
    `;
}




// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "no license"){
    return '';
  }
  return `![badge](https:img.shields.io/badge/license-${data.license}-brightgreen)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "no license"){
    return '';
  }
  return `*[license](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "no license"){
    return '';
  }
  return `## license`
}


module.exports = generateMarkdown;
