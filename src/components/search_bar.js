/**
 * Created by roman on 10.04.2016.
 */
import React, {Component} from 'react';


export default class SearchBar extends Component {

    constructor (props) {
        super(props);
        this.state = {term: ''}
    }

    onInputChange (term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render () {
        return (
            <div className="search-bar">

                <input
                    value={this.state.term}
                    onChange={(evt) => this.onInputChange(evt.target.value)} />
            </div>
        );

    }

}