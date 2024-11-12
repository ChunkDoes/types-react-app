import React, { useState } from 'react';

function TypeItem({ elementData, uniqueCategories, availableUsages, availableValues }) {

    //State Variables
    const [ nominal, setNominal ] = useState(elementData.nominal);
    const [ lifetime, setLifetime ] = useState(elementData.lifetime);
    const [ restock, setRestock ] = useState(elementData.restock);
    const [ min, setMin ] = useState(elementData.min);
    const [ quantmin, setQuantmin ] = useState(elementData.quantmin);
    const [ quantmax, setQuantmax ] = useState(elementData.quantmax);
    const [ cost, setCost ] = useState(elementData.cost);
    const [ category, setCategory ] = useState(elementData.category);
    const [ usage, setUsage ] = useState(elementData.usage); 
    const [ selectedUsage, setSelectedUsage ] = useState('');
    const [ values, setValues ] = useState(elementData.value);
    const [ selectedValue, setSelectedValue ] = useState('');

    const [flags, setFlags] = useState(elementData.flags);

    // handle selected usage
    const handleAddUsage = () => {
        // add selected usage if it's not already in the list
        if (selectedUsage && !usage.includes(selectedUsage)) {
            setUsage([...usage, selectedUsage]);
        }
        setSelectedUsage(''); // reset dropdown after adding
    };
    // add selected value
    const handleAddValue = () => {
        if (selectedValue && !values.includes(selectedValue)) {
            setValues([...values, selectedValue]);
        }
        setSelectedValue('');
    }

    // handle flag checkbox changes
    const handleFlagChange = (flagKey) => {
        setFlags((prevFlags) => ({
            ...prevFlags,
            [flagKey]: prevFlags[flagKey] === "1" ? "0" : "1",
        }));
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
            <h3>Class Name: {elementData.name}</h3>
            {/* Change to inputs, fix layout */}
            <label>
                <strong>Nominal:</strong>
                <input type="number" value={nominal} onChange={(e) => setNominal(e.target.value)} />
            </label>

            <label>
                <strong>Lifetime:</strong>
                <input type="number" value={lifetime} onChange={(e) => setLifetime(e.target.value)} />
            </label>

            <label>
                <strong>Restock:</strong>
                <input type="number" value={restock} onChange={(e) => setRestock(e.target.value)} />
            </label>

            <label>
                <strong>Min:</strong>
                <input type="number" value={min} onChange={(e) => setMin(e.target.value)} />
            </label>

            <label>
                <strong>Quant Min:</strong>
                <input type="number" value={quantmin} onChange={(e) => setQuantmin(e.target.value)} />
            </label>

            <label>
                <strong>Quant Max:</strong>
                <input type="number" value={quantmax} onChange={(e) => setQuantmax(e.target.value)} />
            </label>

            <label>
                <strong>Cost:</strong>
                <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} />
            </label>

            <h4>Flags</h4>
            {/* Change to check boxes, display inline w/ name */}
            <ul>
                {Object.entries(flags).map(([key, value]) => (
                    <li key={key}>
                        <label>
                            <strong>{key}: </strong>
                            <input
                                type="checkbox"
                                checked={value === "1"}
                                onChange={() => handleFlagChange(key)}
                            />
                        </label>
                    </li>
                ))}
            </ul>
            
            {/* Change to drop down */}
            <label>
                <strong>Category:</strong>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    {uniqueCategories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </label>

            <h4>Usage</h4>
            {/* Change to drop down w/ add button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <select value={selectedUsage} onChange={(e) => setSelectedUsage(e.target.value)}>
                    <option value="">Select usage</option>
                    {availableUsages.map((usageOption) => (
                        <option key={usageOption} value={usageOption}>
                            {usageOption}
                        </option>
                    ))}
                </select>
                <button onClick={handleAddUsage}>Add</button>
            </div>
            <ul>
                {usage.map((usageName, index) => (
                    <li key={index}>{usageName}</li>
                ))}
            </ul>


            {/* Change to drop down w/ add button */}
            <h4>Values</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
                <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                    <option value="">Select value</option>
                    {availableValues.map((valueOption) => (
                        <option key={valueOption} value={valueOption}>
                            {valueOption}
                        </option>
                    ))}
                </select>
                <button onClick={handleAddValue}>Add</button>
            </div>
            <ul>
                {values.map((valueName, index) => (
                    <li key={index}>{valueName}</li>
                ))}
            </ul>
        </div>
    );
}

export default TypeItem;