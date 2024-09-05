import React from 'react';
const Course = () => {
    
  return (

    <div>
       {/*------------------------------------------------------- navbar start -------------------------------------------------*/}

        <div class="grid-container">
                <div class="item1">
                <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{width:"1350px", position:"fixed", marginLeft:"235px", marginTop:"-10px"}} >
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item dropdown" style={{marginLeft:"5px"}}>
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Forum
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Forum Home</a></li>
            <hr/>
            <li><a className="dropdown-item" href="#">Forum Category</a></li>
          </ul>
        </li>
       
      </ul>
      
    </div>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
       
        <li className="nav-item dropdown"style={{marginLeft:"-150px"}} >
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Courses
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Courses Grid</a><hr/></li>
            <li><a className="dropdown-item" href="#">Courses List</a><hr/></li>
            <li><a className="dropdown-item" href="#">Courses Details</a></li>
          </ul>
        </li>
       
      </ul>
    </div>
  </div>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item dropdown" style={{marginLeft:"-200px"}} >
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"#42A5F5"}}>
      Student
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Dashboard</a><hr/></li>
            <li><a className="dropdown-item" href="#">My Courses</a><hr/></li>
            <li><a className="dropdown-item" href="#">Take Courses</a><hr/></li>
            <li><a className="dropdown-item" href="#"> Courses Forums</a><hr/></li>
            <li><a className="dropdown-item" href="#">Take Quiz</a><hr/></li>
            <li><a className="dropdown-item" href="#">Edit Profile</a><hr/></li>
            <li><a className="dropdown-item" href="#">Edit Billing</a><hr/></li>
            <li><a className="dropdown-item" href="#">messages</a><hr/></li>
          </ul>
        </li>
       
      </ul>
    </div>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown " style={{marginLeft:"-70px"}} >
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Instructor
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Dashboard</a><hr/></li>
            <li><a className="dropdown-item" href="#">My Courses</a><hr/></li>
            <li><a className="dropdown-item" href="#">Edit Courses</a><hr/></li>
            <li><a className="dropdown-item" href="#">Earnings</a><hr/></li>
            <li><a className="dropdown-item" href="#">Statement</a><hr/></li>
            <li><a className="dropdown-item" href="#">Edit Profile</a><hr/></li>
            <li><a className="dropdown-item" href="#">Edit Billing</a><hr/></li>
            <li><a className="dropdown-item" href="#"> Messages</a></li>
          </ul>
        </li>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQmEXMAoPh5nTeGGeRshz695-b1X2ITlsemQ&s ' style={{height:"70px",width:"70px",mixBlendMode:"color-burn",marginLeft:"500px"}}/>
        <img src='https://cdn-icons-png.flaticon.com/512/10137/10137627.png' style={{height:"30px", width:"30px", marginTop:"20px", marginLeft:"-15px"}}/>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUF6nPvswbV3_0VZii5PfRqZz8xQc0xF7TvA&s' style={{height:"70px", width:"70px" , marginLeft:"50px" }}/>
      <h3 className='cont '>Bill</h3>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{marginTop:"10px"}}></a>
            
        
      </ul>
    
    </div>
    
</nav>
                </div>
       
       
  
  
   {/*------------------------------------------------------- side bar start -------------------------------------------------*/}
                
                <div class="item2">
                  <div className='div-6' style={{marginTop:"-10px"}}>
                    <div className='div-7' style={{backgroundColor:"#42A5F5", height:"80px", fontSize:"40px", color:"white", fontWeight:"600", }}><span>Learning</span></div>
                    <hr/>
                    <div className='content'>
                        <img src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL2ZyZWVpbWFnZXNjb21wYW55X3Bob3RvX29mX3lvdW5nX2luZGlhbl9naXJsX2hvbGRpbmdfc3R1ZGVudF9iYV8zN2QyNjU4Yi0yOWIwLTQyZmQtODhmYy04OGU3ZTcxYmVlNDcucG5n.png'/>
                        <h2>Student Name</h2>
                        <hr/>
                        <div class="accordion" id="accordionExample">
  <div class="accordion-item"  style={{borderColor:"#212121"}}>
      <button style={{backgroundColor:"#212121"}} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <i class="fa-solid fa-gauge"></i><a href='#'>Dashboard</a>
      </button>
    <div id="collapseOne"  data-bs-parent="#accordionExample">
    </div>
  </div>

  <div class="accordion-item"  style={{borderColor:"#212121"}}>
      <button style={{backgroundColor:"#212121"}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <i class="fa-solid fa-graduation-cap"></i><a href='#'>Courses</a>
      </button>
    
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{backgroundColor:"#212121"}} >
          <ul style={{color:"white",listStyleType:'none',lineHeight:"30px"}}>
            <li><a className="dropdown-item" href="#">Courses Grid</a></li> 
            <li><a className="dropdown-item" href="#">Courses List</a></li>
            <li><a className="dropdown-item" href="#">Courses Page</a></li>
            <li><a className="dropdown-item" href="#"> My Courses </a></li>
            <li><a className="dropdown-item" href="#"> Take Courses </a></li>
            <li><a className="dropdown-item" href="#">Courses Forums</a></li>
            <li><a className="dropdown-item" href="#">Courses Forums Thread</a></li>
            <li><a className="dropdown-item" href="#">Take Quiz</a></li>
  
