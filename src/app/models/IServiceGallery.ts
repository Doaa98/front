export interface IServiceGallery {
    id?: number
    localImage?: LocalImage[]
    urlImage?: URLImage[]
    urlYoutube?: URLYoutube[]
}



export interface LocalImage {
    id?: number
    dbPath: string
}

interface URLImage {
    id: number
    url: string
}

interface URLYoutube {
    id: number
    url: string
}