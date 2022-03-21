import React from 'react'

import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__box">
          <h3 className="sidebar__title">Categories</h3>
          <ul className="sidebar__category">
              <li className="sidebar__category-item">Furniture</li>
              <li className="sidebar__category-item">Kitchen Thing</li>
              <li className="sidebar__category-item">Decor Art</li>
              <li className="sidebar__category-item">Illumination</li>
              <li className="sidebar__category-item">New Products</li>
          </ul>
      </div>

      <div className="sidebar__box">
          <h3 className="sidebar__title">Filter by price</h3>
          <form className="sidebar-form">
              <input type="range" className="sidebar__slider" />
              <button type="button" className="btn btn-small">Fillter</button>
          </form>
      </div>

      <div className="sidebar__box">
          <h3 className="sidebar__title">Best sellers</h3>
          <p>No Product</p>
      </div>
    </div>
  )
}

export default Sidebar