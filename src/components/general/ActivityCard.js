function ActivityCard({ imgSrc, title, activities }) {
  return (
    <div className="card col-md-3" style={{ margin: "5px" }}>
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <ul className="card-text">
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
        <div style={{ width: "100%", textAlign: "center" }}>
          <a href="#" className="btn btn-dark w-50">
            Book
          </a>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
