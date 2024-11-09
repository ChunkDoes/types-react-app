import React from 'react';

function TypeItem({ elementData }) {
    const { name, nominal, lifetime, restock, min, quantmin, quantmax, cost, flags, category, usage, value } = elementData;

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
            <h3>{name}</h3>
            <p><strong>Nominal:</strong> {nominal}</p>
            <p><strong>Lifetime:</strong> {lifetime}</p>
            <p><strong>Restock:</strong> {restock}</p>
            <p><strong>Min:</strong> {min}</p>
            <p><strong>Quant Min:</strong> {quantmin}</p>
            <p><strong>Quant Max:</strong> {quantmax}</p>
            <p><strong>Cost:</strong> {cost}</p>

            <h4>Flags</h4>
            <ul>
                {Object.entries(flags).map(([key, value]) => (
                    <li key={key}><strong>{key}: </strong> {value}</li>
                ))}
            </ul>

            <p><strong>Category:</strong> {category}</p>

            <h4>Usage</h4>
            <ul>
                {usage.map((usageName, index) => (
                    <li key={index}>{usageName}</li>
                ))}
            </ul>

            {value && (
                <>
                    <h4>Values
                        <ul>
                            {value.map((valueName, index) => (
                                <li key={index}>{valueName}</li>
                            ))}
                        </ul>
                    </h4>
                </>
            )}
        </div>
    );
}

export default TypeItem;