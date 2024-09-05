import React from 'react';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src='https://www.shutterstock.com/image-vector/lms-learning-management-system-line-260nw-1994276849.jpg'></img>
    <a className="navbar-brand ms-3" href="#">My<span>LMS</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
<li className="nav-item dropdown ms-2 ">
<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">  <i class="fa-solid fa-users-line"></i>  Users
              </a>
        
          </li>
          <li className="nav-item dropdown">
 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-square-poll-vertical"></i> Results $ reports
     
          </a>
          </li>
      
        <li className="nav-item">
          <a className="nav-link " href="#"> <i class="fa-solid fa-bolt"></i> Insights</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">   <i class="fa-solid fa-book"></i> Course library</a>
        </li>
      </ul>

      <div className='tt'>
      <button type="button" class="btn btn-secondary"> <i class="fa-regular fa-star"></i> 100 cr</button>
      </div>
      
      <div className='icons'>
      <i class="fa-solid fa-question"style={{marginLeft:"-420px"}}></i>
      </div>

   <div className='c'>
   <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{marginLeft:"-400px"}}> </a>
   </div>
   <div className='aa'>
   <i class="fa-solid fa-gear" style={{marginLeft:"-330px"}}> settings </i>

</div>
<div className='vv'>
    <h5 className='ac' style={{marginLeft:"-150px"}}> Account</h5> 
    </div>
    <div className='cc'>
   <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{marginLeft:"-50px"}}> </a>
   </div>




    </div>
 
  </div>
 
</nav>


<div className='section-2'>
    
</div>
    </div>
  
  )
}

export default Navbar;