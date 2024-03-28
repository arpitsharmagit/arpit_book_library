export interface AuthorWorkDetails {
    links: Links
    size: number
    entries: Entry[]
}

export interface Links {
    self: string
    author: string
    next: string
}

export interface Entry {
    type: Type
    title: string
    authors: Author[]
    key: string
    latest_revision: number
    revision: number
    created: Created
    last_modified: LastModified
    subjects?: string[]
    description?: Description
    links?: Link[]
    covers?: number[]
    subject_places?: string[]
    subject_people?: string[]
    excerpts?: Excerpt[]
    first_publish_date?: string
}

export interface Type {
    key: string
}

export interface Author {
    author: Author2
    type: Type2
}

export interface Author2 {
    key: string
}

export interface Type2 {
    key: string
}

export interface Created {
    type: string
    value: string
}

export interface LastModified {
    type: string
    value: string
}

export interface Description {
    type: string
    value: string
}

export interface Link {
    title: string
    url: string
    type: Type3
}

export interface Type3 {
    key: string
}

export interface Excerpt {
    author: Author3
    comment: string
    excerpt: string
}

export interface Author3 {
    key: string
}
