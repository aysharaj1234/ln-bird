import React from 'react';

const Mycourse = () => {
  return (
    <div>
        <div className='section-5'>
          <div className='container'>
            <div className='row'>
                <div className="text-area">
           <h2>My Courses</h2>
           <button type="button" class="btn btn-secondary">ALL COURSES</button>
           
           <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card mt-5" style={{height:"450px" ,width:"400px", marginLeft:"-50px"}}>
      <h3 style={{fontSize:"18px",marginLeft:"18px", color:"gray", paddingTop:"10px"}}>Lessons 4 of 15</h3>
      <button></button> 
    
      <div className="card-body">
        <img src='https://aaftonline.com/blog/wp-content/uploads/2023/02/certification-courses-in-india.jpg'/>
        <div className='v mt-3'>
        <a href='#'>Github Webhooks for Beginners</a>
      </div>
      </div>
      <div className="card-footer mt-5 h-100">
        <div className="text-body-secondary">GO TO COURSE</div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card mt-5 " style={{height:"450px" ,width:"400px",marginLeft:"-20px"}}>
      <h3 style={{fontSize:"18px",marginLeft:"18px", color:"gray", paddingTop:"10px"}}>Lessons 4 of 11</h3>
      <button></button> 
    
      <div className="card-body">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS1M1xO5tpV8YF8Tx5raIxZbhAZltqs1zpQA&s'/>
        <div className='v mt-3'>
        <a href='#'>Awesome CSS with LESS Processing </a>
      </div>
      </div>
      <div className="card-footer mt-5 h-100">
        <div className="text-body-secondary">GO TO COURSE</div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card mt-5 " style={{height:"450px" ,width:"400px", marginLeft:"10px"}}>
      <h3 style={{fontSize:"18px",marginLeft:"18px", color:"gray", paddingTop:"10px"}}>Lessons 4 of 18</h3>
      <button></button> 
    
      <div className="card-body">
        <img src='https://ipbindia.com/wp-content/uploads/2024/04/Highest-demand-courses-in-India.jpg'/>
        <div className='v mt-3'>
        <a href='#'>Vagrant Portable Environments</a>
      </div>
      </div>
      <div className="card-footer mt-5 h-100">
        <div className="text-body-secondary">GO TO COURSE</div>
      </div>
    </div>
  </div>  
</div>


<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card mt-5" style={{height:"450px" ,width:"400px", marginLeft:"-50px"}}>
      <h3 style={{fontSize:"18px",marginLeft:"18px", color:"gray", paddingTop:"10px"}}>Lessons 4 of 16</h3>
      <button></button> 
    
      <div className="card-body">
        <img src='https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg'/>
        <div className='v mt-3'>
        <a href='#'>WordPress Theme Development</a>
      </div>
      </div>
      <div className="card-footer mt-5 h-100">
        <div className="text-body-secondary">GO TO COURSE</div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card mt-5" style={{height:"450px" ,width:"400px", marginLeft:"-25px"}}>
      <h3 style={{fontSize:"18px",marginLeft:"18px", color:"gray", paddingTop:"10px"}}>Lessons 4 of 16</h3>
      <button></button> 
    
      <div className="card-body">
        <img src='https://www.wemakescholars.com/uploads/blog/TopprofessionalITcoursetopursueincollege.jpg'/>
        <div className='v mt-3'>
        <a href='#'>Browserify: Writing Modular JavaScript</a>
      </div>
      </div>
      <div className="card-footer mt-5 h-100">
        <div className="text-body-secondary">GO TO COURSE</div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card mt-5" style={{height:"450px" ,width:"400px",marginLeft:"10px"}}>
      <h3 style={{fontSize:"18px",marginLeft:"18px", color:"gray", paddingTop:"10px"}}>Lessons 4 of 16</h3>
      <button></button> 
    
      <div className="card-body">
        <img src='https://essinstitute.in/wp-content/uploads/2023/12/Basic-Computer-Course.jpg'/>
        <div className='v mt-3'>
        <a href='#'>Browserify: Writing Modular JavaScript</a>
      </div>
      </div>
      <div className="card-footer mt-5 h-100">
        <div className="text-body-secondary">GO TO COURSE</div>
      </div>
    </div>
  </div>
</div> 


<div className="pagination">
<nav aria-label="Page navigation example">
  <ul className="pagination mt-5 " style={{marginLeft:"-40px"}}>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item"><a class="page-link" style={{backgroundColor:"#42A5F5",color:"white"}} href="#">1</a></li>
    <li className="page-item"><a class="page-link" href="#">2</a></li>
    <li className="page-item"><a class="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>

</div>
            </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Mycourse;