import React, { Component } from "react";
import { Input } from "../Form";
import API from "../../utils/API"
import "./style.css";
import cogoToast from "cogo-toast";


class UserCaptionCreator extends Component {

    state = {
        caption: "",
        category: this.props.categories[0].category,
        username: "",
        reference: "",
        lyric: "",
        quote: "",
        originalAuthor: "",
        tags: "",
        categories: [],
        userID: ""
    }

    componentDidMount() {
        // this.gatherCaptions();
        console.log(this.props.categories);
        console.log(this.props.userdata)
        this.setState({
            userID: this.props.userdata[0]._id
        })
    }

    


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();

        var apiTags = this.state.tags;
        var lowerCaseTags = apiTags.toLowerCase();
        var splicedArr = lowerCaseTags.split(", ")
        console.log(splicedArr)

          API.saveCommunityCaption( this.state.userID, {
            caption: this.state.caption,
            category: this.state.category,
            username: this.state.username,
            reference: this.state.reference,
            originalAuthor: this.state.originalAuthor,
            tags: splicedArr
        })
        .then(res => cogoToast.success("Your caption was saved!"))
        .catch(err => console.log)
    }

    

    render() {
        return (
            <div className="card" id="createCard">
                <form>
                    <h5>Input your caption here</h5>
                    <Input value={this.state.caption} onChange={this.handleInputChange} name="caption" placeholder="Caption goes here" />
                    {/* <Input value={this.state.category} onChange={this.handleInputChange} name="category" placeholder="Category goes here" /> */}
                    <select value={this.state.category} onChange={this.handleInputChange} name="category">

                        {this.props.categories.map(listedcategory => (
                           <option key={listedcategory._id} value={listedcategory.category}>{listedcategory.category}</option>
                        ))}

                    </select>
                    <Input value={this.state.username} onChange={this.handleInputChange} name="username" placeholder="Your name goes here" />
                    <Input value={this.state.reference} onChange={this.handleInputChange} name="reference" placeholder="Caption's reference goes here" />
                    {/* <Input value={this.state.lyric} onChange={this.handleInputchange} name="caption" placeholder="Is this a Lyric? (true or false)"/> */}
                    {/* <Input value={this.state.quote} onChange={this.handleInputchange} name="quote" placeholder="Is this a quote? (true or false)"/> */}
                    <Input value={this.state.tags} onChange={this.handleInputChange} name="tags" placeholder="Tags go here, separate with commas!" />
                    <button onClick={this.handleFormSubmit}>Submit your caption</button>
                </form>
            </div>
        )
    }
}

export default UserCaptionCreator