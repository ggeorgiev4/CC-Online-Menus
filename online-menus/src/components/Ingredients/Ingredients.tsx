import { useState } from 'react';

export const Ingredients = ({ data }: { data: Array<string> }) => {
    const [ingredients, setIngredients] = useState<Array<string>>(data);
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
