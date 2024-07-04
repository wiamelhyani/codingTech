
  import React, { lazy } from 'react';

  const Dashboard = lazy(() => import('./views/dashboard/Dashboard'));
  const Recruteur =lazy(()=>import('./views/Recruteur/recruteur'));
  const Formation =lazy(()=>import('./views/Formation/Formation'));
    // const Typography = lazy(() => import('./views/theme/typography/Typography'));
  // const Cards = lazy(() => import('./views/base/cards/Cards'));
  // const ListGroups = lazy(() => import('./views/base/list-groups/ListGroups'));
  // const CreatJobs = lazy(() => import('./views/base/creatJob/creatJobs.js'));
  // const Offres = lazy(() => import('./views/base/offres/Offrre'));
  // const Charts = lazy(() => import('./views/charts/Charts'));
  // const Widgets = lazy(() => import('./views/widgets/Widgets'));

  const routes = [
    // { path: '/base/offres', name: 'Offres', element: Offres },
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', element: Dashboard },
    {path:'/recruteur',name:'Recruteur',element:Recruteur},
    {path:'/formation',name:'formation',element:Formation},
    // { path: '/theme/typography/:id?', name: 'Typography', element: Typography },
    // { path: '/base/cards/:id', name: 'Cards', element: Cards},
    // { path: '/base/list-groups', name: 'List Groups', element: ListGroups},
    // { path: '/base/creatJobs', name: 'Create Jobs', element: CreatJobs},
    // { path: '/charts', name: 'Charts', element: Charts},
    // { path: '/widgets', name: 'Widgets', element: Widgets },
  ];

  export default routes;
