export function connectPath(path: string): string {
  const prefix = process.env.PrefixPath || '/api'
  return `${prefix}${path}`
}