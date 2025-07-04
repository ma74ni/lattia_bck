export class CreateLocationDto{
    private constructor(
        public name: string,
        public address: string,
        public active: boolean
    ){}

    static create(object: {[key: string]: any}): [string?, CreateLocationDto?]{
        const {name, address, active}=object

        if(!name) return ['Missing name']
        if(!address) return ['Missing address']
        if (typeof active !== 'boolean') return ['Missing or invalid active flag'];

        return [
            undefined,
            new CreateLocationDto(name, address, active)
        ]
    }
}