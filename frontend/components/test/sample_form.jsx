import React from 'react';
import OfficeListing from './office_listing';

class SampleForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      occupation: "",
      state: "",
      count: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
  }

  handleChange(field){
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  submit(e){
    e.preventDefault();
    //this.props.submit(this.state);
  }

  incrementCount(){
    let newCount = this.state.count;
    newCount += 1;
    this.setState({
      count: newCount
    });
  }

  generateOfficeListings(){
    switch (this.state.state) {
      case "New York":
        return ([
          <OfficeListing key="1" state={this.state.state} address="369 Broome St" manager="Elise"/>,
          <OfficeListing key="2" state={this.state.state} address="1440 Broadway" manager="Anna"/>
        ]);
      case "New Jersey":
        return ([
          <OfficeListing key="1" state={this.state.state} address="1234 Kristie Way" manager="Kristie"/>,
          <OfficeListing key="2" state={this.state.state} address="567 Jones Blvd" manager="Peter" />
        ]);
      case "Virginia":
        return ([
          <OfficeListing key="1" state={this.state.state} address="1211 Chadsworth Court" manager="Alicia"/>,
          <OfficeListing key="2" state={this.state.state} address="4209 Kings Mill Lane" manager="Helen"/>
        ]);
      default:
        return "";
    }
  }

  render(){

    let officeListings = this.generateOfficeListings();

    return (
      <main className="sample-form-holder">
        <form className="sample-form" onSubmit={this.submit}>
          <h1 id="test-form-title">Test Sign Up Form</h1>
          <label className="test-form-label" >Name
            <br></br>
            <input type="text" value={this.state.name} onChange={this.handleChange("name")}></input>
          </label>

          <label className="test-form-label" >Occupation
            <br></br>
            <select defaultValue="select" className="occupation-dropdown" onChange={this.handleChange("occupation")}>
              <option value="select" disabled>Select A Choice</option>
              <option value="Engineer">Engineer</option>
              <option value="Doctor">Doctor</option>
              <option value="Accountant">Accountant</option>
            </select>
          </label>

          <label className="test-form-label" >State
            <br></br>
            <div onChange={this.handleChange("state")}>
              <label className="state-name" >New York
                <input type="radio" value="New York" checked={this.state.state === "New York"}></input>
              </label>
              <label className="state-name" >New Jersey
                <input type="radio" value="New Jersey" checked={this.state.state === "New Jersey"}></input>
              </label>
              <label className="state-name" >Virginia
                <input type="radio" value="Virginia" checked={this.state.state === "Virginia"}></input>
              </label>
            </div>
          </label>

          <label>Check out these great offices near you!
            <br></br>
            {officeListings}
          </label>

          <section className="counter-section">
            <label>Current Count
              <p>{this.state.count}</p>
            </label>

            <label>Counter Button
              <button onClick={this.incrementCount}>Increase Count</button>
            </label>
          </section>

          <label>Submit
            <input type="submit"></input>
          </label>
        </form>
      </main>
    );
  }
}

export default SampleForm;
