import React, { Component }  from 'react'
import Article from './Article/index'
import oneOpen from '../decorators/oneOpen'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from "react-day-picker"
import 'react-day-picker/lib/style.css'

class ArticleList extends Component {


    state = {
        selectedArticles: null,
        from: null,
        to: null
    }

   

    render() {
        const { from, to } = this.state;
        const { articles, isItemOpen, toggleOpenItem } = this.props

        const listItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                isOpen = {isItemOpen(article.id)}
                openArticle = {toggleOpenItem(article.id)}
            />
        </li>)

        const options = articles.map((article) => ({
            label: article.title,
            value: article.id
        }))


        return (
            <div>
                <h1>Article list</h1>
                {!from && !to && <p>Please select the <strong>Start date</strong>.</p>}
                {from && !to && <p>Please select the <strong>Finish date</strong>.</p>}
                {from && to &&
                  <p>
                    Start date: {moment(from).format('L')} Finish date: {moment(to).format('L')}.
                    {' '}<a href="#" onClick={this.handleResetClick}>Reset</a>
                  </p>
                }
                <Select
                    options = {options}
                    multi = {true}
                    value = {this.state.selectedArticles}
                    onChange = {this.handleSelectChange}
                />
                <DayPicker
                  ref="daypicker"
                  selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
                  onDayClick={this.handleDayClick}
                />
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }

    handleSelectChange = (selectedArticles) => {
        console.log(selectedArticles)
        this.setState({
            selectedArticles
        })
    }

     handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range)
    }


    handleResetClick = (e) => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null
        });
    }

}

export default oneOpen(ArticleList)