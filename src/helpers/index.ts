const getSectionId = (): string => Math.random().toString(36).substring(2).toUpperCase()

const getId = (): string => `${getSectionId()}-${getSectionId()}-${getSectionId()}`


export {
    getId
}