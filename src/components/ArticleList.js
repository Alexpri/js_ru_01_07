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
        selectedDayStart: null,
        selectedDayEnd: null
    }

    render() {
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

        const dateStart = this.state.selectedDayStart ? this.state.selectedDayStart.toLocaleDateString() : null
        const dateEnd = this.state.selectedDayEnd ? this.state.selectedDayEnd.toLocaleDateString() : null

        return (
            <div>
                <h1>Article list</h1>
                <div className="date-start">Date start: {dateStart}</div>
                <div className="date-end">Date end: {dateEnd} </div>
                <Select
                    options = {options}
                    multi = {true}
                    value = {this.state.selectedArticles}
                    onChange = {this.handleSelectChange}
                />
                <DayPicker
                    onDayClick={ this.handleDateChange }

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

    handleDateChange = (e, selectedDay, modifiers) => {

        if (this.state.selectedDayStart != null) {

            if (selectedDay.toLocaleDateString() >= this.state.selectedDayStart.toLocaleDateString()) {
                writeStateStart(selectedDay)
            } else {
                writeStateEnd(selectedDay)
            }
        } else {
            writeStateStart(selectedDay)
        }
    }

    writeStateStart = (selectedDay) => {
        this.setState({ selectedDayStart: selectedDay })
    }

    writeStateEnd = (selectedDay) => {
        this.setState({ selectedDayStart: selectedDay })
    }
}

export default oneOpen(ArticleList)