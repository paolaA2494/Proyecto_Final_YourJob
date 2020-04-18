import React from "react";
import Searchbar2 from "../components/Searchbar2";
import Card from "../components/Card.jsx";
import axios from "axios";

class ShowCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      filter: "",
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const { data } = await axios.get("https://your-job.now.sh/worker");
      this.setState({
        data,
      });
    } catch (error) {}
  };

  selectedSearchOption = (service) => {
    console.log(service);
    this.setState({ filter: service });
  };

  render() {
    console.log(this.state);
    let fullData = this.state.data;

    if (this.state.filter !== "") {
      fullData = this.state.data.filter(
        (item) => item.serviceType === this.state.filter
      );
    }

    return (
      <React.Fragment>
        <Searchbar2 handlChange={this.selectedSearchOption} />
        <Card info={fullData} />
      </React.Fragment>
    );
  }
}

export default ShowCard;
