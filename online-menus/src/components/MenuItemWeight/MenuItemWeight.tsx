import { useState } from 'react';

export enum WeightMeasure {
    GRAMS = 'g',
    KILOGRAMS = 'kg',
}
export const MenuItemWeight = ({
    data,
    unit = WeightMeasure.GRAMS,
}: {
    data: number;
    unit?: WeightMeasure;
}) => {
    const [weight, setWeight] = useState<number>(data);

    return (
        <>
            ({weight}
            {unit})
        </>
    );
};
