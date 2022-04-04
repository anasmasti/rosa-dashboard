import React from "react";

function Dashboard() {
  const statistiques = [
    {
      id: 1,
      title: "Products",
      count: 2,
      description: "Products description",
    },
    {
      id: 2,
      title: "Articles",
      count: 20,
      description: "Articles description",
    },
    {
      id: 3,
      title: "Users",
      count: 15,
      description: "Users description",
    },
    {
      id: 4,
      title: "Categories",
      count: 2,
      description: "Categories description",
    },
  ];
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {statistiques.map((statistique) => {
        return (
          <div className="dashboard-card" key={statistique.id}>
            <h4>
              {statistique.title} <span>{statistique.count}</span>
            </h4>
            <p>{statistique.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Dashboard;
