import { Page } from 'components/Page/Page'
import { Home } from 'pages/Home'
import { PageNotFound } from 'pages/PageNotFound'
import { createBrowserRouter } from 'react-router-dom'

import paths from 'routes/paths'

interface Routes {
  path: string
  element: React.ReactNode
}

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
  <Page>
    <Component />
  </Page>
)

const routes: Routes[] = [
  { path: paths.HOME, element: getRouteElement(Home) },
  { path: paths.NOT_FOUND, element: getRouteElement(PageNotFound) },
]
const router = createBrowserRouter(routes)
export default router
