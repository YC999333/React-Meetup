import classes from './Layout.module.css'
import React from 'react'
import MainNaviation from './MainNavigation'

function Layout(props) {
    return (
        <div>
            <MainNaviation />
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout
