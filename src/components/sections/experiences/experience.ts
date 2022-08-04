export interface Experience {
  title: string[]
  order: number
  when: string
  subprojects?: string[]
  isSubproject: boolean
  pageUrl?: string
  githubUrl?: string
  stack?: string[]
  fixedPart: string[]
  content: string
}
