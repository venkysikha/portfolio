import inotebook from './iconss/inotebook.png';
import todo from './iconss/toDoList.png';
import './Project.css'
function Project() {
  return (
    <>
    <div className="container">
      <h2 className="text-center">My Recent <span style={{color:"purple"}}>Works</span></h2>
      <br/>
     <div className="text-center"> Here are a few projects I've worked on recent </div>
      <div className="row">
        <div className="col col-md-4">
              <div className="card" style={{width:"18rem"}}>
                <img className="card-img-top" src={inotebook} alt="inotebook project"/>
                <div className="card-body">
                  <h5 className="card-title">Inotebook</h5>
                  <p className="card-text">
                    This is inotebook website where you can store the important notes and 
                    you can access it. yours notes will visible to you only.App was build using react
                    and Mongodb for database
                  </p>
                  <a href="https://inotebook-ruddy.vercel.app/" className="btn btn-primary">inotebook</a>
                </div>
</div>
        </div>
        <div className="col col-md-4">
        <div className="card" style={{width:"18rem"}}>
                <img className="card-img-top" src={todo} alt="inotebook project"/>
                <div className="card-body">
                  <h5 className="card-title">To-Do-List</h5>
                  <p className="card-text">
                    This is to-do-list where you can add your daily tasks and after completion of the task you can delete your after completion.
                    This is app using basic html css javascript
                  </p>
                  <a href="https://to-do-list-gamma-seven-56.vercel.app/" className="btn btn-primary">todo</a>
                </div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Project;
