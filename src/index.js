import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import ListRoutes from './ListRoutes'

const root = createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <Router>
            <ListRoutes />
        </Router>
    </React.StrictMode>,
)