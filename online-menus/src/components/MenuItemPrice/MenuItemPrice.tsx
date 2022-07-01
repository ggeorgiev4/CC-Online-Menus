export enum Currency {
    EUR = `€`,
    USD = '$',
    BGN = 'лв.',
}
export const MenuItemPrice = ({
    price,
    currency = Currency.BGN,
}: {
    price: number;
    currency?: Currency;
}) => {
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
