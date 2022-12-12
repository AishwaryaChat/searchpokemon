import { get } from "./xhr";

export const getPoke = (url: string) => {
    return get(url)
}