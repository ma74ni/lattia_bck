export class FlavorEntity{
    constructor(
        public id: string,
        public name: string,
        public base: 'agua' | 'leche',
        public sugarFree: boolean,
        public availableAt: string[]
    ){}
}