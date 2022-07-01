export const Allergens = ({ allergens }: { allergens: Array<string> }) => {
    return (
        <p className="allergens mdl-color-text--red-A400">
            <b>allergens:</b> /
            {allergens.map((ingredient: string, key) => (
                <span className="ingredient" key={key}>
                    {ingredient}
                    {key < allergens.length - 1 && ', '}
                </span>
            ))}
            /
        </p>
    );
};
