export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ee157bef3a59151fb52c255',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-arwkddrc',
                  apiId: 'c577f626-e0a5-4ecc-9151-e7b0904366df'
                },
                {
                  buildHookId: '5ee157be47c49b3c3dc67563',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mxpoz2r6',
                  apiId: '512af273-5e9c-47a6-9e74-aa1d8f517471'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/visortim/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mxpoz2r6.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
