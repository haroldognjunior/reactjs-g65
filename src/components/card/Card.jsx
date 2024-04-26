import "./Card.css";

function Card() {
  return (
    <div className="small">
      <div className="card">
        <img
          src="https://img.freepik.com/free-photo/finger-pressing-circle_1112-663.jpg?t=st=1713496483~exp=1713500083~hmac=444117d49f69d5d04aaa732a2ea875330b5bcdece74f5f63fe1eb0b83ac78090&w=740"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
