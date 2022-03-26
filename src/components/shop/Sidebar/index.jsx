import React, { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAll } from '../../../axios/category'

import './Sidebar.css'

const Sidebar = () => {
  const [category, setCategory] = useState();
  
  useEffect(() => {
    const getCategory = async () => {
      const { data } = await getAll()
      setCategory(data)
    }

    getCategory()
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebar__box">
          <h3 className="sidebar__title">Categories</h3>
          <ul className="sidebar__category">
              {category && category.map((item, index) => {
                return (
                  <li className="sidebar__category-item" key={index}>
                    <Link to={`category/${item._id}`}>{item.name}</Link>
                  </li>
                )
              })}
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