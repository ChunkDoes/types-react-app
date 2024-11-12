import React from "react";
import TypeItem from "./TypeItem";

function XMLViewer({ xmlDoc }) {
    const getTypeItems = () => {
      const types = xmlDoc.getElementsByTagName('type');

      // use a set for unique categories
      const categories = new Set();
      const usages = new Set();
      const values = new Set();

      const items = Array.from(types).map((typeNode) => {
        // Extract flags as an object
        const flagsNode = typeNode.getElementsByTagName('flags')[0];
        const flags = Array.from(flagsNode.attributes).reduce((acc, attr) => {
          acc[attr.name] = attr.value;
          return acc;
        }, {});
      

        // Extract usage elements as an array along with unique names
        const usage = Array.from(typeNode.getElementsByTagName('usage')).map((usageNode) => {
          const usageName = usageNode.getAttribute('name');
          if (usageName) usages.add(usageName);
          return usageName;
        });

        // Extract value elements as an array along with unique value names
        const value = Array.from(typeNode.getElementsByTagName('value')).map((valueNode) => {
          const valueName = valueNode.getAttribute('name');
          if (valueName) values.add(valueName);
          return valueName;
        });

        // Extract category
        const categoryNode = typeNode.getElementsByTagName('category')[0];
        const category = categoryNode?.getAttribute('name') || '';
        if (category) categories.add(category); // Add to unique categories set

        return {
          name: typeNode.getAttribute('name'),
          nominal: typeNode.getElementsByTagName('nominal')[0]?.textContent,
          lifetime: typeNode.getElementsByTagName('lifetime')[0]?.textContent,
          restock: typeNode.getElementsByTagName('restock')[0]?.textContent,
          min: typeNode.getElementsByTagName('min')[0]?.textContent,
          quantmin: typeNode.getElementsByTagName('quantmin')[0]?.textContent,
          quantmax: typeNode.getElementsByTagName('quantmax')[0]?.textContent,
          cost: typeNode.getElementsByTagName('cost')[0]?.textContent,
          flags,
          category,
          usage,
          value,
        };
      });
      return { 
        items, 
        uniqueCategories: Array.from(categories),
        uniqueUsages: Array.from(usages),
        uniqueValues: Array.from(values),
      };
    };

    const { items: typeItems, uniqueCategories, uniqueUsages, uniqueValues } = getTypeItems();
    //const availableUsages = ['Military', 'Police', 'Civilian', 'Industrial'];

    return (
      <div>
        {typeItems.map((elementData, index) => (
          <TypeItem 
            key={index} 
            elementData={elementData} 
            uniqueCategories={uniqueCategories}
            availableUsages={uniqueUsages}
            availableValues={uniqueValues}
          />
        ))}
      </div>
    );
}

export default XMLViewer;