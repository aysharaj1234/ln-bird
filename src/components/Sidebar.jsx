import React from 'react';

const Dashboard = () => {
  return (
    <div>
        <div className='section-1'>
            <div className='container'>
                <div className='row'>
                <div className='col-lg-12'>
                 <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwH328WIuqm3TuQ64dwmysx5M5QAIg-_UpFQ&s'></img>

                 <div className='btt'>
                 <button><h2 >...</h2></button>
                 <h3>sylvie.lin@hasco.co.uk</h3>
                 </div>
                 <div className='test'>
                 <ul className="list-group list-group-flush">
    <li className="list-group-item"> Report card</li>
    <li className="list-group-item">Results $ course</li>
    <li className="list-group-item">Events</li>
  </ul>
                 </div>

                </div>
                </div>
            </div>
        </div>

        <div className='section-2' style={{backgroundColor:"lightblue", height: "322px",width: "330px",marginTop: "70px",borderRadius:"10px",border: "1px solid gray"}}>
            <div className='container'>
                <div className='row'>
                <div className='col-lg-12'>
              <h3>PROFILE</h3>
              <div className='a'>
              <i class="fa-solid fa-file-pen"></i>
              <hr/>
              <div className='content'>
                <h5>Last Name <span>*</span></h5>
                <h4>Sylvie</h4>
              </div>
              <div className='contentt'>
                <h5>First Name <span>*</span></h5>
                <h4>Lin</h4>
              </div>
              <div className='contenttt'>
                <h4>Email Address</h4>
                <h5>sylvie.lin@ihasco.co.uk</h5>
                </div>


              </div>
              </div>
              </div>
              </div>
              </div>

    </div>
  )
}

export default Dashboard;