</ul>  
      </div>
    </div>
  </div>

  <div class="accordion-item"  style={{borderColor:"#212121"}}>
      <button style={{backgroundColor:"#212121"}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <i class="fa-solid fa-book-bookmark"></i><a href='#'>Forum</a>
      </button>
    
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{backgroundColor:"black"}} >
          <ul style={{color:"white",listStyleType:'none',lineHeight:"30px"}}>
            <li><a className="dropdown-item" href="#">Courses Grid</a></li> 
            <li><a className="dropdown-item" href="#">Courses List</a></li>
            <li><a className="dropdown-item" href="#">Courses Page</a></li>
            <li><a className="dropdown-item" href="#"> My Courses </a></li>
            <li><a className="dropdown-item" href="#"> Take Courses </a></li>
            <li><a className="dropdown-item" href="#">Courses Forums</a></li>
            <li><a className="dropdown-item" href="#">Courses Forums Thread</a></li>
            <li><a className="dropdown-item" href="#">Take Quiz</a></li>
  
</ul>  
      </div>
    </div>
  </div>
  
  <div class="accordion-item " style={{borderColor:"#212121"}}>
      <button style={{backgroundColor:"#212121", }} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <i class="fa-solid fa-user"></i><a href='#'>Account</a>
      </button>
    
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{backgroundColor:"black"}} >
          <ul style={{color:"white",listStyleType:'none',lineHeight:"30px"}}>
            <li><a className="dropdown-item" href="#">Courses Grid</a></li> 
            <li><a className="dropdown-item" href="#">Courses List</a></li>
            <li><a className="dropdown-item" href="#">Courses Page</a></li>
            <li><a className="dropdown-item" href="#"> My Courses </a></li>
            <li><a className="dropdown-item" href="#"> Take Courses </a></li>
            <li><a className="dropdown-item" href="#">Courses Forums</a></li>
            <li><a className="dropdown-item" href="#">Courses Forums Thread</a></li>
            <li><a className="dropdown-item" href="#">Take Quiz</a></li>
  
