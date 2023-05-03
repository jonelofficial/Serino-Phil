import React from "react";

const DataManipulation = () => {
  const initialData = [
    {
      id: 1,
      name: "John Doe",
      status: 1,
    },
    {
      id: 2,
      name: "Jane Doe",
      status: 2,
    },
    {
      id: 3,
      name: "Adam Rocket",
      status: 2,
    },
    {
      id: 4,
      name: "Luis Rocket",
      status: 1,
    },
  ];

  const groubByStatus = (data) => {
    if (!Array.isArray(data) || !data[0]?.status) {
      return;
    }
    return data.reduce((result, obj) => {
      if (!result[`status-${obj?.status}`]) {
        result[`status-${obj?.status}`] = [];
      }
      result[`status-${obj?.status}`].push(obj);
      return result;
    }, {});
  };

  console.log(groubByStatus(initialData));

  return (
    <div>
      <h1>DataManipulation</h1>
      <p style={{ fontStyle: "italic" }}>see console for result</p>
    </div>
  );
};

export default DataManipulation;

// Using the initial data below create a function that will achieve the expected result data show it to console:

// Initial data:

// [
//   {
//     "id": 1,
//     "name": "John Doe",
//     "status": 1
//   },
//   {
//     "id": 2,
//     "name": "Jane Doe",
//     "status": 2
//   },
//   {
//     "id": 3,
//     "name": "Adam Rocket",
//     "status": 2
//   },
//   {
//     "id": 4,
//     "name": "Luis Rocket",
//     "status": 1
//   }
// ]

// Expected Result Data:

// {
//  "status-1": [
//   {
//    "id": 1,
//    "name": "John Doe",
//    "status": 1
//   },
//   {
//    "id": 4,
//    "name": "Luis Rocket",
//    "status": 1
//   }
//  ],
//  "status-2": [
//   {
//    "id": 2,
//    "name": "Jane Doe",
//    "status": 2
//   },
//   {
//    "id": 3,
//    "name": "Adam Rocket",
//    "status": 2
//   }
//  ]
// }
