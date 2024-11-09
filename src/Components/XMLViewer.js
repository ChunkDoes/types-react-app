import React from "react";
import TypeItem from "./TypeItem";

function XMLViewer({ xmlDoc }) {
    const getTypeItems = () => {
      const types = xmlDoc.getElementsByTagName('type');
      return Array.from(types).map((typeNode) => {
        // Extract flags as an object
        const flagsNode = typeNode.getElementsByTagName('flags')[0];
        const flags = Array.from(flagsNode.attributes).reduce((acc, attr) => {
          acc[attr.name] = attr.value;
          return acc;
        }, {});

        // Extract usage elements as an array
        const usage = Array.from(typeNode.getElementsByTagName('usage')).map((usageNode) => 
          usageNode.getAttribute('name')
        );

        // Extract value elements as an array
        const value = Array.from(typeNode.getElementsByTagName('value')).map((valueNode) =>
          valueNode.getAttribute('name')
        );

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
          category: typeNode.getElementsByTagName('category')[0]?.getAttribute('name'),
          usage,
          value,
        };
      });
    };

    const typeItems = getTypeItems();

    return (
      <div>
        {typeItems.map((elementData, index) => (
          <TypeItem key={index} elementData={elementData} />
        ))}
      </div>
    );
}

export default XMLViewer;