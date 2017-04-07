import React from 'react';

// Components
import ProgressBar from './ProgressBar';
import AddCategory from './AddCategory';
import AddToDo from './AddToDo';
import CategoryList from './CategoryList';
import ToDoList from './ToDoList';

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategoryId: null,
            selectedCategory: null,
            categories: props.categories
        };
    }

    handleSelectCategory(id) {
        let selectedCategory = this.state.categories.filter(category => category.id === id);
        debugger
        this.setState({ selectedCategory: selectedCategory });
    }

    render() {
        if (this.state.selectedCategoryId) {
            console.log(this.state.selectedCategoryId)
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ProgressBar/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-md-6">
                        <AddCategory/>
                        <CategoryList
                            categories={this.state.categories}
                            onSelectCategory={this.handleSelectCategory}/>
                    </div>
                    <div className="col-xs-6 col-md-6">
                        <AddToDo/>
                        <ToDoList tasks={this.state.selectedCategory && this.state.selectedCategory.tasks} />
                    </div>
                </div>
            </div>
        );
    }
}
