// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  switch( license ) {
    case 'MIT':
      return '[![MIT License](https://img.shields.io/badge/license-MIT-green)]';
    case 'GPL':
      return '[![GPL-3.0 License](https://img.shields.io/badge/license-GPL_3.0-blue)]';
    case 'Apache':
      return '[![Apache-2.0 License](https://img.shields.io/badge/license-Apache_2.0-blue)]';
    default:
      return ''; //returning empty string if license is not provided
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  switch ( license ) {
     case 'MIT':
      return '(https://opensource.org/licenses/MIT)';
    case 'GPL':
      return '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache':
      return '(https://opensource.org/licenses/Apache-2.0)';
    default:
      return ''; //returning empty string if license is not provided
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if( license === '') return '';

  return(
  ` 
    This project is licensed under  ${ license } license 
  ${ renderLicenseBadge(license) }${ renderLicenseLink(license) }
  `)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown( { title, description, installation, usage, license, contribuiting, test, github, email } ) {
  
  return `

  # ${ title.toUpperCase() }

  ## Description
  ${ description }

  ## Installation
  ${ installation }

  ## Usage
  ${ usage }

  ## license
  ${ renderLicenseSection( license ) }

  ## Contribuiting
  ${ contribuiting }

  ## Tests
  ${ test }

  ## Github Acount
  https://wwww.github.com/${ github }

  ## Email
  Send me an email to chat to: ${ email }
  `;

}

export default generateMarkdown;
