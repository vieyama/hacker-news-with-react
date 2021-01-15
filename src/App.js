import React, { lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import routes from './routers/Router'

const NotFound = lazy(() => import('./views/NotFound'))

const App = () => {
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            return (
                <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                    exact
                />
            )
        })
    }
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    {getRoutes(routes)}
                    <Route component={NotFound} path="*" />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App
