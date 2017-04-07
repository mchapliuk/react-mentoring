import React from 'react';

// Components

export default class CategoryList extends React.Component {
    propTypes: {
        categories: React.PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="list-group">
                { this.props.categories.map((category, index) =>
                    <li className="list-group-item"
                        key={category.id}
                        onClick={this.props.onSelectCategory.bind(this, category.id)}>
                        { category.title }
                    </li>) }
            </ul>
        );
    }
};
