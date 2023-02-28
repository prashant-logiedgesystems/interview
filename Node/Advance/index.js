// Use gzip compression
//         Gzip compressing can greatly decrease the size of the response body and hence increase the speed of a web app.
//          Use the compression middleware for gzip compression in your Express app. 
//          For example:
                    const compression = require('compression')
                    const express = require('express')
                    const app = express()
                    app.use(compression())



// Don’t use synchronous functions
// Synchronous functions and methods tie up the executing process until they return. A single call to a synchronous 
// function might return in a few microseconds or milliseconds, however in high-traffic websites, these calls add up and
//  reduce the performance of the app. Avoid their use in production.