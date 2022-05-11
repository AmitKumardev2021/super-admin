/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/app/forms',
    icon: 'FormsIcon',
    name: 'Forms',
  },
  {
    path: '/app/cards',
    icon: 'CardsIcon',
    name: 'Cards',
  },
  {
    path: '/app/charts',
    icon: 'ChartsIcon',
    name: 'Charts',
  },
  {
    path: '/app/buttons',
    icon: 'ButtonsIcon',
    name: 'Buttons',
  },
  {
    path: '/app/modals',
    icon: 'ModalsIcon',
    name: 'Modals',
  },
  {
    path: '/app/tables',
    icon: 'TablesIcon',
    name: 'Tables',
  },
  {
    icon:"MenuIcon",
    name:"Partners",
    routes:[
      {
        path: '/app/partners',
        name: ' Partners',
      },
      {
        path: '/app/partner-verification',
        name: ' Partner Verification',
      },
    ]
  },
  {
    icon: 'PagesIcon',
    name: 'Heritage',
    routes: [
      // submenu
      {
        path: '/app/heritage',
        name: 'Heritage Add',
      },
      {
        path: '/app/heritage-update',
        name: ' Heritage Update',
      },
      
      // {
      //   path: '/create-account',
      //   name: 'Create account',
      // },
      // {
      //   path: '/forgot-password',
      //   name: 'Forgot password',
      // },
      // {
      //   path: '/app/404',
      //   name: '404',
      // },
      // {
      //   path: '/app/blank',
      //   name: 'Blank',
      // },
    ],

  },
  {
    icon:"MenuIcon",
    name:"Blogs",
    routes:[
      {
        path: '/app/blogs',
        name: ' Blogs',
      },
      {
        path: '/app/blogs-update',
        name: ' Blogs Update',
      },
    ]
  }
]

export default routes
