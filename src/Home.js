import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import './App.css';

import { requestApiData } from "./actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }
  person1=(y,j)=>
    <div key={y.id} className="row">
      <img key={y.id} className="img" src={y.l} />
      </div>

  person = (x, i) =>
    <div key={x.id.value}>
      <h1 className="name">{i+1}) Name: {x.details.apartmentTypeTitle}</h1>
      {x.isInstantBookable===true?<h1>Bookable</h1>:<h1>Not Bookable</h1>}
      <h1>{x.photos.map(this.person1)}</h1>
      <h1 className="rating">Price: {x.price.total}{x.price.currency}</h1>
      <h1>Rating: {x.rating.count} Likes</h1>
      
    </div>;

  render() {
    const { offers = []} = this.props.data;
    console.log(offers);
    return offers.length
      ? <h1>
          {offers.map(this.person)}
        </h1>
      : <h1>loading...</h1>;
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);