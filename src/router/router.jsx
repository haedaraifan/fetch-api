import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import routes from './routes'

const Router = () => {
  const client = new QueryClient
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          {
            routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))
          }
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default Router