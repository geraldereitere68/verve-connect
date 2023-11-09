/*
 * Filename: sophisticaed_code.js
 * 
 * Description: This code is an implementation of a complex and sophisticated inventory management system.
 * It includes features such as adding, updating, and removing items from inventory, generating reports, and more.
 * The code is organized into different modules to improve maintainability and readability.
 */

// Utility module
const utils = (() => {
  // Private variables and functions
  let counter = 0;

  // Public interface
  return {
    generateUniqueId: () => {
      return `ID-${++counter}`;
    }
  };
})();

// Inventory module
const inventory = (() => {
  // Private variables and functions
  let items = [];

  const findItemIndex = (itemId) => {
    return items.findIndex((item) => item.id === itemId);
  };

  // Public interface
  return {
    addItem: (name, quantity, price) => {
      const id = utils.generateUniqueId();
      const newItem = {
        id,
        name,
        quantity,
        price
      };
      items.push(newItem);
    },

    updateItem: (itemId, name, quantity, price) => {
      const itemIndex = findItemIndex(itemId);
      if (itemIndex > -1) {
        items[itemIndex].name = name;
        items[itemIndex].quantity = quantity;
        items[itemIndex].price = price;
      }
    },

    removeItem: (itemId) => {
      const itemIndex = findItemIndex(itemId);
      if (itemIndex > -1) {
        items.splice(itemIndex, 1);
      }
    },

    getItems: () => {
      return items;
    }
  };
})();

// Report module
const report = (() => {
  // Private variables and functions
  const calculateTotalValue = () => {
    const items = inventory.getItems();
    let totalValue = 0;

    items.forEach((item) => {
      totalValue += item.quantity * item.price;
    });

    return totalValue;
  };

  // Public interface
  return {
    generateInventoryReport: () => {
      const items = inventory.getItems();
      console.log('--- Inventory Report ---');
      items.forEach((item) => {
        console.log(`ID: ${item.id}`);
        console.log(`Name: ${item.name}`);
        console.log(`Quantity: ${item.quantity}`);
        console.log(`Price: ${item.price}`);
        console.log('---');
      });
      console.log(`Total Value: ${calculateTotalValue()}`);
    }
  };
})();

// Sample usage
inventory.addItem('Item 1', 5, 10);
inventory.addItem('Item 2', 10, 20);
inventory.updateItem('ID-2', 'Item 2 Updated', 15, 25);
inventory.removeItem('ID-1');
report.generateInventoryReport();
