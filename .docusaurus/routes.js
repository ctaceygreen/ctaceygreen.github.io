
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','784'),
    exact: true
  },
  {
    path: '/blog/azure-consumption-functions-healthcheck-with-deployment-slots',
    component: ComponentCreator('/blog/azure-consumption-functions-healthcheck-with-deployment-slots','8f9'),
    exact: true
  },
  {
    path: '/blog/page/2',
    component: ComponentCreator('/blog/page/2','531'),
    exact: true
  },
  {
    path: '/blog/page/3',
    component: ComponentCreator('/blog/page/3','603'),
    exact: true
  },
  {
    path: '/blog/returning',
    component: ComponentCreator('/blog/returning','c0c'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/azure',
    component: ComponentCreator('/blog/tags/azure','8af'),
    exact: true
  },
  {
    path: '/blog/tags/consumption',
    component: ComponentCreator('/blog/tags/consumption','93f'),
    exact: true
  },
  {
    path: '/blog/tags/deployment-slots',
    component: ComponentCreator('/blog/tags/deployment-slots','e51'),
    exact: true
  },
  {
    path: '/blog/tags/function',
    component: ComponentCreator('/blog/tags/function','a78'),
    exact: true
  },
  {
    path: '/blog/tags/healthcheck',
    component: ComponentCreator('/blog/tags/healthcheck','a08'),
    exact: true
  },
  {
    path: '/blog/tags/returning',
    component: ComponentCreator('/blog/tags/returning','782'),
    exact: true
  },
  {
    path: '/blog/tags/welcome',
    component: ComponentCreator('/blog/tags/welcome','649'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','5fc'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','87d'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations','793'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post','68e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document','c2d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page','f44'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site','e46'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features','4b7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions','fdd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site','2d7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
