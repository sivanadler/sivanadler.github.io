import AboutPage from './sections/AboutPage'
import HomePage from './sections/HomePage'
import { Route, Switch } from 'react-router-dom'
import Nav from './common/Nav'

function RouteContainer(){
    return (
        <div>
            <Nav />
            <Switch>
                <Route path="/" render={ (routerProps) => {
                    document.title = `Sivan Adler`
                    return <HomePage {...routerProps}/>
                }} />
                <Route path="/about" render={ (routerProps) => {
                    document.title = `Sivan Adler - About`
                    return <AboutPage {...routerProps}/>
                }} />

            </Switch>
        </div>
    )
}

export default RouteContainer