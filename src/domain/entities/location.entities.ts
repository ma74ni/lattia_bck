export class LocationEntity{
    constructor(
        public id: string,
        public name: string,
        public address: string,
        public active: boolean
    ){}
}