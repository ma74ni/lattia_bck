export class CreateFlavorDto{
    private constructor(
        public name: string,
        public base: 'agua' | 'leche',
        public sugarFree: boolean,
        public availableAt: string[]
    ){}

    static create(object: {[key: string]:any}): [string?, CreateFlavorDto? ]{
        const {name, base, sugarFree, availableAt} = object

        if(!name) return ['Missing name']
        if (base !== 'agua' && base !== 'leche') {
            return ['Base must be either "agua" or "leche"'];
        }
        if(typeof sugarFree !== 'boolean')  return ['Missing or invalid sugarFree']
        if (!Array.isArray(availableAt) || availableAt.some(id => typeof id !== 'string')) {
            return ['availableAt must be an array of location IDs (strings)'];
        }

        return [
            undefined,
            new CreateFlavorDto(name, base, sugarFree, availableAt)
        ]
    }
}