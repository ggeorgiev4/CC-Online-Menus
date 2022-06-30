export interface MenuItem {
    name: string;
    id: number;
    ingredients: Array<string>;
    allergens: Array<string>;
    price: number;
    weight: number;
    description: string;
    pictures: Array<string>;
}
