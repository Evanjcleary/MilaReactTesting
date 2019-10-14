import React from "react";
import { Input } from "./Form";
import API from "../utils/API"

export default class EditMilaModal extends React.Component {

    state = {
        id: this.props.caption._id,
        caption: this.props.caption.caption,
        author: this.props.caption.author,
        category: this.props.caption.category,
        reference: this.props.caption.reference,
        lyric: this.props.caption.lyric,
        quote: this.props.caption.quote,
        originalAuthor: this.props.caption.originalAuthor,
        tags: this.props.caption.tags
    }

    componentDidMount() {
        console.log(this.props.caption)
        console.log(this.props.categories)
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        // var apiTags = this.props.tags;
        // var lowerCaseTags = apiTags.toLowerCase();
        // var splicedArr = lowerCaseTags.split(", ")
        // console.log(splicedArr);
        console.log(this.state);

    }


    render() {
        return (
            <div>
                <form>
                    <h5>Input your caption here</h5>
                    <Input value={this.state.caption} onChange={this.handleInputChange} name="caption" placeholder="Caption goes here" />
                    <select value={this.state.category} onChange={this.handleInputChange} name="category">

                        {this.props.categories.map(listedcategory => (
                            <option key={listedcategory._id} value={listedcategory.category}>{listedcategory.category}</option>
                        ))}

                    </select>
                    <Input value={this.state.author} onChange={this.handleInputChange} name="author" placeholder="Your name goes here" />
                    <Input value={this.state.reference} onChange={this.handleInputChange} name="reference" placeholder="Caption's reference goes here" />
                    <Input value={this.state.tags} onChange={this.handleInputChange} name="tags" placeholder="Tags go here, separate with commas!" />
                    <button onClick={this.handleFormSubmit}>Submit your caption</button>
                </form>
            </div>
        )
    }
}