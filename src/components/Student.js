// src/components/Student.js
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Student = ({ name, photo, about, email, github, linkedin, role }) => {
  return (
    <div className='students-flexcolumn__student-flex-item'>
      
      <img src={require('../images/' + photo)} alt={name} />
      <div className='students-flexcolumn__student-flex-item__info-div'>
        <div className='st-fl__st-fl-i__in-div__text'>
          <div className='st-fl__st-fl-i__in-div__text__heading'>
            <h2 style={styles.name}>{name}</h2>
            <p className='student-role'>{role}</p>
          </div>
          <p style={styles.about}>{about}</p>
        </div>
        <div className='st-fl__st-fl-i__in-div__links'>
          {github && 
            <a href={github}  target="_blank" rel="noopener noreferrer" style={{color: "black"}}>
              <FontAwesomeIcon
                  icon={faGithub}
                  style={{ fontSize: "40px", display: "inline" }}
              />
            </a>
          }
          {linkedin && 
            <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{color: "black"}}>
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ fontSize: "40px", display: "inline"}}
              />
            </a>
          }
          <p style={styles.contact}><a href={`mailto:${email}`} style={styles.link}>{email}</a></p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  photo: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '16px',
  },
  name: {
    fontSize: '1.5rem',
    marginBottom: '8px',
  },
  about: {
    fontSize: '1rem',
    marginBottom: '8px',
  },
  contact: {
    fontSize: '1rem',
    marginBottom: '8px',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default Student;
