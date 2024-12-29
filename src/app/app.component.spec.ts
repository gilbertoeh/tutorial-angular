styles: [
  `
    .sidebar {
      grid-area: sidebar;
      background: #3700b3;
      color: white;
      padding: 1rem;
      height: 100%;
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
      overflow-y: auto;
    }
    .sidebar ul {
      list-style: none;
      padding: 0;
    }
    .sidebar li {
      margin: 0.75rem 0;
    }
    .sidebar a {
      color: white;
      text-decoration: none;
      font-size: 1rem;
      padding: 0.5rem 1rem;
      display: block;
      border-radius: 5px;
      transition: background 0.3s, transform 0.2s;
    }
    .sidebar a:hover {
      background: #6200ea;
      transform: scale(1.05);
    }
    .sidebar .active a {
      background: #bb86fc;
      font-weight: bold;
    }
    @media (max-width: 768px) {
      .sidebar {
        grid-area: sidebar;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 60%;
        z-index: 1000;
        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;
      }
      .sidebar.open {
        transform: translateX(0);
      }
    }
  `,
]
