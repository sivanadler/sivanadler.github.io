import AboutPage from './sections/AboutPage'
import HomePage from './sections/HomePage'
import { Route, Switch, withRouter } from 'react-router-dom'

function RouteContainer(){

    return (
        <div>
            <Switch>
 
                <Route exact path="/about" render={ (routerProps) => {
                    document.title = `Sivan Adler - About`
                    return <AboutPage {...routerProps}/>
                }} />
                <Route exact path="/" render={ (routerProps) => {
                    document.title = `Sivan Adler`
                    return <HomePage {...routerProps}/>
                }} />
            </Switch>
        </div>
    )
}

export default withRouter(RouteContainer)