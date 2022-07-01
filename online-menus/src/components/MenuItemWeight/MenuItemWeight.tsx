export enum WeightMeasure {
    GRAMS = 'g',
    KILOGRAMS = 'kg',
}

export const MenuItemWeight = ({
    weight,
    unit = WeightMeasure.GRAMS,
}: {
    weight: number;
    unit?: WeightMeasure;
}) => {
    return (
        <>
            ({weight}
            {unit})
        </>
    );
};
