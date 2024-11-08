import React from "react";

function XMLViewer({ xmlDoc }) {
    const renderNode = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          return <span>{node.nodeValue.trim()}</span>;
        }
    
        const children = Array.from(node.childNodes).map((childNode, index) => (
          <li key={index}>{renderNode(childNode)}</li>
        ));
    
        return (
          <ul>
            <strong>{node.nodeName}:</strong>
            {children.length > 0 ? <ul>{children}</ul> : null}
          </ul>
        );
      };
    
      return <div>{renderNode(xmlDoc.documentElement)}</div>;
}

export default XMLViewer;