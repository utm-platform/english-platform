const listRoutes = (router, endpoint) => {
  const routes = router.stack
    .filter((middleware) => middleware.route)
    .map((middleware) => {
      return {
        path: middleware.route.path,
        method: Object.keys(middleware.route.methods)[0].toUpperCase(),
      }
    })

  routes.forEach((route) => {
    console.log(`${route.method} - ${endpoint ? endpoint : ''}${endpoint && (route.path === '/') ? '' : route.path}`)
  })
}

module.exports = listRoutes