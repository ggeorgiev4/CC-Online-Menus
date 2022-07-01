import { useState } from 'react';

export enum Currency {
    EUR = `€`,
    USD = '$',
    BGN = 'лв.',
}
export const MenuItemPrice = ({
    data,
    currency = Currency.BGN,
}: {
    data: number;
    currency?: Currency;
}) => {
    const [price, setPrice] = useState<number>(data);
    return (
        <div className="price">
            {currency !== Currency.BGN ? (
                <>
                    {currency}
                    {price}
                </>
            ) : (
                <>
                    {price}
                    {currency}
                </>
            )}
        </div>
    );
};
