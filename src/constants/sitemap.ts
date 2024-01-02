/**
 * Sanity content types to routes mapping
 */

export const sanitySitemap: Record<string, string> = {
  blog_page: 'blog',
  contact_page: 'contact',
  post: `blog/{slug}`,
}

export const replaceParams = (route: string, params?: Record<string, string>) => {
  if (!params) {
    return route
  }

  let newRoute = route
  Object.keys(params).forEach((key) => {
    newRoute = newRoute.replace(`{${key}}`, params[key])
  })
  return newRoute
}
