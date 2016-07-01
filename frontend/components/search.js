import React from 'react';

export default function Search() {
  return (
    <div className="flex-item search-container">
      <input className="search" placeholder="Search"/>
      <i className="fa fa-search search-icon" aria-hidden="true"/>
    </div>
  );
}
