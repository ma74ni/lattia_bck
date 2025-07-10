export class CreateProductTypeDto {
  private constructor(public name: string) {}

  static create(object: {
    [key: string]: any;
  }): [string?, CreateProductTypeDto?] {
    const { name } = object;

    if (!name) return ['Missing name'];

    return [undefined, new CreateProductTypeDto(name)];
  }
}
