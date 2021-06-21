export interface IServiceGallery {
    id?: number
    type?: number
    src?: string
    
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