export class CreateBaseTypeDto{
    private constructor(
        public name: string
    ){}

    static create(object: {[key: string]: any}): [string?, CreateBaseTypeDto?]{
        const {name} = object

        if(!name) return ['Missing name']

        return [
            undefined,
            new CreateBaseTypeDto(name)
        ]
    }
}