export const Ingredients = ({ ingredients }: { ingredients: Array<string> }) => {
    return (
        <p className="ingredients">
            <b>Ingredients:</b> /
            {ingredients.map((ingredient: string, key) => (
                <span className="ingredient" key={key}>
                    {ingredient}
                    {key < ingredients.length - 1 && ', '}
                </span>
            ))}
            /
        </p>
    );
};
