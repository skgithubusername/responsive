import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import img from './image/pexels-pixabay-301926.jpg';
import img1 from './image/user1.jpg';
import './component/Style.css';

const App = () => {
 

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex mx-auto" style={{ width: '40%' }}>
              <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="text">Create account </span>
                <a className = "link" href='#'>Sign in</a>
                </li>
            </ul>
          </div>
        </div>
      </nav>
     {/*  */}

      <section className='head'>
        
        {/* <img src={img} className="img-fluid" alt="..." style={{ height: '30%' }} /> */}

        <div class="card bg-dark text-white">
  {/* <img src={img} class="card-img" alt="..."  style={{ height: '30%' }}/> */}
  <div class="card-img-overlay">
  <button type="button" class="btn btn-secondary float-end">Light</button>
  </div>
</div>
      </section>

      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid ">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link active " aria-current="page" href="#">
                    All Post(32)
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Article
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Event
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Job
                  </a>
                </li>
              </ul>
              <div class="dropdown  ms-auto mb-2 mb-lg-0">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown button
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
                <button type="button" class="btn btn-primary ms-2">
                  Primary
                </button>
              </div>
            </div>
          </div>
        </nav>
      </section>

      <br />

      <section>
        <div class="container">
          <div class="row">
            <div class="col">
              <div className="card " style={{ width: '35rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <span className="h6 icon-tertiary small">
                    <span className="fas fa-medal me-2"></span>Awards
                  </span>
                
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-footer bg-white border-0">
                  <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="23k followers">
                    <img className="avatar-sm me-2 rounded-circle img-thumbnail-custom" src={img1} alt="Moore avatar" style={{ width: '30px' }} /> Jo J. Moore
                  </a>{' '}
                  <i class="fa fa-ellipsis-h float-end" aria-hidden="true"></i>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </section>
      <br />

      <section >
        <div class="container">
          <div class="row">
            <div class="col">
              <div className="card " style={{ width: '35rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <span className="h6 icon-tertiary small">
                    <span className="fas fa-medal me-2"></span>Awards
                  </span>
                  
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-footer bg-white border-0">
                  <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="23k followers">
                    <img className="avatar-sm me-2 rounded-circle img-thumbnail-custom" src={img1} alt="Moore avatar" style={{ width: '30px' }} /> Jo J. Moore
                  </a>{' '}
                  <i class="fa fa-ellipsis-h float-end" aria-hidden="true"></i>
                </div>
              </div>
              
            </div>


          
          </div>
        </div>
      </section>
      <br />

      {/* <form>

  <div class="form-outline mb-4">
    <input type="email" id="form1Example1" class="form-control" />
    <label class="form-label" for="form1Example1">Email address</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form1Example2" class="form-control" />
    <label class="form-label" for="form1Example2">Password</label>
  </div>

 
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
    
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
        <label class="form-check-label" for="form1Example3"> Remember me </label>
      </div>
    </div>

    <div class="col">
     
      <a href="#!">Forgot password?</a>
    </div>
  </div>


  <button type="submit" class="btn btn-primary btn-block">Sign in</button>
</form> */}

<section className='head'>
        
        {/* <img src={img} className="img-fluid" alt="..." style={{ height: '30%' }} /> */}

        <div class="card bg-dark text-white">
  {/* <img src={img} class="card-img" alt="..."  style={{ height: '30%' }}/> */}
  <div class="card-img-overlay">
    <br/>
    <br/>
    <br/>
  <form>

  <div class="form-outline mb-4">
  <input type="password" id="form1Example2" class="form-control" />
  <label class="form-label" for="form1Example2">Name</label>
</div>
<div class="form-outline mb-4">
  <input type="password" id="form1Example2" class="form-control" />
  <label class="form-label" for="form1Example2">UserName</label>
</div>
<div class="form-outline mb-4">
  <input type="email" id="form1Example1" class="form-control" />
  <label class="form-label" for="form1Example1">Email address</label>
</div>

<div class="form-outline mb-4">
  <input type="password" id="form1Example2" class="form-control" />
  <label class="form-label" for="form1Example2">Password</label>
</div>
<div class="form-outline mb-4">
  <input type="password" id="form1Example2" class="form-control" />
  <label class="form-label" for="form1Example2">Address</label>
</div>



  
    




<button type="submit" class="btn btn-primary btn-block">Sign in</button>
</form>
  </div>
</div>
      </section>
    </>
  );
};

export default App;
