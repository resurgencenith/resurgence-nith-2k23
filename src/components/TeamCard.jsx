import React from 'react'
import './TeamCard.css'

export default function TeamCard({member}) {
  return (
    <div className="container">
  <div className="row vh-100">
    <div className="col-sm-6 col-lg-3 my-auto">
      <div className="box shadow-sm p-4">
        <div className="image-wrapper mb-3">
          <img
            className="img-fluid"
            src={member.img_url}
            alt="..."
          />
        </div>
        <div className="box-desc">
          <h5>{member.name}</h5>
          <p>{member.post}</p>
        </div>
        <ul className="social">
          <li>
            <a href={member.instagram}>
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href={member.github}>
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a href={member.linkedin}>
              <i className="fab fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

  )
}
