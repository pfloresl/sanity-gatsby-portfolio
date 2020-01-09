export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1797e5c7ccd601e2dfbe43',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-s6951jjk',
                  apiId: '692ff2e8-3fc1-46b5-838f-99d805c30a2b'
                },
                {
                  buildHookId: '5e1797e6a1b90301d565e791',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-posefgnz',
                  apiId: '9a600db4-0b6e-4287-a794-365876e60449'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pfloresl/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-posefgnz.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
