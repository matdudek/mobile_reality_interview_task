type ApiVote = {
    id: number,
    image_id: string,
    created_at?: string,
    sub_id: string | null,
    value: number
    image?: {id: string, url: string}
}

type ApiCreateVote = {
    sub_id: string,
    value: number,
    image_id: string,
}

type SuccessStatus = {
    message: string,
    id: number
}

export type {
    ApiVote,
    ApiCreateVote,
    SuccessStatus
}