</ul>  
      </div>
    </div>
    </div>
    </div>
        <div className='a-content'>
        <i class="fa-solid fa-message"></i><a href='#'>Messages</a>
        </div>
        <div className='a-content'>
        <i class="fa-solid fa-right-from-bracket mt-4"></i><a href='#'>Logout</a>
        </div>
        <hr/>
        </div>
        </div>
        </div>
  {/*   ------------------------------------------------------ mainbar start ------------------------------------------ */}
                <div class="item3">
                <div className='section-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h2 >Overview</h2>
                       
                        <div className='cotainerr'> 
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqN16dimmYKCwAxFze03oAXLmAVLwOvhPZBQ&s'></img>
                        <h4>Your subscription ends on 25 February 2015</h4>
                        <a href='https://www.youtube.com/watch?v=qBwaF5qRY7k'>
                       <button type="button" class="btn btn-outline-secondary">UPGRADE</button></a>
                        </div>
                        </div>
               
            </div>
        </div>
        </div>
        <div className='section-4'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='div-1'>
                            <h2>Courses</h2>
                            <h3>Your recent courses</h3>
                            <hr/>
                            <h5>Basics of HTML</h5>
                            
                            <button></button>
        
                            <hr/>
                            <h5>Angular in steps</h5>
                            <button></button>
                            <hr />
                            <h5>Bootatrap Foundations</h5>
                            <button></button>
                           <hr/>
                           <div className='btu'>
                          
                           <button type="button" class="btn btn-outline-light">view all</button>
                           </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="div-2">
                            <h4>Rewards</h4>
                            <h5>Your latest achievements</h5>
                            <img src='https://cdn.pixabay.com/photo/2016/12/18/11/02/star-1915449_1280.png'/> <img src='https://i0.wp.com/www.pyroshows.com/wp-content/uploads/Trophy-Icon-Blue.png?ssl=1'/> <img src='https://img.freepik.com/premium-vector/lawyer-hat-icon-vector-image-can-be-used-crime-law_120816-67269.jpg'/> <img src='https://cdn-icons-png.flaticon.com/512/3209/3209955.png'/> <img src='https://png.pngtree.com/png-vector/20190425/ourmid/pngtree-vector-diamond-icon-png-image_992461.png'/>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className="div-3">
                            <h4>Certificates<span>(4)</span> </h4>
                       <hr/>
                      <img src='https://icons4web.com/wp-content/uploads/2017/11/Contract-gold-icon-201440.jpg'/>    <img src='https://icons4web.com/wp-content/uploads/2017/11/Contract-gold-icon-201440.jpg'/>   <img src='https://icons4web.com/wp-content/uploads/2017/11/Contract-gold-icon-201440.jpg'/>      <img src='https://icons4web.com/wp-content/uploads/2017/11/Contract-gold-icon-201440.jpg'/> 
                            
                       </div>    
                    </div>
                    
                    <div className="colo-lg-6">
                        <div className='div-4'>
                            <h3>Quizzes</h3>
                            <h4>Your recent performance</h4>
                            <hr/>
                            <h5>Title of quiz goes here?<span>5.8</span></h5> 
                          <h6>Course: <a href='#'>Basics of HTML</a><span>Good</span></h6>
                         <hr/>
                        
                         <h1 className='aa'>Directives & Routing <span>9.8</span></h1>
                       <h2>Course: <a href='#'>Angular in Steps</a><span>great</span></h2>
                       <hr/>

                       <div className="cont">
                        <h4>Responsive & Retina<span>3.4</span></h4>
                        <h3>Course: <a href='#'>Bootstrap Foundations</a><span>failed</span></h3>
                        <hr/>
                        <button type="button" class="btn btn-primary">Go To Results</button>

                       </div>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className='div-5'>
<h2>Forum Activity</h2>
<h5>Latest forum topics & comments</h5>
<img src='https://m.media-amazon.com/images/M/MV5BMjIzNDMwMzI3OV5BMl5BanBnXkFtZTgwNTk2NzMyMTE@._V1_.jpg'/>
<a href='#'>Can someone help me with AngularJS?<span>1 hr ago</span></a>
<h3>Topic:<a href='#'>AngularJS </a>By:<a href='#'>Adrian Demian</a></h3>

<hr/>

<img src='https://media.licdn.com/dms/image/D5603AQGUTB3pxc2iSg/profile-displayphoto-shrink_200_200/0/1705547550934?e=2147483647&v=beta&t=wRBZSPVtJDs2KA9rk6Xhtpj1CX7DIuMKhmtwz8zgV1Y'/>
<a href='#'>Can someone help me with AngularJS?<span>2 hr ago</span></a>
<h3>Topic:<a href='#'>AngularJS </a>By:<a href='#'>Adrian Demian</a></h3>

<hr/>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRJ2_BDpXgKeSG0X4CPF4hiCvewclTdSgAMafLnu5jyilRpg9qgITCSujg7ouyiXK126Q&usqp=CAU'/>
<a href='#'>Can someone help me with AngularJS?<span>3 hr ago</span></a>
<h3>Topic:<a href='#'>AngularJS </a>By:<a href='#'>Adrian Demian</a></h3>

<hr/>
<img src='https://media.licdn.com/dms/image/C4D03AQFHLlEch-niEQ/profile-displayphoto-shrink_200_200/0/1648736301857?e=2147483647&v=beta&t=YG10lYrzxpdf5Cpu5tA_oeyzTIoxwyrnrDdlZGY7oAc'/>
<a href='#'>Can someone help me with AngularJS?<span>4 hr ago</span></a>
<h3>Topic:<a href='#'>AngularJS </a>By:<a href='#'>Adrian Demian</a></h3>





                    </div>
                    </div>   
                </div>
            </div>
        </div>
                    </div>  

</div>
    </div>
  )
}


export default Course;