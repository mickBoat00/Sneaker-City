import React from 'react'
import Button from '../Button/Button'
import "./Filters.css";

const Filters = () => {
  return (
    <div>
        <h2 className="recommended-title">Filter</h2>
        <div className="recommended-flex">
          <Button value="" title="Latest " />
          <Button value="Nike" title="In coming" />
          <Button value="Nike" title="In stock" />
        </div>
      </div>
  )
}

export default Filters
