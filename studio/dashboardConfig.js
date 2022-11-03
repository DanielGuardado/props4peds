export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '6363bc643577df12f0526b5a',
                  title: 'Sanity Studio',
                  name: 'props-4-peds-studio',
                  apiId: '94bd0fb8-7b3c-40bf-a91c-89e177bc0fb6'
                },
                {
                  buildHookId: '6363bc631f7419121a8ffc5f',
                  title: 'Blog Website',
                  name: 'props-4-peds',
                  apiId: '70fdc80d-041a-4bbf-9b9f-88a209127387'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DanielGuardado/props4peds',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://props-4-peds.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
